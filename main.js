import "./style.css"
import { countdownTimer } from "./timer.js"

let day = 19
let month = 8
let year = 2023
let hour = 10
let minute = 0

const timerElement = document.querySelector("#timer")
const targetDate = new Date(year, month - 1, day, hour, minute)

countdownTimer(timerElement, targetDate)