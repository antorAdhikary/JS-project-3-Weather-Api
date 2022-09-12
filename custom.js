document.getElementById("input-btn").addEventListener("click", function(){
    const city = document.getElementById("input-location").value;
    document.getElementById("input-location").value = "";

    fetch(`
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd02cae2e597d8a45ea0466bf6bbfd47
    `)
    .then(res => res.json())
    .then(data => {  
        document.getElementById("img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;     
        document.getElementById("new-location").innerText = data.name;
        const newTemp = Math.floor(data.main.temp - 273.15); 
        document.getElementById("new-temperature").innerText = newTemp;
        document.getElementById("details").innerText = data.weather[0].main;

    })
});