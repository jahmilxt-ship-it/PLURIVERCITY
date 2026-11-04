/* =====================================================================
PLURIVERSITY — game engine (Scene 1 version 2)
You do NOT need to change anything in this file, except the three
settings just below if you want to.
All the game's content lives in game-data.js, made from the node sheet.
===================================================================== */
var TIMER
_
SECONDS = 10; // the clock on every screen with 2 or more
choices
var TIMEOUT
_
PAUSE = 2500; // how long "Time's up" / "Wrong move" shows, in
thousandths of a second
var HOTSPOT
_
WIDTH = 30; // in a 360 room, how close (in degrees) you
must turn to a hotspot to see it
var DATA = window.GAME
DATA;
_
var SAVE
_
KEY = "pluriversity-save-v2";
// Friendly names for the arrivals card fields
var CARD
LABELS = {
_
avatar: "Arriving as"
, side: "Side"
arrival
_
time: "Flight landed"
, subpath: "Field / group / role"
, reason: "Purpose of visit"
, passport:
,
"Passport shown"
,
stay_
length: "Length of stay"
, area: "Staying in"
, declared: "Declared at
the desk"
, 
hotel: "Hotel"
, transport: "Leaving by"
};
var state = loadState();
var ytPlayer = null; // the YouTube player, once it is ready
var ytReady = false;
var current = null; // the node on screen now
var currentId = "";
var clock = null; // the running countdown, if any
var timeupTimer = null;
var hotspotPoll = null; // checks which way the player is looking in a 360
room
/* ---------- Saving and loading (the arrivals card is the save file) -------
--- */
function freshState() {
return { node: DATA.start, card: {}, avatarCode: ""
[], checkpoint: null, factfile: [] };
, roleCode: ""
, history:
}
function loadState() {
try {
saved; }
} catch (e) {}
return freshState();
var saved = JSON.parse(localStorage.getItem(SAVE
KEY));
_
if (saved && saved.node) { saved.factfile = saved.factfile || []; return
}
function saveState() {
try { localStorage.setItem(SAVE
_
KEY, JSON.stringify(state)); } catch (e) {}
}
function copy(x) { return JSON.parse(JSON.stringify(x)); }
/* ---------- Helpers ---------- */
function $(id) { return document.getElementById(id); }
function isVideoType(type) {
type = (type || "").toLowerCase();
return type.indexOf("video") >= 0 || type.indexOf("360") >= 0;
}
function is360(type) { return (type || "").indexOf("360") >= 0; }
// The player's landing time as a code: MORNING, AFTERNOON or EVENING
function timeCode() {
var t = (state.card.arrival
_
time || "Morning").split(" ")[0];
return t.toUpperCase();
}
// Turns "JHB
ARR
020
{AVATAR}" into "JHB
ARR
020
_
_
_
_
_
_
{ROLE} and {TIME}
function resolveNext(next) {
return (next || "")
.replace("{AVATAR}"
.replace("{ROLE}"
.replace("{TIME}"
, state.avatarCode || "BIZ")
, state.roleCode || "")
, timeCode());
BIZ"
, and the same for
}
// Hotels for the area on the card.
"Sandton — premium business" matches
facts with topic "Hotel – Sandton"
function hotelsForArea() {
var area = (state.card.area || "Sandton").toLowerCase();
return (DATA.facts || []).filter(function (f) {
var topic = (f.topic || "").toLowerCase();
if (topic.indexOf("hotel") !== 0) return false;
var place = topic.replace(/^hotel\s*[–—-]\s*/,
"").trim();
return place && area.indexOf(place) >= 0;
});
}
// Makes the list of buttons for a node. Handles "Hotel 1 (from Facts)"
labels.
function buildChoices(node) {
var list = [];
var hotels = hotelsForArea();
node.choices.forEach(function (c) {
var m = /^hotel\s*(\d+)/i.exec(c.label);
if (m) {
var h = hotels[parseInt(m[1], 10) - 1];
if (!h) return; // no hotel in that slot: skip the button
var name = h.text.split("
—
")[0];
list.push({ label: name, next: c.next, link: h.link });
} else if (!/^\(auto/i.test(c.label)) {
list.push({ label: c.label, next: c.next });
}
});
return list;
function isAutoOnly(node) {
return node.choices.length === 1 && /^\(auto/i.test(node.choices[0].label);
}
}
/* ---------- The countdown clock ---------- */
function secondsFor(node, buttonCount) {
var t = String(node.timer || "").trim();
if (t !== "") return parseFloat(t) || 0; // the sheet's Timer (s)
wins; 0 = no clock
return buttonCount >= 2 ? TIMER
_
SECONDS : 0; // default: clock only when
there's a real choice
}
function startClock(node, buttonCount) {
stopClock();
var total = secondsFor(node, buttonCount);
if (!total) return;
var started = Date.now();
$("clock").style.display = "block";
clock = setInterval(function () {
var left = total - (Date.now() - started) / 1000;
if (left <= 0) { stopClock(); timeUp(); return; }
$("clockbar").style.width = (left / total * 100) + "%";
$("clocknum").textContent = Math.ceil(left);
$("clock").className = left <= 3 ? "urgent" : "";
}, 100);
$("clockbar").style.width = "100%";
$("clocknum").textContent = total;
}
function stopClock() {
if (clock) clearInterval(clock);
clock = null;
$("clock").style.display = "none";
}
// Out of time, or a wrong move: lose this stage and go back to its first
screen
function timeUp() { fail("TIME'S UP"); }
function fail(title) {
var cp = state.checkpoint;
stopClock();
stopHotspots();
stopVideo();
hideAll();
var msg = $("timeup");
$("timeup-title").textContent = title;
msg.style.display = "flex";
timeupTimer = setTimeout(function () {
msg.style.display = "none";
if (cp) {
state.card = copy(cp.card);
state.avatarCode = cp.avatarCode;
state.roleCode = cp.roleCode;
state.history = copy(cp.history);
show(cp.node);
} else {
restart();
}
}, TIMEOUT
PAUSE);
_
}
/* ---------- Drawing the screen ---------- */
function show(nodeId) {
var node = DATA.nodes[nodeId];
clearTimeout(timeupTimer);
stopClock();
stopHotspots();
stopVideo();
hideAll();
if (!node) { showEnd(nodeId); return; }
current = node;
currentId = nodeId;
state.node = nodeId;
if (["BIZ"
,
"TOU"
,
"MOV"].indexOf(node.avatar) >= 0) state.avatarCode =
node.avatar;
if (node.role) state.roleCode = node.role;
if (/^y/i.test(node.checkpoint || "")) {
// a new stage starts here: remember how things stood, in case the clock
runs out
state.checkpoint = { node: nodeId, card: copy(state.card), avatarCode:
state.avatarCode,
roleCode: state.roleCode, history:
copy(state.history) };
}
saveState();
drawCard();
$("where").textContent = (node.step || "") + (node.location ? " · " +
node.location : "");
$("devinfo").textContent = "Node: " + nodeId;
showFacts(node);
showSponsor(node);
if (node.youtube) {
playVideo(node); // any node with a video ID
plays it
} else if (isVideoType(node.type)) {
showPlaceholder(node); // video not made yet
} else {
showChoiceScreen(node); // choice screen / card screen
}
}
function hideAll() {
$("placeholder").style.display = "none";
$("choicescreen").style.display = "none";
$("timeup").style.display = "none";
$("player").style.visibility = "hidden";
$("choices").innerHTML = "";
$("choices").className = "";
$("screen").appendChild($("choices"));
}
function showChoiceScreen(node) {
var cs = $("choicescreen");
cs.className = (node.type || "").toLowerCase().indexOf("card") >= 0 ?
"cardstyle" : "";
cs.style.display = "flex";
$("prompt").textContent = node.prompt || "";
cs.appendChild($("choices"));
drawButtons(node, false, true);
}
function showPlaceholder(node) {
$("placeholder").style.display = "flex";
$("ph-id").textContent = currentId;
$("ph-note").textContent = (node.type || "") + (node.notes ? "
—
" +
node.notes : "") +
(hotspots(node).length ? " [Hotspots at " + node.hotspots + " degrees:
with the real 360 video, each button only appears when the player looks that
way.]" : "");
$("ph-play").onclick = function () {
$("placeholder").style.display = "none";
afterVideo(node);
};
starts now
// 360 rooms have no "end": their choices show right away, and the clock
$("ph-play").style.display = is360(node.type) ? "none" : "inline-block";
if (is360(node.type)) { drawButtons(node, true, true); }
}
function afterVideo(node) {
if (node !== current) return;
if (isAutoOnly(node)) { go(node.choices[0]); return; }
if (is360(node.type)) {
if (!hotspots(node).length) startClock(node, buildChoices(node).length);
// the 360 clip has ended: now decide
} else if (node.prompt) {
showChoiceScreen(node); // after the clip, the
question on its own screen
} else {
drawButtons(node, true, true);
}
}
// overlay = buttons sit over the video; timed = start the clock now
function drawButtons(node, overlay, timed) {
var box = $("choices");
box.innerHTML = "";
if (overlay) { box.className = "overlay"; $("screen").appendChild(box); }
var list = buildChoices(node);
list.forEach(function (c, i) {
var b = document.createElement("button");
b.className = "choice";
b.setAttribute("data-i"
, i);
b.textContent = c.label;
if (c.link) {
var a = document.createElement("a");
a.className = "moreinfo"; a.href = c.link; a.target = "
blank";
_
a.textContent = "More info ↗";
a.onclick = function (e) { e.stopPropagation(); };
b.appendChild(a);
}
b.onclick = function () { go(c); };
box.appendChild(b);
});
if (timed) startClock(node, list.length);
}
/* ---------- Hidden hotspots in 360 rooms ---------- */
// The sheet's "Hotspots (°)" column: one direction per choice, e.g.
"150,
280" (0 = straight ahead)
function hotspots(node) {
return String(node.hotspots || "").split("
,
").map(function (x) { return
x.trim(); })
.filter(function (x) { return x !== ""; }).map(Number);
}
function startHotspots(spots) {
stopHotspots();
var buttons = $("choices").querySelectorAll("button.choice");
hotspotPoll = setInterval(function () {
var view = ytReady && ytPlayer.getSphericalProperties ?
ytPlayer.getSphericalProperties() : null;
buttons.forEach(function (b) {
var aim = spots[parseInt(b.getAttribute("data-i"), 10)];
if (!view || view.yaw === undefined || aim === undefined || isNaN(aim))
{ b.style.visibility = "visible"; return; }
var off = Math.abs(((view.yaw - aim) % 360 + 540) % 360 - 180); //
how far the player is looking from the hotspot
b.style.visibility = off <= HOTSPOT
WIDTH ? "visible" : "hidden";
_
});
}, 200);
}
function stopHotspots() {
if (hotspotPoll) clearInterval(hotspotPoll);
hotspotPoll = null;
}
/* ----------
"Did you know?" bubbles and the Fact file ---------- */
// Fact IDs starting with T are trivia: a bubble the player taps to reveal,
then it's kept in their Fact file
function showTrivia(node) {
var box = $("bubble");
var ids = (node.factIds || "").split(/[,\s]+/).filter(function (x) { return
/^T\d+/.test(x); });
var f = ids.length ? (DATA.facts || []).find(function (x) { return x.id ===
ids[0]; }) : null;
if (!f) { box.style.display = "none"; return; }
box.style.display = "block";
box.className = "";
$("bubble-text").textContent = f.text;
$("bubble-btn").onclick = function () {
box.className = "open";
if (state.factfile.indexOf(f.id) < 0) { state.factfile.push(f.id);
saveState(); drawCard(); }
};
}
function showFacts(node) {
var box = $("fact");
showTrivia(node);
var ids = (node.factIds || "").split(/[,\s]+/).filter(function (x) { return
/^F\d+/.test(x); });
var texts = ids.map(function (id) {
var f = (DATA.facts || []).find(function (x) { return x.id === id; });
return f ? f.text : "";
}).filter(Boolean);
if (texts.length) {
box.innerHTML = "<b>Good to know:</b> " + texts.map(escapeHtml).join("
");
box.style.display = "block";
} else {
box.style.display = "none";
}
}
// The Brand slot column: only filled in once a brand has signed
function showSponsor(node) {
var box = $("sponsor");
if (node.brand) {
box.textContent = "Presented by " + node.brand;
box.style.display = "block";
} else {
box.style.display = "none";
}
}
function drawCard() {
var dl = $("card");
dl.innerHTML = "";
Object.keys(state.card).forEach(function (k) {
dl.innerHTML += "<dt>" + escapeHtml(CARD
LABELS[k] || k) + "</dt><dd>" +
_
escapeHtml(state.card[k]) + "</dd>";
});
if (!dl.innerHTML) dl.innerHTML = "<dd style='border:none;font-
weight:normal'>Your choices will fill in this card.</dd>";
var ff = $("factfile");
var total = (DATA.facts || []).filter(function (x) { return
/^T\d+/.test(x.id); }).length;
ff.innerHTML = "<h3>FACT FILE · " + state.factfile.length + " of " + total
+ " found</h3>" +
state.factfile.map(function (id) {
var f = (DATA.facts || []).find(function (x) { return x.id === id; });
return f ? "<p>" + escapeHtml(f.text) + "</p>" : "";
}).join("");
}
function showEnd(nodeId) {
stopClock();
var cs = $("choicescreen");
cs.className = "cardstyle";
cs.style.display = "flex";
drawCard();
$("prompt").textContent = "End of Scene 1 — next stop: " + nodeId;
$("where").textContent = "Scene 1 complete";
$("devinfo").textContent = "Node " + nodeId + " is not built yet.
$("fact").style.display = "none";
$("bubble").style.display = "none";
$("sponsor").style.display = "none";
cs.appendChild($("choices"));
var b = document.createElement("button");
b.className = "choice"; b.textContent = "Play again";
b.onclick = restart;
$("choices").appendChild(b);
";
}
function escapeHtml(s) {
return String(s).replace(/[&<>"]/g, function (c) {
return { "&": "&amp;"
,
"<": "&lt;"
,
">": "&gt;"
,
});
'"': "&quot;" }[c];
}
/* ---------- Moving between nodes ---------- */
function go(choice) {
stopClock();
if (current && current.saves && !/^\(auto/i.test(choice.label)) {
state.card[current.saves] = choice.label;
}
var target = resolveNext(choice.next);
if (target.toUpperCase() === "FAIL") { fail("WRONG MOVE"); return; } // a
wrong answer loses the stage
state.history.push({ node: state.node, card: copy(state.card), avatarCode:
state.avatarCode, roleCode: state.roleCode });
show(target);
}
function back() {
var prev = state.history.pop();
if (!prev) return;
// undo what the previous screen wrote on the card
state.card = prev.card;
state.avatarCode = prev.avatarCode;
state.roleCode = prev.roleCode || "";
var prevNode = DATA.nodes[prev.node];
if (prevNode && prevNode.saves) delete state.card[prevNode.saves];
show(prev.node);
}
function restart() {
state = freshState();
saveState();
show(state.node);
}
/* ---------- YouTube ---------- */
function onYouTubeIframeAPIReady() {
ytPlayer = new YT.Player("player"
, {
playerVars: { playsinline: 1, rel: 0, modestbranding: 1 },
events: {
onReady: function () { ytReady = true; if (current && current.youtube)
playVideo(current); },
onStateChange: function (e) { if (e.data === YT.PlayerState.ENDED)
afterVideo(current); },
onError: function () { showVideoError(current); }
}
});
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
function playVideo(node) {
$("player").style.visibility = "visible";
if (is360(node.type)) {
var spots = hotspots(node);
drawButtons(node, true, spots.length > 0); // with hotspots the search
is against the clock from the start;
if (spots.length) startHotspots(spots); // without, the clock starts
when the 360 clip ends
}
if (!ytReady) { // will start once
YouTube is ready
setTimeout(function () {
if (!ytReady && current === node) {
showVideoError(node);
$("ph-note").textContent = "YouTube did not load. Check your internet
connection. (Videos only play from your GitHub Pages link, not from a file on
your computer.)";
}
}, 8000);
return;
}
ytPlayer.loadVideoById(cleanId(node.youtube));
}
// Accepts a plain ID or a full YouTube link
function cleanId(v) {
v = String(v).trim();
var m = /(?:v=|youtu\.be\/|shorts\/|embed\/)([A-Za-z0-9
_
return m ? m[1] : v;
-]{11})/.exec(v);
function stopVideo() {
if (ytReady && ytPlayer && ytPlayer.stopVideo) ytPlayer.stopVideo();
}
}
function showVideoError(node) {
if (!node) return;
$("player").style.visibility = "hidden";
showPlaceholder(node);
$("ph-note").textContent = "This YouTube video would not play. Check the
video ID in the node sheet, and that the video is Unlisted (not Private) with
embedding allowed.
";
}
/* ---------- Start ---------- */
$("backbtn").onclick = back;
$("restartbtn").onclick = function () {
if (confirm("Start over? This clears your arrivals card.
")) restart();
};
show(state.node);   
   
