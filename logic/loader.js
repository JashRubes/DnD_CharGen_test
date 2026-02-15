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
    loadJSON('racesData', 'races.json'),
    loadJSON('classesData', 'classes.json'),
    loadJSON('backgroundsData', 'backgrounds.json'),
    loadJSON('alignmentsData', 'alignments.json')
  ]);
}
