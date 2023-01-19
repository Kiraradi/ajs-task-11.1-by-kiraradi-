import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';
import Team from '../Team';

test('Character Creation Test - Bowman', () => {
  const result = new Bowman('Rob');

  const personBowman = {
    name: 'Rob',
    type: 'Bowman',
    health: 100,
    level: 1,
    characterAttack: 25,
    defence: 25,
  };

  expect(result).toEqual(personBowman);
});

test.each([
  ['error name', 'Rb', 'Bowman'],
  ['error type', 'Bob', 'lol'],
])('error throwing test %s', (error, name, type) => {
  expect(() => {
    new Bowman(name, type);// eslint-disable-line no-new
  }).toThrow();
});

test('Character Creation Test - Swordsman', () => {
  const result = new Swordsman('Rob');

  const personBowman = {
    name: 'Rob',
    type: 'Swordsman',
    health: 100,
    level: 1,
    characterAttack: 40,
    defence: 10,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Magician', () => {
  const result = new Magician('Rob');

  const personBowman = {
    name: 'Rob',
    type: 'Magician',
    health: 100,
    level: 1,
    characterAttack: 100,
    defence: 40,
    characterStoned: false,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Undead', () => {
  const result = new Undead('Rob');

  const personBowman = {
    name: 'Rob',
    type: 'Undead',
    health: 100,
    level: 1,
    characterAttack: 25,
    defence: 25,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Zombie', () => {
  const result = new Zombie('Rob');

  const personBowman = {
    name: 'Rob',
    type: 'Zombie',
    health: 100,
    level: 1,
    characterAttack: 40,
    defence: 10,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Daemon', () => {
  const result = new Daemon('Rob');

  const personBowman = {
    name: 'Rob',
    type: 'Daemon',
    health: 100,
    level: 1,
    characterAttack: 10,
    defence: 40,
  };

  expect(result).toEqual(personBowman);
});

test('Test of the add class method Team', () => {
  const personDaemon = new Daemon('lol');
  const tiamsVictory = new Team();
  tiamsVictory.add(personDaemon);

  const personBowman = new Set();
  personBowman.add({
    name: 'lol',
    type: 'Daemon',
    health: 100,
    level: 1,
    characterAttack: 10,
    defence: 40,
  });

  expect(tiamsVictory.members).toEqual(personBowman);
});

test('Test of the addAll class method Team', () => {
  const personDaemon = new Daemon('lol');
  const personDaemon2 = new Daemon('lol2');
  const personDaemon3 = new Daemon('lol3');
  const winningTeam = new Team();
  winningTeam.addAll(personDaemon, personDaemon2, personDaemon2, personDaemon3);

  const personBowman = new Set();
  personBowman.add({
    name: 'lol',
    type: 'Daemon',
    health: 100,
    level: 1,
    characterAttack: 10,
    defence: 40,
  });
  personBowman.add({
    name: 'lol2',
    type: 'Daemon',
    health: 100,
    level: 1,
    characterAttack: 10,
    defence: 40,
  });
  personBowman.add({
    name: 'lol3',
    type: 'Daemon',
    health: 100,
    level: 1,
    characterAttack: 10,
    defence: 40,
  });

  expect(winningTeam.members).toEqual(personBowman);
});

test('Test of the toArray class method Team', () => {
  const personDaemon = new Daemon('lol');
  const winningTeam = new Team();
  winningTeam.add(personDaemon);
  const result = winningTeam.toArray();
  const personBowman = [
    {
      name: 'lol',
      type: 'Daemon',
      health: 100,
      level: 1,
      characterAttack: 10,
      defence: 40,
    },
  ];

  expect(result).toEqual(personBowman);
});

test('toArray method error test', () => {
  const winningTeam = new Team();

  expect(() => {
    winningTeam.toArray();
  }).toThrow();
});

test('Add method error test', () => {
  const personDaemon = new Daemon('lol', 'Daemon');
  const winningTeam = new Team();
  winningTeam.add(personDaemon);

  expect(() => {
    winningTeam.add(personDaemon);
  }).toThrow();
});

test('testing No. 1 of the Magician class with the addition of new rules', () => {
  const personMagician = new Magician('Groun', 'Magician');

  expect(personMagician.attack).toBe(90);
});

test('testing No. 2 of the Magician class with the addition of new rules', () => {
  const personMagician = new Magician('Groun', 'Magician');
  personMagician.stoned = true;

  expect(personMagician.attack).toBe(85);
});

test('testing No. 1 of the Daemon class with the addition of new rules', () => {
  const personDaemon = new Daemon('Rob', 'Daemon');

  expect(personDaemon.attack).toBe(9);
});

test('testing No. 2 of the Daemon class with the addition of new rules', () => {
  const personDaemon = new Daemon('Rob', 'Daemon');
  personDaemon.stoned = true;

  expect(personDaemon.attack).toBe(4);
});

test('testing errors №1 of the Magician class with the addition of new rules', () => {
  const personMagician = new Magician('Groun', 'Magician');

  expect(() => {
    personMagician.attack = 'Очень много';
  }).toThrow();
});

test('testing errors №2 of the Magician class with the addition of new rules', () => {
  const personMagician = new Magician('Groun', 'Magician');

  expect(() => {
    personMagician.stoned = 'Правда';
  }).toThrow();
});

test('testing No. 1 of the Magician class with the addition of new rules', () => {
  const personBowman = new Bowman('Groun', 'Bowman');

  expect(personBowman.attack).toBe(25);
});

test('test team generate', () => {
  const personDaemon = new Daemon('JakeDog');
  const personSwordsman = new Swordsman('FinnHuman');
  const winningTeam = new Team();
  winningTeam.addAll(personDaemon, personSwordsman);

  const dataForVerification = [{
    name: 'JakeDog',
    type: 'Daemon',
    health: 100,
    level: 1,
    characterAttack: 10,
    defence: 40,
  },
  {
    name: 'FinnHuman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    characterAttack: 40,
    defence: 10,
  },
  ];

  const result = [];

  for (const person of winningTeam) {
    result.push(person);
  }

  expect(result).toEqual(dataForVerification);
});
