class Singleton
{
    constructor()
    {
        let instance = this.constructor.instance;
        if(instance){
            return instance;
        }
        this.constructor.instance = this;
    }

    foo()
    {
        console.log('Just Executing a random method...!!!')
    }
}

const s1 = new Singleton(); //this.constructor.instance = this;
const s2 = new Singleton(); //return instance (i.e return this)
console.log('Are they equal?', s1===s2)
s1.foo();
s2.foo();