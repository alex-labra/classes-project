class Animals {
    static animalsList = [
      "elephant",
      "giraffe",
      "hippopotamus",
      "jaguar",
      "kangaroo",
      "lion",
      "octopus",
      "penguin",
      "rhinoceros",
      "zebra",
    ];
  
    static getAnimalStartingWithLetter(letter) {
      const matchingAnimals = this.animalsList.filter((animal) =>
        animal.startsWith(letter)
      );
      return matchingAnimals[Math.floor(Math.random() * matchingAnimals.length)];
    }
  }
  
  export default Animals;