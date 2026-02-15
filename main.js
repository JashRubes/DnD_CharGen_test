loadAllData().then(() => {
  // Populate dropdowns with names
  ['race', 'class', 'background', 'alignment'].forEach(field => {
    console.log('Data loaded:', window.dataStore); // <-- debug line
    const select = document.getElementById(field + '-select');
    const dataArray = window.dataStore[field + 'sData'] || window.dataStore[field + 'Data']; // alignment is singular
    select.innerHTML = '';
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
