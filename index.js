let countHomeEl = document.getElementById("count-home-el") 
let countGuestEl = document.getElementById("count-guest-el")
let homeCount = 0
let guestCount = 0


function add1PointHome() {
    homeCount = homeCount + 1
    countHomeEl.textContent = homeCount
 
}

function add2PointHome() {
    homeCount = homeCount + 2
    countHomeEl.textContent = homeCount
   
}

function add3PointHome() {
    homeCount = homeCount + 3
    countHomeEl.textContent = homeCount
}

function add1PointGuest() {
    guestCount = guestCount + 1
    countGuestEl.textContent = guestCount
}

function add2PointGuest() {
    guestCount = guestCount + 2
    countGuestEl.textContent = guestCount
}

function add3PointGuest() {
    guestCount = guestCount + 3
    countGuestEl.textContent = guestCount
}

function reset() {
    homeCount = 0
    guestCount = 0
    countHomeEl.textContent = homeCount
    countGuestEl.textContent = guestCount
}
