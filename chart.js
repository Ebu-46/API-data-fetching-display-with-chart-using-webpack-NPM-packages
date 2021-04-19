let apiData = require("./api_data");
apiData().then(cities => {
    let html = '<h2> Temperature Chart</h2>';
    let chart = document.getElementById("chart");
    for (let i = 0; i < cities.length; i++){
        console.log(cities[i]);
        
        html += `<div class="temperature-bar">
                    ${cities[i].name}
                    <div class="temperature-track">
                    <div class="temperature-fill">
                        <span class="bar">${Math.round(cities[i].main.temp)-273}C</span>
                    </div>
                    </div>
                </div>`;
    }
    chart.innerHTML = html;

    let temperature_fill = document.getElementsByClassName("temperature-fill");
    let bar = document.getElementsByClassName("bar");
    for (let i = 0; i < temperature_fill.length; i++) {
        let percent = bar[i].innerHTML;
        console.log(percent.slice(0, percent.length - 1));
        let pTop = 100 - parseInt( percent.slice(0, percent.length - 1));
        
        temperature_fill[i].style.height = 100-pTop + "%";
        temperature_fill[i].style.top = pTop + "%";
        
    }
});


