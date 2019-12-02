const countdown = document.querySelector(".countdown");
const launchDate = new Date("Dec 24, 2019 00:00:01").getTime();

const interval = setInterval(()=>{
    console.log("tick");
    const now = new Date().getTime();
    const distanse = launchDate - now;
    console.log(distanse);

    const days = Math.floor(distanse/(1000*60*60*24));
    const hours = Math.floor((distanse % (1000*60*60*24))/(1000*60*60));
    const mins = Math.floor((distanse % (1000*60*60))/(1000*60))
    const secs = Math.floor((distanse % (1000*60))/1000)
    console.log(days, "Days");
    console.log(hours, "Hours")
    console.log(mins, "Minutes")
    console.log(secs, "Secunds");

    countdown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${mins} minutit</span></div>
    <div><span>${secs} sekundit</span></div>
    `;

    if(distanse < 0){
        clearInterval(interval);
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Häid Jõule!"
    }


}, 1000);