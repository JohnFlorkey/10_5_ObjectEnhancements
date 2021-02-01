const createInstructor = (firstName, lastName) => (
    {
        firstName,
        lastName
    })

const favoriteNumber = 42;
let instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}


const differentInstructor = {
    firstName: 'Colt',
    sayHi() {return 'Hi!'},
    sayBy() {return `${this.firstName} says bye!`}
}

const createAnimal = (species, verb, noise) => (
    {
        species,
        noise,
        [verb]() {return `${this.species} says ${this.noise}`;}
    }
)