export class CharacterCreator {
  constructor(name = 'Undefined', age = 0, gender = 'Undefined', characterClass = 'knight') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.characterClass = characterClass;
    
    this.prevName = '';
    this.prevAge = '';
    this.prevCharClass = '';
  }
  
  showInfo() {
    /*alert(`
    Name: ${this.name}
    Age: ${this.age}
    Character class: ${this.characterClass}
    `);*/
  }
  
  showChanges(label, prevValue, currentValue) {
    /*console.log(`
      Previous ${label}: ${prevValue}
      Current ${label}: ${currentValue}
    `);*/
  }
  
  setCharacterName(newName) {
    this.prevName = this.name;
    this.name = newName;
    
    this.showChanges('Name', this.prevName, this.name);
  }
  
  setCharacterAge(newAge) {
    this.prevAge = this.age;
    this.age = newAge;
    
    this.showChanges('Age', this.prevAge, this.age);
  }
  
  setCharacterClass(newClass) {
    this.prevCharClass = this.characterClass;
    this.characterClass = newClass;
  
    this.showChanges('Class', this.prevCharClass, this.characterClass);
  }
}