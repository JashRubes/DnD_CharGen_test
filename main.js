const fieldToDataKey = {
  race: 'racesData',
  class: 'classesData',
  background: 'backgroundsData',
  alignment: 'alignmentsData'
};

loadAllData().then(() => {
  ['race', 'class', 'background', 'alignment'].forEach(field => {
    const select = document.getElementById(field + '-select');
    const dataKey = fieldToDataKey[field];
    const dataArray = window.dataStore[dataKey];

    if (!dataArray || dataArray.length === 0) return; // skip if no data

    select.innerHTML = ''; // clear existing options

    dataArray.forEach(item => {
      const el = document.createElement('option');
      el.value = item.id;
      el.textContent = item.name;
      select.appendChild(el);
    });
  });

  // Add Random button listeners
  document.querySelectorAll('.random-btn').forEach(btn => {
    btn.addEventListener('click', () => randomizeField(btn.dataset.target));
  });

  // Generate character
  document.getElementById('generate-btn').addEventListener('click', () => {
    const char = generateCharacterObject({
      level: document.getElementById('level-input').value,
      raceId: document.getElementById('race-select').value,
      classId: document.getElementById('class-select').value,
      backgroundId: document.getElementById('background-select').value,
      alignmentId: document.getElementById('alignment-select').value
    });
    renderCharacter(char);
  });

  // Fully random button
  document.getElementById('fully-random-btn').addEventListener('click', () => {
    ['race', 'class', 'background', 'alignment'].forEach(randomizeField);
    const char = generateCharacterObject({
      level: document.getElementById('level-input').value,
      raceId: document.getElementById('race-select').value,
      classId: document.getElementById('class-select').value,
      backgroundId: document.getElementById('background-select').value,
      alignmentId: document.getElementById('alignment-select').value
    });
    renderCharacter(char);
  });
});
