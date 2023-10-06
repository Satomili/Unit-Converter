/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let meterFeet = document.getElementById("meter-feet")
let literGallon = document.getElementById("liter-gallon")
let kilogramPound = document.getElementById("kilogram-pound")
let errorMsg = document.getElementById("error-msg")



convertBtn.addEventListener(`click`, function() {
    if(inputEl.value === "") {
        errorMsg.textContent = "Enter a number above"
        meterFeet.textContent = ""
        literGallon.textContent = ""
        kilogramPound.textContent = ""
    } else if(inputEl.value < 1) {
        errorMsg.textContent = "Enter a positive number"
        meterFeet.textContent = ""
        literGallon.textContent = ""
        kilogramPound.textContent = ""
    } else {
        errorMsg.textContent = ""
        
        const feet = inputEl.value * 3.281
        const meter = inputEl.value / 3.281
        const gallon = inputEl.value * 0.264
        const liter = inputEl.value / 0.264
        const pound = inputEl.value * 2.204
        const kilogram = inputEl.value / 2.204
        
        meterFeet.textContent = `
            ${inputEl.value} meter = ${feet.toFixed(3)} feet | 
            ${inputEl.value} feet = ${meter.toFixed(3)} meters
        `
        
        literGallon.textContent = `
            ${inputEl.value} liters = ${gallon.toFixed(3)} gallons | 
            ${inputEl.value} gallons = ${liter.toFixed(3)} liters
        `
        
        kilogramPound.textContent = `
            ${inputEl.value} kilos = ${pound.toFixed(3)} pounds | 
            ${inputEl.value} pounds = ${kilogram.toFixed(3)} kilos
        `
        }
        
        inputEl.value = ""
})

