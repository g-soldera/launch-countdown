export function countdownTimer(element, targetDate) {
  let interval = 1000
  let timeLeft = getTimeRemaining(targetDate)

  function updateTimer() {
    const { days, hours, minutes, seconds } = getTimeComponents(timeLeft)

    const dayCard = element.querySelector("#day-card")
    const hourCard = element.querySelector("#hour-card")
    const minuteCard = element.querySelector("#minute-card")
    const secondCard = element.querySelector("#second-card")

    if (timeLeft.days !== days) {
      flipCard(dayCard, days)
    }
    if (timeLeft.hours !== hours) {
      flipCard(hourCard, hours)
    }
    if (timeLeft.minutes !== minutes) {
      flipCard(minuteCard, minutes)
    }
    if (timeLeft.seconds !== seconds) {
      flipCard(secondCard, seconds)
    }

    dayCard.querySelector(".time").textContent = days
      .toString()
      .padStart(2, "0")
    hourCard.querySelector(".time").textContent = hours
      .toString()
      .padStart(2, "0")
    minuteCard.querySelector(".time").textContent = minutes
      .toString()
      .padStart(2, "0")
    secondCard.querySelector(".time").textContent = seconds
      .toString()
      .padStart(2, "0")

    timeLeft = { days, hours, minutes, seconds }
  }

  function flipCard(card, newValue) {
    const cardInner = card.querySelector(".card-front")
    const cardBack = card.querySelector(".card-back")
    if (cardInner && cardBack) {
      cardInner.classList.add("card-flip")
      cardBack.classList.add("card-flip")

      setTimeout(() => {
        const timeElement = cardBack.querySelector(".time")
        timeElement.textContent = newValue.toString().padStart(2, "0")
        cardInner.style.animation = "flipAnimation 0.3s"
        cardBack.style.animation = "flipAnimation 0.3s"

        setTimeout(() => {
          cardInner.classList.remove("card-flip")
          cardBack.classList.remove("card-flip")
          cardInner.style.animation = null
          cardBack.style.animation = null
        }, 500)
      }, 10)
    }
  }

  const timerInterval = setInterval(() => {
    timeLeft = getTimeRemaining(targetDate)
    if (timeLeft.total >= 0) {
      updateTimer()
    } else {
      clearInterval(timerInterval)
    }
  }, interval)
}

function getTimeRemaining(targetDate) {
  const now = new Date()
  const time = targetDate.getTime() - now.getTime()
  const seconds = Math.floor((time / 1000) % 60)
  const minutes = Math.floor((time / 1000 / 60) % 60)
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
  const days = Math.floor(time / (1000 * 60 * 60 * 24))

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
  }
}

function getTimeComponents(time) {
  const { days, hours, minutes, seconds } = time

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
