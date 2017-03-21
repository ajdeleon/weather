import axios from "axios"

const API_KEY = "f5f521be9e86b5c6a611b2cb486136df"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` //ES6 template string

export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  } //REDUX PROMISE -- If action has promise as a payload, wait for ajax to finish and only then send to reducer
}
