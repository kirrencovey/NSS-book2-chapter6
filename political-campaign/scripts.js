const candidate = {
    firstName: "Elizabeth",
    lastName: "Sanger",
    district: 12,
    platform: {
        taxes: "20% income taxes for everyone",
        infrastructure: "not important",
        healthCare: "buy it yourself",
        crimeEnforcement: "you guys can self-regulate"
    },
    donationURL: "www.donatetolizzy.com",
    calendar: [
        {
        event: "meet & greet",
        location: "",
        date: "",
        time: ""
        }, 
        {
        event: "fundraiser",
        location: "",
        date: "",
        time: ""
        }, 
        {
        event: "debate",
        location: "",
        date: "",
        time: ""
        }
    ],
    volunteerInfo: [
        {
        name: "Bob Harper",
        address: "123 1st Ave",
        email: "bob@bobharper.com",
        phone: "555-235-7289",
        availability: {
            sun: true,
            mon: false,
            tue: false,
            wed: true,
            thurs: false,
            fri: true,
            sat: true
        },
        activities: {
            doorToDoor: false,
            coldCalling: true,
            stuffingEnvelopes: true
        }
        },
        {
        name: "Sheila Brown",
        address: "456 86th St",
        email: "sheila@ilovekittens.com",
        phone: "555-092-3489",
        availability: {
            sun: true,
            mon: true,
            tue: false,
            wed: false,
            thurs: false,
            fri: true,
            sat: false
        },
        activities: {
                doorToDoor: true,
                coldCalling: false,
                stuffingEnvelopes: true
        }
        }
    ],
    biography: "I always wanted to do politics",
    images: [
        {
        label: "headshot",
        imgSrc: "www.lizzysphotos.com/headshot"
        }, 
        {
        label: "family",
        imgSrc: "www.lizzysphotos.com/family"
        }, 
        {
        label: "constituents",
        imgSrc: "www.lizzysphotos.com/constituents"
        }
    ],
    missionStatement: "if you just leave people alone, they'll figure it out",
    registerToVoteURL: "www.vote.com"
}




//add image to gallery:
function addToImageGallery (newImageLabel, newImageSource) {
    let newImage = {
        label: newImageLabel,
        imgSrc: newImageSource
    };
    candidate.images.push(newImage);
}

addToImageGallery("pets", "www.lizzysphotos.com/pets");
console.table(candidate.images);


//change biography:
function changeBiography (newBiography) {
    candidate.biography = newBiography;
}

changeBiography("Liz likes city parks and taking her pet tortoise for walks.");
console.log(candidate.biography);


//change platform item:
function changePlatform (topic, newPlatformStatement) {
    candidate.platform[topic] = newPlatformStatement;
}

changePlatform("taxes", "60% income tax for everyone, so we can build more city parks!");
console.log(candidate.platform.taxes);


//add volunteer:
function addVolunteer (newName, newAddress, newEmail, newPhone) {
    let newVolunteer = {
        name: newName,
        address: newAddress,
        email: newEmail,
        phone: newPhone,
        availability: {
            sun: true,
            mon: true,
            tue: true,
            wed: true,
            thurs: true,
            fri: true,
            sat: true
        },
        activities: {
            doorToDoor: true,
            coldCalling: true,
            stuffingEnvelopes: true
    }
    };
    candidate.volunteerInfo.push(newVolunteer);
}

addVolunteer("Tammy Bright", "404 B St", "tamtambright@googlie.com", "555-343-8998");
console.table(candidate.volunteerInfo);


//get list of volunteers available on certain day:
const volunteerArray = candidate.volunteerInfo;

function sortVolunteersByDay (day) {
    const availableVolunteers = [];
    for (let i = 0; i < volunteerArray.length; i++) {
        let currentVolunteer = volunteerArray[i];
        if (currentVolunteer.availability[day] === true) {
        availableVolunteers.push(currentVolunteer);
        }
    }
    return availableVolunteers;
}

const mondayVolunteers = sortVolunteersByDay("mon");
console.log(mondayVolunteers);


//get list of volunteers willing to do certain activity:

function sortVolunteersByTask (task) {
    const availableVolunteers = [];
    for (let i = 0; i < volunteerArray.length; i++) {
        let currentVolunteer = volunteerArray[i];
        if (currentVolunteer.activities[task] === true) {
        availableVolunteers.push(currentVolunteer);
        }
    }
    return availableVolunteers;
}

const coldCallingVolunteers = sortVolunteersByTask("coldCalling");
console.log(coldCallingVolunteers);