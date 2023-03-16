const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('Pet has a name property', () => {
    it('returns the name of the specified pet', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
});

describe('growUp', () => {
    it('Has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toBe(0);
    })

    it('causes the pet to age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();

        expect(pet.age).toEqual(2);
    });
});

describe('hunger', () => {
    it('Has an initial hunger value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('growUp increases hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
});

describe('fitness', () => {
    it('Has an initial fitness value of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });

    it('growUp decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness value by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases hunger value by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
        pet.walk();

        expect(pet.fitness).toEqual(0);
    });
});