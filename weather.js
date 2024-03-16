const inputBox= document.querySelector('.input-box');
const searchBtn=document.getElementById('searchbtn');

const weather_img=document.querySelector('.weather-image');
const temprature=document.querySelector('.temp');
const descr=document.querySelector('.desc');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind_speed');
const location_not_found=document.querySelector('.location');

const weather_body=document.querySelector('.weather-body');

async function checkWeather(city){
  const api_key="35861428e794016b9bd842c092d8913e";
	const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	

	const weather_data= await fetch(`${url}`).then(Response => Response.json());

	if(weather_data.cod===`404`){
		location_not_found.style.display="flex";
		weather_body.style.display="none";
		return;
	}
  location_not_found.style.display="none";
	weather_body.style.display="flex";

	temprature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
  descr.innerHTML=`${weather_data.weather[0].description}`;
	humidity.innerHTML=`${weather_data.main.humidity}%`;
	wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weather_img.src="asset/rainy.PNG";
			break;
		case 'Clear':
			weather_img.src="asset/sunny.PNG";
			break;
		case 'Rain':
			weather_img.src="asset/rainy.PNG";
			break;	
		case 'Mist':
			weather_img.src="asset/mist.PNG";
			break;
		case 'Snow':
			weather_img.src="asset/snow.PNG";
			break;	
	}


}

searchBtn.addEventListener('click',()=>{
	checkWeather(inputBox.value);
})
