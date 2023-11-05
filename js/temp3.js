// Stats Section

let nums = document.querySelectorAll("#stats .container .box .num");
let section = document.querySelector("#stats");
let started = false;
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => counter(num));
        }
        started = true;
    }
}
function counter(e) {
    let goal = e.dataset.goal;
    let count = setInterval(()=>{
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(count)
        }
    },2000 / goal)
}

// Skills Section

let skillsSection = document.querySelector(".skills")
let progress = document.querySelectorAll(".skills .prog span");
window.onscroll = function () {
    if (window.scrollY >= skillsSection.offsetTop - 100) {
        progress.forEach((prog) => {
            prog.style.width = prog.dataset.progress;
        })
    }
}

// Events Section

let dateGoal = new Date("Aug 18 23 11:59:59").getTime();
let countDown = setInterval(() => {

    let dateNow = new Date().getTime();
    let dateDiff = dateGoal - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);
    document.querySelector(".events .days").innerHTML = days < 10 ? `0${days}` : days ;
    document.querySelector(".events .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
