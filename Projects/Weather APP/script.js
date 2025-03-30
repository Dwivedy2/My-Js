// constants
const ACCESS_KEY = "74fe8c2d21d702a8f51e62634f951a58";
const BASE_URL = "https://api.weatherstack.com/";
const QUERY = "chennai";

// document variables
let loc = document.getElementById('location');
let image = document.getElementById('image');
let imgDescription = document.getElementById('imgDescription');
let temprature = document.getElementById('temprature');
let wind = document.getElementById('wind');
let precip = document.getElementById('precip');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');
let sunriseTime = document.getElementById('astro-sunrise-time');
let sunsetTime = document.getElementById('astro-sunset-time');
let moonriseTime = document.getElementById('astro-moonrise-time');
let moonsetTime = document.getElementById('astro-moonset-time');

// event listeners
window.addEventListener('load', async () => await loadData());

// functions
async function loadData() {
    let res = await getWeatherData();

    if(res) { 
        let locRes = getLocation(res);        
        
        if(locRes.length > 3) {
            loc.innerHTML = locRes;      
        }

        let info = getInfo(res);
        
        if(Object.keys(info).length) {
            image.setAttribute("src", info.icon);
            imgDescription.innerHTML = info.description;
            temprature.innerHTML = info.temperature;
            wind.innerHTML = info.wind;
            precip.innerHTML = info.precip;
            pressure.innerHTML = info.pressure;
            humidity.innerHTML = info.humidity;
        }   

        let astro = getAstroDetails(res);

        if(Object.keys(astro).length) {
            sunriseTime.innerHTML = astro.sunrise;
            sunsetTime.innerHTML = astro.sunset;
            moonriseTime.innerHTML = astro.moonrise;
            moonsetTime.innerHTML = astro.moonset;
        }
    }
}

async function getWeatherData() {
    const url = `${BASE_URL}current?access_key=${ACCESS_KEY}&query=${QUERY}`;
    let res = null;
    
    try {
        res = await fetch(url);
        res = await res.json(); 
        if(!res.success) {
            res = appData;
        }
    } catch (error) {
        console.log(error)
    }

    return res;
}

function getLocation({location}) {
    const {country, region, name} = location;
    
    return `${name}, ${region}, ${country}`;
}

function getInfo({current}) {
    const info = {};

    if(current.weather_icons.length) {
        info.icon = current.weather_icons[0];
    } else {
        info.icon = appData.current.weather_icons[0];
    }

    if(current.weather_descriptions.length) {
        info.description = current.weather_descriptions[0];
    } else {
        info.description = appData.current.weather_descriptions[0];
    }
    
    info.temperature = current.temperature ?? "29";  
    info.precip = current.precip ?? "0";
    info.pressure = current.pressure ?? "1000";
    info.humidity = current.humidity ?? "50";
    info.wind = current.wind_speed ?? "20";
    
    return info;
}

function getAstroDetails({current}) {
    const {astro} = current;

    const astroDetails = {};

    astroDetails.sunrise = astro.sunrise ?? "6:00 AM";
    astroDetails.sunset = astro.sunset ?? "6:00 PM";
    astroDetails.moonrise = astro.moonrise ?? "6:00 AM";
    astroDetails.moonset = astro.moonset ?? "6:00 PM";

    return astroDetails;
}