const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '656b01ee56mshf58718c2ed1b6b6p18371ejsn306cd9964734'
  }
};

fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=33-34', options)
  .then(response => response.json())
  .then(data => {
    const ul = document.getElementById("matches");
    data.response.forEach(match => {
      const li = document.createElement("li");
      li.textContent = `${match.teams.home.name} 🆚 ${match.teams.away.name} - ${match.fixture.date}`;
      ul.appendChild(li);
    });
  })
  .catch(err => console.error(err));
