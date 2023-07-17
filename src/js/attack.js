function atackSwitcher(character) {
  const attackArray = [];
  character.special.forEach(({
    id, name, description = 'Описание недоступно', icon,
  }) => {
    attackArray.push({
      ID: id, Name: name, Description: description, Icon: icon,
    });
  });
  return attackArray;
}

export default atackSwitcher;
