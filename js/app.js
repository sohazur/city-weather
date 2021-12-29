const loadSports = () => {
  fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
    .then((res) => res.json())
    .then((data) => displaySports(data));
};

const displaySports = (sports) => {
  console.log(sports.sports);
};

loadSports();
