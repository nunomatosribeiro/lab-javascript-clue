// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        "firstName": "Nuno" ,
        "lastName": "Ribeiro",
        "occupation": "Dev",
        "age": 28,
        "description": "tall",
        "image": "none" ,
        "color": "white",
    },
    {
        "firstName": "Rodrigo" ,
        "lastName": "Ribeiro",
        "occupation": "Athlete",
        "age": 20,
        "description": "small",
        "image": "none" ,
        "color": "white",

    },
    {
        "firstName": "Sara" ,
        "lastName": "Ribeiro",
        "occupation": "Manager",
        "age": 30,
        "description": "tall",
        "image": "none" ,
        "color": "white",

    },
    {
        "firstName": "Rui" ,
        "lastName": "Santos",
        "occupation": "Manager",
        "age": 28,
        "description": "tall",
        "image": "none" ,
        "color": "white",

    },
    {
        "firstName": "Miguel" ,
        "lastName": "Soares",
        "occupation": "Cook",
        "age": 28,
        "description": "tall",
        "image": "none" ,
        "color": "white",

    },
    {
        "firstName": "Carla" ,
        "lastName": "Silva",
        "occupation": "Dev",
        "age": 28,
        "description": "tall",
        "image": "none" ,
        "color": "white",

    },
];


// Rooms Array

const roomsArray = [
    {
        "name": "Room 1",
    },
    {
        "name": "Room 2",
    },
    {
        "name": "Room 3",
    },
    {
        "name": "Room 4",
    },
    {
        "name": "Room 5",
    },
    {
        "name": "Room 6",
    },
    {
        "name": "Room 7",
    },
    {
        "name": "Room 8",
    },
    {
        "name": "Room 9",
    },
    {
        "name": "Room 10",
    },
    {
        "name": "Room 11",
    },
    {
        "name": "Room 12",
    },
    {
        "name": "Room 13",
    },
    {
        "name": "Room 14",
    },
    {
        "name": "Room 15",
        
    },
];

// Weapons Array

const weaponsArray = [
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
    {
        "name": "Knife",
        "weight": 1,
    },
];


// ITERATION 2

function selectRandom(arr) {
    if(arr === 0){
        return undefined;
    }
        return arr[Math.floor(Math.random()*arr.length)]
    
}

function pickMystery() {
    let susp = {
        "suspect": "",
        "weapon": "" ,
        "room": "",
    }
    susp.suspect = suspectsArray[Math.floor(Math.random()*suspectsArray.length)]
    susp.weapon = weaponsArray[Math.floor(Math.random()*weaponsArray.length)]
    susp.room = roomsArray[Math.floor(Math.random()*roomsArray.length)]
    return susp;
}

// ITERATION 3
//should return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"
function revealMystery(envelope = {
    "suspect": "",
    "weapon": "" ,
    "room": "",
    }) {
    
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon} in the ${envelope.room}!`;
}

