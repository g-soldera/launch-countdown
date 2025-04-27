import "./style.css"
import { countdownTimer } from "./timer.js"

let day = 12
let month = 7
let year = 2025
let hour = 15
let minute = 15

const timerElement = document.querySelector("#timer")
const targetDate = new Date(year, month - 1, day, hour, minute)

countdownTimer(timerElement, targetDate)
