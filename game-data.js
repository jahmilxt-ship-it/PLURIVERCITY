/* Made with tool.html on 2026-11-04. Do not edit by hand: change the node sheet and run the tool again. */
window.GAME_DATA = {
  "start": "JHB_ARR_000",
  "nodes": {
    "JHB_ARR_000": {
      "step": "1 Fly-over",
      "checkpoint": "Yes",
      "avatar": "ALL",
      "role": "",
      "location": "Plane window over Johannesburg",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "JHB_ARR_001"
        }
      ],
      "saves": "",
      "factIds": "T001",
      "brandRule": "Open – neutral scene",
      "brand": "",
      "notes": "Opening shot. No choices."
    },
    "JHB_ARR_001": {
      "step": "2 Who are you?",
      "checkpoint": "",
      "avatar": "ALL",
      "role": "",
      "location": "Touchdown, plane cabin",
      "type": "Choice screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "You've landed in Johannesburg. Who are you?",
      "choices": [
        {
          "label": "Business",
          "next": "JHB_ARR_002_BIZ"
        },
        {
          "label": "Tourist",
          "next": "JHB_ARR_002_TOU"
        },
        {
          "label": "Life as a Movie",
          "next": "JHB_ARR_002_MOV"
        }
      ],
      "saves": "avatar",
      "factIds": "",
      "brandRule": "Open – neutral scene",
      "brand": "",
      "notes": ""
    },
    "JHB_ARR_002_BIZ": {
      "step": "3 Sub-path",
      "checkpoint": "",
      "avatar": "BIZ",
      "role": "",
      "location": "Plane cabin",
      "type": "Choice screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "What's your field?",
      "choices": [
        {
          "label": "Finance",
          "next": "JHB_ARR_010"
        },
        {
          "label": "Legal",
          "next": "JHB_ARR_010"
        },
        {
          "label": "Tech / IT",
          "next": "JHB_ARR_010"
        },
        {
          "label": "Diplomatic",
          "next": "JHB_ARR_010"
        },
        {
          "label": "Mining & energy",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "subpath",
      "factIds": "",
      "brandRule": "Open",
      "brand": "",
      "notes": "5 choices: fine in the web player (YouTube end screens allow only 4)."
    },
    "JHB_ARR_002_TOU": {
      "step": "3 Sub-path",
      "checkpoint": "",
      "avatar": "TOU",
      "role": "",
      "location": "Plane cabin",
      "type": "Choice screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Who are you travelling with?",
      "choices": [
        {
          "label": "Solo",
          "next": "JHB_ARR_010"
        },
        {
          "label": "Couple",
          "next": "JHB_ARR_010"
        },
        {
          "label": "Family",
          "next": "JHB_ARR_010"
        },
        {
          "label": "Group tour",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "subpath",
      "factIds": "",
      "brandRule": "Open",
      "brand": "",
      "notes": ""
    },
    "JHB_ARR_002_MOV": {
      "step": "3 Sub-path",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "",
      "location": "Plane cabin",
      "type": "Choice screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Joburg is the movie. You're the lead. Pick a side.",
      "choices": [
        {
          "label": "Good guy",
          "next": "JHB_ARR_002_MOV_GOOD"
        },
        {
          "label": "Bad guy",
          "next": "JHB_ARR_002_MOV_BAD"
        }
      ],
      "saves": "side",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": ""
    },
    "JHB_ARR_002_MOV_GOOD": {
      "step": "3 Sub-path",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "",
      "location": "Plane cabin",
      "type": "Choice screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Your role?",
      "choices": [
        {
          "label": "Interpol agent",
          "next": "JHB_ARR_003_INT"
        },
        {
          "label": "Anti-poaching agent",
          "next": "JHB_ARR_003_APA"
        },
        {
          "label": "Bond-style spy",
          "next": "JHB_ARR_003_SPY"
        }
      ],
      "saves": "subpath",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Matched pairs: INT vs SYN, APA vs POA, SPY vs HIT."
    },
    "JHB_ARR_002_MOV_BAD": {
      "step": "3 Sub-path",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "",
      "location": "Plane cabin",
      "type": "Choice screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Your role?",
      "choices": [
        {
          "label": "Crime syndicate boss",
          "next": "JHB_ARR_003_SYN"
        },
        {
          "label": "Master poacher",
          "next": "JHB_ARR_003_POA"
        },
        {
          "label": "International hitman",
          "next": "JHB_ARR_003_HIT"
        }
      ],
      "saves": "subpath",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": ""
    },
    "JHB_ARR_003_INT": {
      "step": "3b Role briefing",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "INT",
      "location": "Plane cabin",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Interpol agent. You flagged a syndicate boss on this flight. Watch him at the passport desk.",
      "choices": [
        {
          "label": "Continue",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Opponent: crime syndicate boss (SYN)."
    },
    "JHB_ARR_003_APA": {
      "step": "3b Role briefing",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "APA",
      "location": "Plane cabin",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Anti-poaching agent. You're here on official credentials. A master poacher landed ahead of you.",
      "choices": [
        {
          "label": "Continue",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Opponent: master poacher (POA)."
    },
    "JHB_ARR_003_SPY": {
      "step": "3b Role briefing",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "SPY",
      "location": "Plane cabin",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Bond-style spy. Diplomatic cover. There's chatter about a threat to a VIP at tomorrow's summit.",
      "choices": [
        {
          "label": "Continue",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Opponent: international hitman (HIT)."
    },
    "JHB_ARR_003_SYN": {
      "step": "3b Role briefing",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "SYN",
      "location": "Plane cabin",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Crime syndicate boss. You're here to build a crew for tomorrow's job. First, get through customs.",
      "choices": [
        {
          "label": "Continue",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Opponent: Interpol agent (INT). The heist plan is never shown step by step."
    },
    "JHB_ARR_003_POA": {
      "step": "3b Role briefing",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "POA",
      "location": "Plane cabin",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Master poacher. Your cover: a wealthy hunting tourist. A fixer is waiting somewhere in arrivals.",
      "choices": [
        {
          "label": "Continue",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Opponent: anti-poaching agent (APA). Poaching methods stay purely cinematic."
    },
    "JHB_ARR_003_HIT": {
      "step": "3b Role briefing",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "HIT",
      "location": "Plane cabin",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "International hitman. A forgettable businessman. Everything is pre-booked.",
      "choices": [
        {
          "label": "Continue",
          "next": "JHB_ARR_010"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Opponent: Bond-style spy (SPY). Weapons and the plan stay cinematic."
    },
    "JHB_ARR_010": {
      "step": "4 Arrivals hall",
      "checkpoint": "Yes",
      "avatar": "ALL",
      "role": "",
      "location": "O.R. Tambo arrivals hall",
      "type": "360 room",
      "timer": "20",
      "hotspots": "150",
      "youtube": "",
      "prompt": "Look around.",
      "choices": [
        {
          "label": "Fill in your arrivals card",
          "next": "JHB_ARR_015"
        }
      ],
      "saves": "",
      "factIds": "T002",
      "brandRule": "Open – neutral scene",
      "brand": "",
      "notes": "One 360 room for everyone. The exit hotspot is hidden: the player must turn to find it within 20 s. 150° is a placeholder: set it once the video is made. Brands here are seen by all three avatars, so keep them neutral."
    },
    "JHB_ARR_015": {
      "step": "4b Flight time",
      "checkpoint": "",
      "avatar": "ALL",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "What time did your flight land?",
      "choices": [
        {
          "label": "Morning",
          "next": "JHB_ARR_020_{AVATAR}"
        },
        {
          "label": "Afternoon",
          "next": "JHB_ARR_020_{AVATAR}"
        },
        {
          "label": "Evening",
          "next": "JHB_ARR_020_{AVATAR}"
        }
      ],
      "saves": "arrival_time",
      "factIds": "T003",
      "brandRule": "Open – neutral scene",
      "brand": "",
      "notes": "Placeholder: becomes 'Where did you fly in from?' once the home cities are decided. Picks the time-of-day clips in Scene 2 ({TIME})."
    },
    "JHB_ARR_020_BIZ": {
      "step": "5 Card: reason",
      "checkpoint": "",
      "avatar": "BIZ",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Purpose of your visit?",
      "choices": [
        {
          "label": "Meetings",
          "next": "JHB_ARR_021"
        },
        {
          "label": "Conference",
          "next": "JHB_ARR_021"
        },
        {
          "label": "Closing a deal",
          "next": "JHB_ARR_021"
        }
      ],
      "saves": "reason",
      "factIds": "",
      "brandRule": "Open",
      "brand": "",
      "notes": ""
    },
    "JHB_ARR_020_TOU": {
      "step": "5 Card: reason",
      "checkpoint": "",
      "avatar": "TOU",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "What are you here for?",
      "choices": [
        {
          "label": "Culture",
          "next": "JHB_ARR_021"
        },
        {
          "label": "Food",
          "next": "JHB_ARR_021"
        },
        {
          "label": "Nightlife",
          "next": "JHB_ARR_021"
        },
        {
          "label": "History",
          "next": "JHB_ARR_021"
        }
      ],
      "saves": "reason",
      "factIds": "",
      "brandRule": "Open",
      "brand": "",
      "notes": ""
    },
    "JHB_ARR_020_MOV": {
      "step": "5 Card: passport",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "",
      "location": "Arrivals card / your bag",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Three passports in your bag. Which one do you show?",
      "choices": [
        {
          "label": "Passport A (90 days)",
          "next": "JHB_ARR_021"
        },
        {
          "label": "Passport B — South Korea (30 days)",
          "next": "JHB_ARR_021"
        },
        {
          "label": "Passport C (needs a visa)",
          "next": "JHB_ARR_021"
        }
      ],
      "saves": "passport",
      "factIds": "F001, F002, F003, F004",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Passports must be checked against Home Affairs before making the videos."
    },
    "JHB_ARR_021": {
      "step": "6 Card: length of stay",
      "checkpoint": "",
      "avatar": "ALL",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "How long are you staying?",
      "choices": [
        {
          "label": "Under a week",
          "next": "JHB_ARR_022_{AVATAR}"
        },
        {
          "label": "1–2 weeks",
          "next": "JHB_ARR_022_{AVATAR}"
        },
        {
          "label": "Up to 30 days",
          "next": "JHB_ARR_022_{AVATAR}"
        },
        {
          "label": "Up to 90 days",
          "next": "JHB_ARR_022_{AVATAR}"
        }
      ],
      "saves": "stay_length",
      "factIds": "F001",
      "brandRule": "Open – neutral scene",
      "brand": "",
      "notes": "MOV: 90 days on a 30-day passport = trouble at the desk."
    },
    "JHB_ARR_022_BIZ": {
      "step": "7 Card: tier and area",
      "checkpoint": "",
      "avatar": "BIZ",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Where will you be based?",
      "choices": [
        {
          "label": "Sandton — premium business",
          "next": "JHB_ARR_023"
        },
        {
          "label": "Rosebank — budget business",
          "next": "JHB_ARR_023"
        },
        {
          "label": "Pretoria — diplomatic",
          "next": "JHB_ARR_023"
        }
      ],
      "saves": "area",
      "factIds": "F005, F006",
      "brandRule": "Open",
      "brand": "",
      "notes": "Business tiers from the Scene 2 plan. Rosebank for budget business is still to confirm."
    },
    "JHB_ARR_022_TOU": {
      "step": "7 Card: tier and area",
      "checkpoint": "",
      "avatar": "TOU",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "What kind of trip is it?",
      "choices": [
        {
          "label": "Luxury — Sandton",
          "next": "JHB_ARR_023"
        },
        {
          "label": "Mid-range — Rosebank",
          "next": "JHB_ARR_023"
        },
        {
          "label": "Creative & cultural — Maboneng",
          "next": "JHB_ARR_023"
        },
        {
          "label": "Backpacker — Soweto",
          "next": "JHB_ARR_023"
        }
      ],
      "saves": "area",
      "factIds": "F008, T005",
      "brandRule": "Open",
      "brand": "",
      "notes": "Four tourist tiers from the Scene 2 plan. Backpacker area still to decide (Soweto is a placeholder)."
    },
    "JHB_ARR_022_MOV": {
      "step": "7 Card: declaration",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "What do you declare at the desk?",
      "choices": [
        {
          "label": "Business trip",
          "next": "JHB_ARR_030_{ROLE}"
        },
        {
          "label": "Holiday",
          "next": "JHB_ARR_030_{ROLE}"
        },
        {
          "label": "Official visit",
          "next": "JHB_ARR_030_{ROLE}"
        }
      ],
      "saves": "declared",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Life as a Movie skips the real-hotel pick: its stays are fictional (the lodge, the summit hotel)."
    },
    "JHB_ARR_023": {
      "step": "8 Card: hotel",
      "checkpoint": "",
      "avatar": "ALL",
      "role": "",
      "location": "Arrivals card",
      "type": "Card screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "Where are you staying?",
      "choices": [
        {
          "label": "Hotel 1 (from Facts)",
          "next": "JHB_ARR_030_{AVATAR}"
        },
        {
          "label": "Hotel 2 (from Facts)",
          "next": "JHB_ARR_030_{AVATAR}"
        },
        {
          "label": "Hotel 3 (from Facts)",
          "next": "JHB_ARR_030_{AVATAR}"
        },
        {
          "label": "Show me another area",
          "next": "JHB_ARR_022_{AVATAR}"
        }
      ],
      "saves": "hotel",
      "factIds": "H001–H015",
      "brandRule": "Open",
      "brand": "",
      "notes": "Business and Tourist only. 3 real hotels per area from the Facts tab."
    },
    "JHB_ARR_030_BIZ": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "BIZ",
      "role": "",
      "location": "Passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "JHB_ARR_040"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Open",
      "brand": "",
      "notes": "Calm, clear declaration."
    },
    "JHB_ARR_030_TOU": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "TOU",
      "role": "",
      "location": "Passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "JHB_ARR_040"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Open",
      "brand": "",
      "notes": "Friendly welcome."
    },
    "JHB_ARR_030_INT": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "INT",
      "location": "Behind the glass at passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "MOV_INT_200"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Watching from behind the glass: he's the one who flagged the boss. Scene 2 starts at MOV_INT_200."
    },
    "JHB_ARR_030_SYN": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "SYN",
      "location": "Passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "MOV_SYN_200"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "The officer looks at his passport, then signals to someone off to the side. Scene 2 starts at MOV_SYN_200."
    },
    "JHB_ARR_030_APA": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "APA",
      "location": "Passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "MOV_APA_200"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Arrives on official credentials. Scene 2 starts at MOV_APA_200."
    },
    "JHB_ARR_030_POA": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "POA",
      "location": "Passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "MOV_POA_200"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "A wealthy 'hunting tourist' with paperwork to match. Scene 2 starts at MOV_POA_200."
    },
    "JHB_ARR_030_SPY": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "SPY",
      "location": "Passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "MOV_SPY_200"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Diplomatic cover, waved through. Scene 2 starts at MOV_SPY_200."
    },
    "JHB_ARR_030_HIT": {
      "step": "9 Passport desk",
      "checkpoint": "",
      "avatar": "MOV",
      "role": "HIT",
      "location": "Passport control",
      "type": "Flat video",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "",
      "choices": [
        {
          "label": "(auto)",
          "next": "MOV_HIT_200"
        }
      ],
      "saves": "",
      "factIds": "",
      "brandRule": "Closed – Life as a Movie (opt-in only)",
      "brand": "",
      "notes": "Ordinary suit, ordinary story. Scene 2 starts at MOV_HIT_200."
    },
    "JHB_ARR_040": {
      "step": "10 Leave the airport",
      "checkpoint": "",
      "avatar": "ALL",
      "role": "",
      "location": "Airport exit",
      "type": "Choice screen",
      "timer": "",
      "hotspots": "",
      "youtube": "",
      "prompt": "How are you getting to your hotel?",
      "choices": [
        {
          "label": "Rental car",
          "next": "JHB_SC2_CAR_{TIME}"
        },
        {
          "label": "Regular Uber",
          "next": "JHB_SC2_UBER_{TIME}"
        },
        {
          "label": "Premium Uber",
          "next": "JHB_SC2_UBERPREM_{TIME}"
        },
        {
          "label": "Gautrain",
          "next": "JHB_SC2_GAUTRAIN_{TIME}"
        },
        {
          "label": "Meter taxi (a driver approaches you)",
          "next": "JHB_SC2_TAXI_{TIME}"
        }
      ],
      "saves": "transport",
      "factIds": "F007, T004",
      "brandRule": "Open",
      "brand": "",
      "notes": "Business and Tourist only. Five ways in from the Scene 2 plan, each with a morning, afternoon and evening clip (15 clips). Uber pickup is at the e-hailing area upstairs (to check)."
    }
  },
  "facts": [
    {
      "id": "F001",
      "topic": "Visa",
      "text": "Visa-exempt visitors get either 30 or 90 days, depending on their passport.",
      "link": "",
      "status": "To check"
    },
    {
      "id": "F002",
      "topic": "Visa",
      "text": "Passport A: a 90-day visa-exempt passport (e.g. Canada or Germany).",
      "link": "",
      "status": "To check"
    },
    {
      "id": "F003",
      "topic": "Visa",
      "text": "Passport B: South Korea — visa-exempt, 30 days.",
      "link": "",
      "status": "To check"
    },
    {
      "id": "F004",
      "topic": "Visa",
      "text": "Passport C: a passport that needs a visa before travel.",
      "link": "",
      "status": "To pick"
    },
    {
      "id": "F005",
      "topic": "Area",
      "text": "Sandton is Johannesburg's main finance and business district.",
      "link": "",
      "status": "To check"
    },
    {
      "id": "F006",
      "topic": "Area",
      "text": "Foreign embassies are in Pretoria (Tshwane), about an hour from the airport.",
      "link": "",
      "status": "To check"
    },
    {
      "id": "F007",
      "topic": "Transport",
      "text": "From O.R. Tambo: rental car, Uber, or the Gautrain to Sandton and the city.",
      "link": "",
      "status": "To check"
    },
    {
      "id": "F008",
      "topic": "Area",
      "text": "Short description of Maboneng, Rosebank, Soweto and Sandton for visitors.",
      "link": "",
      "status": "To write"
    },
    {
      "id": "T001",
      "topic": "Trivia – Johannesburg",
      "text": "Johannesburg was laid out in 1886, after gold was found on the Witwatersrand, the 'ridge of white waters'.",
      "link": "https://www.sahistory.org.za/dated-event/first-mines-are-proclaimed-johannesburg",
      "status": "To check"
    },
    {
      "id": "T002",
      "topic": "Trivia – O.R. Tambo",
      "text": "This airport was first called Jan Smuts Airport, then Johannesburg International. On 27 October 2006 it was renamed after Oliver Reginald Tambo, the anti-apartheid leader.",
      "link": "https://www.sahistory.org.za/dated-event/johannesburg-international-airport-officially-renamed-or-tambo-international-airport",
      "status": "To check"
    },
    {
      "id": "T003",
      "topic": "Trivia – The rand",
      "text": "The rand replaced the South African pound on 14 February 1961. It takes its name from the Witwatersrand, the gold-bearing ridge Johannesburg is built on.",
      "link": "https://www.statssa.gov.za/?p=14110",
      "status": "To check"
    },
    {
      "id": "T004",
      "topic": "Trivia – Gautrain",
      "text": "The Gautrain's airport–Sandton line opened on 8 June 2010, just three days before the FIFA World Cup kicked off. The ride takes about 15 minutes.",
      "link": "https://www.brandsouthafrica.com/stay-updated/quick-facts/2010/over-a-million-use-gautrain/",
      "status": "To check"
    },
    {
      "id": "T005",
      "topic": "Trivia – Soweto",
      "text": "Vilakazi Street in Soweto is the only street in the world that was home to two Nobel Peace Prize winners: Nelson Mandela and Archbishop Desmond Tutu.",
      "link": "https://www.gauteng.net/?p=32859",
      "status": "To check"
    },
    {
      "id": "H001",
      "topic": "Hotel – Sandton",
      "text": "The Maslow Hotel — Sun International 4-star business hotel in the financial district; free shuttle to Sandton Gautrain, Sandton City and Nelson Mandela Square.",
      "link": "https://www.suninternational.com/maslow",
      "status": "To confirm"
    },
    {
      "id": "H002",
      "topic": "Hotel – Sandton",
      "text": "DaVinci Hotel & Suites on Nelson Mandela Square — 5-star, a short walk from Sandton City and the Sandton Convention Centre; suites with kitchens.",
      "link": "",
      "status": "To confirm"
    },
    {
      "id": "H003",
      "topic": "Hotel – Sandton",
      "text": "The Capital On The Park — modern rooms and apartments close to the Sandton Convention Centre; good for conference visitors.",
      "link": "https://thecapital.co.za",
      "status": "To confirm"
    },
    {
      "id": "H004",
      "topic": "Hotel – Pretoria",
      "text": "Protea Hotel Pretoria Hatfield (Marriott) — 3-star in Hatfield, near the University of Pretoria, embassies and Hatfield Gautrain Station.",
      "link": "https://www.marriott.com/PRYHA",
      "status": "To confirm"
    },
    {
      "id": "H005",
      "topic": "Hotel – Pretoria",
      "text": "ANEW Hotel Hatfield — 4-star Art Deco hotel, about 5 minutes' walk from the Canadian High Commission; free shuttle to Hatfield Gautrain.",
      "link": "https://anewhotels.com/hotels/hatfield",
      "status": "To confirm"
    },
    {
      "id": "H006",
      "topic": "Hotel – Pretoria",
      "text": "Brooklyn Place Guesthouse — 4-star guesthouse on Mackenzie Street, Brooklyn, in the embassy area.",
      "link": "",
      "status": "To confirm"
    },
    {
      "id": "H007",
      "topic": "Hotel – Rosebank",
      "text": "Hyatt Regency Johannesburg — 5-star on Oxford Road, across from Rosebank Gautrain Station; one stop from Sandton.",
      "link": "https://johannesburg.regency.hyatt.com",
      "status": "To confirm"
    },
    {
      "id": "H008",
      "topic": "Hotel – Rosebank",
      "text": "Home Suite Hotels Rosebank — 4-star suites hotel on Bristol Road, under 1 km from Rosebank Gautrain Station.",
      "link": "https://homesuitehotels.com",
      "status": "To confirm"
    },
    {
      "id": "H009",
      "topic": "Hotel – Rosebank",
      "text": "Southern Sun Rosebank — large hotel on Tyrwhitt & Sturdee Avenues, next to Rosebank Mall; family-friendly.",
      "link": "",
      "status": "To confirm"
    },
    {
      "id": "H010",
      "topic": "Hotel – Maboneng",
      "text": "12 Decades Art Hotel — 12 rooms on top of Main Street Life (286 Fox St), each designed by an artist to show one decade of Joburg history, 1886–2006.",
      "link": "https://www.gauteng.net/attractions/12-decades-art-hotel/",
      "status": "To confirm"
    },
    {
      "id": "H011",
      "topic": "Hotel – Maboneng",
      "text": "CURIOCITY Johannesburg — design hostel at 302 Fox St with private rooms and apartments; runs walking, cycling and skate tours.",
      "link": "https://curiocity.africa/",
      "status": "To confirm"
    },
    {
      "id": "H012",
      "topic": "Hotel – Maboneng",
      "text": "Hallmark House — David Adjaye–designed 46-room hotel at 54 Siemert Rd. STATUS UNCLEAR.",
      "link": "",
      "status": "Unclear"
    },
    {
      "id": "H013",
      "topic": "Hotel – Soweto",
      "text": "Soweto Boutique Hotel — 4 rooms on Makhetha Street, a short walk from the Hector Pieterson Memorial and Mandela House.",
      "link": "https://www.gauteng.net/attractions/soweto-boutique-hotel/",
      "status": "To confirm"
    },
    {
      "id": "H014",
      "topic": "Hotel – Soweto",
      "text": "Vhavenda Hills B&B — award-winning 3-star B&B in Orlando West, walking distance from Vilakazi Street.",
      "link": "https://www.gauteng.net/?p=32859",
      "status": "To confirm"
    },
    {
      "id": "H015",
      "topic": "Hotel – Soweto",
      "text": "Lebo's Soweto Backpackers — community-run lodge in Orlando West (est. 2003) with family rooms, bicycle and tuk-tuk tours; near Vilakazi Street.",
      "link": "https://www.sowetobackpackers.com",
      "status": "To confirm"
    }
  ]
};
