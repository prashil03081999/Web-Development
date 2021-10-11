setInterval(() => {
    d=new Date();
    hourTme=d.getHours();
    minuteTime=d.getMinutes();
    secondTime=d.getSeconds();

    // Formulaes to rotate hour,min and sec hands!1

    hrotation=30*hourTme+ minuteTime/2;
    mrotation=6*minuteTime;
    srotation=6*secondTime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);