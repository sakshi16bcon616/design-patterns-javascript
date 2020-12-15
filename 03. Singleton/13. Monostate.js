class ChiefExecutiveOfficer
{
    get age() { return ChiefExecutiveOfficer._age; }
    set age(value) { ChiefExecutiveOfficer._age = value; }

    get name() { return ChiefExecutiveOfficer._name; }
    set name(value) { ChiefExecutiveOfficer._name = value; }

    toString()
    {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

const c1 = new ChiefExecutiveOfficer();
c1.age = 21;
c1.name = 'Sakshi';

const c2 = new ChiefExecutiveOfficer();
c2.name = 18;
c2.name = 'Saksham';

console.log(c1.toString());
console.log(c2.toString());