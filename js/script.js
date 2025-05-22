// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the Cat fact.
 * The "async" is there because it will take time for the internet to return the value
 */
async function weather() {
  try {
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const weatherDescription = jsonData.weather[0].description
    const weatherIconCode = jsonData.weather[0].icon
    const weatherIconURL = "https://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png"
    const currentWeatherKelvin = jsonData.main.temp
    const currentWeatherCelcius = currentWeatherKelvin - 273.15

    // output
    document.getElementById("result").innerHTML = "<p> The current temperature is: " + currentWeatherCelcius.toFixed(0) + "℃. </p> <br /> <p> The current weather is " + weatherDescription + ". <br /> <img src =" + weatherIconURL + " alt='Weather Icon'>"
  }

  catch (error) {
    document.getElementById("result").innerHTML = "Sorry, there is an error at this moment."
  }
}
