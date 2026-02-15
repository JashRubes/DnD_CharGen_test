function renderCharacter(character) {
  const { level, race, charClass, background, alignment } = character;

  document.getElementById('result').innerHTML = `
    <h2>Your Character</h2>
    <p><strong>Level:</strong> ${level}</p>
    <p><strong>Race:</strong> ${race.name}</p>
    <p><strong>Class:</strong> ${charClass.name}</p>
    <p><strong>Hit Die:</strong> d${charClass.hitDie}</p>
    <p><strong>BAB Progression:</strong> ${charClass.babProgression}</p>
    <p><strong>Saves:</strong> Fort ${charClass.saves.fort}, Ref ${charClass.saves.ref}, Will ${charClass.saves.will}</p>
    <p><strong>Skill Points:</strong> ${charClass.skillPoints}</p>
    <p><strong>Background:</strong> ${background.name}</p>
    <p><strong>Alignment:</strong> ${alignment.name}</p>
  `;
}
