const getAge = (birth, death) => {
  if (death == null) {
    // handles undefined/null
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
    return currentAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
