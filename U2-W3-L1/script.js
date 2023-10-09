class CreateNewUser {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageComparison(user) {
    if (this.age > user.age) {
      return `${this.firstName} è più vecchio di ${user.firstName}`;
    } else if (this.age < user.age) {
      return `${this.firstName} è più giovane di ${user.firstName}`;
    } else {
      return `${this.firstName} e ${user.firstName} hanno la stessa età`;
    }
  }
}

const x = new CreateNewUser("Matteo", "Pucci", "24", "Massa");
const y = new CreateNewUser("Gioele", "Pucci", "59", "Massa");

const comparison = x.ageComparison(y);

console.log(comparison);

const button = document.getElementById("button");
const form = document.getElementById("form");
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(firstOwner, secondOwner) {
    if (firstOwner === secondOwner) {
      return console.log(true);
    }
  }
}

const petCollections = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  petCollections.push(newPet);
  console.log(petCollections);
  if (petCollections.length > 1) {
    newPet.sameOwner(petCollections[0].ownerName, petCollections[1].ownerName);
  }
});
