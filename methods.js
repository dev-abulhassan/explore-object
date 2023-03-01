const person  = {
   name: 'Adnan',
   job: 'Programmer',
   salary: 40000,
   officeentry: function () {
      return this.name + 'aj k office aste pare nai'
   }
}
const output = person.officeentry();
console.log(output);