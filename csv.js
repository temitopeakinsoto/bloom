const fetch = require('node-fetch');

async function getCities() {
    const cities = await fetch('cities.csv');
    console.log("cities is", cities);
}

getCities();