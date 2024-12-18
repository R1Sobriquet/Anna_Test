function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // Add leading zeros if needed
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec;
    
    document.getElementById("DigitalCLOCK").innerHTML = currentTime;
    
    setTimeout(showTime, 1000);
}