class Person
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }

  static get factory(){
    return new PersonFactory();
  }
}

class PersonFactory
{
  createPerson(name)
  {
      return new Person(PersonFactory.id++, name)
  }
}
PersonFactory.id = 0;

let pf = new PersonFactory();
let p2 = pf.createPerson('Saksham');
console.log(p2)

let p1 = Person.factory.createPerson('Sakshi');
console.log(p1.name, p1.id);