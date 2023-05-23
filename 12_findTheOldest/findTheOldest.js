const findTheOldest = function(people) {
  return people.sort((a, b) => {
    const aBirth = a.yearOfBirth;
    let aDeath = a.yearOfDeath;
    const bBirth = b.yearOfBirth;
    let bDeath = b.yearOfDeath;

    if (!aDeath) {
      aDeath = new Date().getFullYear();
    }
    if (!bDeath) {
      bDeath = new Date().getFullYear();
    }

    return (aDeath - aBirth) > (bDeath - bBirth) ? -1 : 1;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
