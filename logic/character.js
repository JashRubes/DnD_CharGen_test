function randomChoice(array) {
  if (!array || array.length === 0) {
    console.warn('randomChoice called with empty or undefined array');
    return null; // safe fallback
  }
  return array[Math.floor(Math.random() * array.length)];
}

function getObjectById(array, id) {
  return array.find(obj => obj.id === id);
}

// Returns a full character object
function generateCharacterObject(options) {
  const level = Math.max(1, Math.min(20, parseInt(options.level || 1)));

  const race = getObjectById(window.dataStore.racesData, options.raceId);
  const charClass = getObjectById(window.dataStore.classesData, options.classId);
  const background = getObjectById(window.dataStore.backgroundsData, options.backgroundId);
  const alignment = options.alignmentId
    ? getObjectById(window.dataStore.alignmentsData, options.alignmentId)
    : randomChoice(window.dataStore.alignmentsData);

  return { level, race, charClass, background, alignment };
}

function randomizeField(fieldName) {
  const select = document.getElementById(fieldName + '-select');
  const dataKey = fieldToDataKey[fieldName];
  const optionsArray = window.dataStore[dataKey];

  const choice = randomChoice(optionsArray);
  if (!choice) return; // skip if no valid choice

  select.value = choice.id;
}
