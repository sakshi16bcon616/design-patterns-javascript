class SingletonTester
{
  static isSingleton(generator)
  {
    let obj1 = generator();
    let obj2 = generator();
    console.log(obj1 === obj2)
  }
}

const item = [1,2,3]
SingletonTester.isSingleton(() => item)