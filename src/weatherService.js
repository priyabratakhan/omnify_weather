const API_KEY = "b010ea2d40cbb0af1281b6910bc5a93b";

const makeIcon = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const weatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    // main: { temp, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIcon(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { weatherData };
