const findTheOldest = function(people) {
    
    people.sort((a, b) => {
        if (a.hasOwnProperty("yearOfDeath")) {
            personAAge = a.yearOfDeath - a.yearOfBirth;
        }
        else {
            personAAge = new Date().getFullYear() - a.yearOfBirth;
        }
        
        if (b.hasOwnProperty("yearOfDeath")) {
            personBAge = b.yearOfDeath - b.yearOfBirth;
        }
        else {
            personBAge = new Date().getFullYear() - b.yearOfBirth;
        }

        return personBAge - personAAge;
    });

    return people[0] 
};

// Do not edit below this line
module.exports = findTheOldest;
