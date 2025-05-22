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
async function calculate() {
  try {
    const resultJSON = await fetch("https://samples.openweathermap.org/data/2.5/weather")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const tempurature = jsonData.data[temp]

    // output
    document.getElementById("cat-fact").innerHTML = "<p>" + tempurature + "</p>"
  } 
  catch (error) {
    console.error(error)
  }
}