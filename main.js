import "./style.css"
import { countdownTimer } from "./timer.js"

let day = 19
let month = 8
let year = 2023
let hour = 10
let minute = 0

document.querySelector("body").innerHTML = `
  <header>WE'RE LAUNCHING SOON</header>
  <div id="timer"><div class="card-container">
    <div class="card">
      <div class="card-inner" id="day-card">
        <div class="card-front">
          <span class="time">00</span>
        </div>
        <div class="card-back">
          <span class="time">00</span>
        </div>
      </div>
    </div>
    <div class="unit">Days</div></div><div class="card-container">
    <div class="card">
      <div class="card-inner" id="hour-card">
        <div class="card-front">
          <span class="time">00</span>
        </div>
        <div class="card-back">
          <span class="time">00</span>
        </div>
      </div>
    </div>
    <div class="unit">Hours</div></div><div class="card-container">
    <div class="card">
      <div class="card-inner" id="minute-card">
        <div class="card-front">
          <span class="time">00</span>
        </div>
        <div class="card-back">
          <span class="time">00</span>
        </div>
      </div>
    </div>
    <div class="unit">Minutes</div></div><div class="card-container">
    <div class="card">
      <div class="card-inner" id="second-card">
        <div class="card-front">
          <span class="time">00</span>
        </div>
        <div class="card-back">
          <span class="time">00</span>
        </div>
      </div>
    </div>
    <div class="unit">Seconds</div></div>
  </div>
  <div id="footer">
    <div class="mountains">
      <img src="/pattern-hills.svg">
      <div class="socials"><a href="https://github.com/g-soldera" title="Github" target="_blank">
          <ion-icon class="icon" name="logo-github"></ion-icon>
        </a>
        <a
          href="https://Instagram.com/gsoldera.dev"
          title="Instagram"
          target="_blank"
        >
          <ion-icon class="icon" name="logo-instagram"></ion-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/g-soldera/"
          title="LinkedIn"
          target="_blank"
        >
          <ion-icon class="icon" name="logo-linkedin"></ion-icon>
        </a></div>
    </div>
  </div>

`

const timerElement = document.querySelector("#timer")
const targetDate = new Date(year, month - 1, day, hour, minute)

countdownTimer(timerElement, targetDate)
