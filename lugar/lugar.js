const axios = require('axios');

const getLugarLatLng = async(dir)=>{

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather`,
        params: { q: dir, appid: `32f843d833c38373032f825c4a92418a` }
    });

    const result = await instance.get();

    if (result.data.cod === 404){
        throw new Error(`No hay resultados o el objeto es vacio para ${dir}`);
    }

    const data = result.data;
    const direccion = data.name;
    const lat=data.coord.lat;
    const lng = data.coord.lon;

    return{
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
