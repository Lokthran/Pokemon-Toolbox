const typeMatchups = {
    "Normal": {
        "Kampf": 2,
        "Geist": 0
    },
    "Kampf": {
        "Flug": 2,
        "Gestein": 0.5,
        "Käfer": 0.5,
        "Psycho": 2,
        "Unlicht": 0.5,
        "Fee": 2
    },
    "Flug": {
        "Kampf": 0.5,
        "Boden": 0,
        "Gestein": 2,
        "Käfer": 0.5,
        "Pflanze": 0.5,
        "Elektro": 2,
        "Eis": 2
    },
    "Gift": {
        "Kampf": 0.5,
        "Gift": 0.5,
        "Boden": 2,
        "Käfer": 0.5,
        "Pflanze": 0.5,
        "Psycho": 2,
        "Fee": 0.5
    },
    "Boden": {
        "Gift": 0.5,
        "Gestein": 0.5,
        "Wasser": 2,
        "Pflanze": 2,
        "Elektro": 0,
        "Eis": 2
    },
    "Gestein": {
        "Normal": 0.5,
        "Kampf": 2,
        "Flug": 0.5,
        "Gift": 0.5,
        "Boden": 2,
        "Stahl": 2,
        "Feuer": 0.5,
        "Wasser": 2,
        "Pflanze": 2
    },
    "Käfer": {
        "Kampf": 0.5,
        "Flug": 2,
        "Boden": 0.5,
        "Gestein": 2,
        "Feuer": 2,
        "Pflanze": 0.5
    },
    "Geist": {
        "Normal": 0,
        "Kampf": 0,
        "Gift": 0.5,
        "Käfer": 0.5,
        "Geist": 2,
        "Unlicht": 2
    },
    "Stahl": {
        "Normal": 0.5,
        "Kampf": 2,
        "Flug": 0.5,
        "Gift": 0,
        "Boden": 2,
        "Gestein": 0.5,
        "Käfer": 0.5,
        "Stahl": 0.5,
        "Feuer": 2,
        "Pflanze": 0.5,
        "Psycho": 0.5,
        "Eis": 0.5,
        "Drache": 0.5,
        "Fee": 0.5
    },
    "Feuer": {
        "Boden": 2,
        "Gestein": 2,
        "Käfer": 0.5,
        "Stahl": 0.5,
        "Feuer": 0.5,
        "Wasser": 2,
        "Pflanze": 0.5,
        "Eis": 0.5,
        "Fee": 0.5
    },
    "Wasser": {
        "Stahl": 0.5,
        "Feuer": 0.5,
        "Wasser": 0.5,
        "Pflanze": 2,
        "Elektro": 2,
        "Eis": 0.5
    },
    "Pflanze": {
        "Flug": 2,
        "Gift": 2,
        "Boden": 0.5,
        "Käfer": 2,
        "Feuer": 2,
        "Wasser": 0.5,
        "Pflanze": 0.5,
        "Elektro": 0.5,
        "Eis": 2
    },
    "Elektro": {
        "Flug": 0.5,
        "Boden": 2,
        "Stahl": 0.5,
        "Elektro": 0.5
    },
    "Psycho": {
        "Kampf": 0.5,
        "Käfer": 2,
        "Geist": 2,
        "Psycho": 0.5,
        "Unlicht": 2
    },
    "Eis": {
        "Kampf": 2,
        "Gestein": 2,
        "Stahl": 2,
        "Feuer": 2,
        "Eis": 0.5
    },
    "Drache": {
        "Feuer": 0.5,
        "Wasser": 0.5,
        "Pflanze": 0.5,
        "Elektro": 0.5,
        "Eis": 2,
        "Drache": 2,
        "Fee": 2
    },
    "Unlicht": {
        "Kampf": 2,
        "Käfer": 2,
        "Geist": 0.5,
        "Psycho": 0,
        "Unlicht": 0.5,
        "Fee": 2
    },
    "Fee": {
        "Kampf": 0.5,
        "Gift": 2,
        "Käfer": 0.5,
        "Stahl": 2,
        "Drache": 0,
        "Unlicht": 0.5
    }
};