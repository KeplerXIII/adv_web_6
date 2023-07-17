import atackSwitcher from '../attack';

test('ordering', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };

  const correct = [
    {
      ID: 8,
      Name: 'Двойной выстрел',
      Description: 'Двойной выстрел наносит двойной урон',
      Icon: 'http://...',
    },
    {
      ID: 9,
      Name: 'Нокаутирующий удар',
      Description: 'Описание недоступно',
      Icon: 'http://...',
    },
  ];

  const result = atackSwitcher(character);

  expect(result).toEqual(correct);
});
