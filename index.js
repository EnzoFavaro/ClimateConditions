const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')



const {
  PROTOCOL, BASE_URL, Q, APP_ID, CNT, UNITS, IDIOM
} = process.env


const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APP_ID}&cnt=${CNT}&units=${UNITS}&lang=${IDIOM}`



async function getLatLon() {
  try {
    const res = await axios.get(url);
    const lat = res.data.city.coord.lat;
    const lon = res.data.city.coord.lon;
    return { lat, lon };
  } catch (error) {
    console.error("Erro ao buscar coordenadas:", error);
    return null;
  }
}


getLatLon().then(coords => {
  console.log(coords);
});
