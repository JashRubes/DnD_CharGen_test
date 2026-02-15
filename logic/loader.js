window.dataStore = {};

function loadJSON(name, file) {
  return fetch(file)
    .then(res => res.json())
    .then(json => {
      window.dataStore[name] = json;
    });
}

function loadAllData() {
  return Promise.all([
    loadJSON('racesData', 'data/races.json'),
    loadJSON('classesData', 'data/classes.json'),
    loadJSON('backgroundsData', 'data/backgrounds.json'),
    loadJSON('alignmentsData', 'data/alignments.json')
  ]);
}
