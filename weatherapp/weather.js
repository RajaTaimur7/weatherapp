let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityname = document.getElementById("city");
// fetch data from api
let getWeather = () => {
    let cityvalue = cityname.value;
    //input field is empty
    if (cityvalue == 0) {
        result.innerHTML = `<h3> please enteaaaar the city name </h3>`;
    }
    //if input field is not empty
    else {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityvalue}&appid=${key}&units=metric`;
        fetch(url)
            .then((resp) => resp.json())
            //if city name is valid 
            .then((data) => {
                console.log(data);
                result.innerHTML = `
        <h2>${data.city.name}</h2>`;
                for (i = 0; i < 5; i++) {
                    document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min) + "°";
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max) + "°";
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("day" + (i + 1) + "humidity").innerHTML = "humidity: " + Number(data.list[i].main.humidity);
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("day" + (i + 1) + "wind").innerHTML = "wind: " + Number(data.list[i].wind.speed);
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
                        data.list[i].weather[0].icon
                        + ".png";
                }
            })
            .catch((error) => {
                console.log(error);
                result.innerHTML = `<p>city not found</p>`;
            });
    }
};
searchBtn.addEventListener("click", getWeather);
