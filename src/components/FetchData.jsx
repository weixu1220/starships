async function FetchData(setData) {
    let api = 'https://swapi.dev/api/starships/?format=json'
    let response = await fetch(api);
    let ships = await response.json();
    setData(ships.results);
}

export default FetchData;