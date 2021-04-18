let apiData = require("./api_data");
apiData().then(cities => {
    let html = '<h2> Temperature Chart</h2>';
    let body = document.getElementById("body");
    for (let i = 0; i < cities.length; i++){
        console.log(cities[i]);
        
        html += `<div class="progress-bar">
                    ${cities[i].name}
                    <div class="progress-track">
                    <div class="progress-fill">
                        <span class="bar">${Math.round(cities[i].main.temp)-273}C</span>
                    </div>
                    </div>
                </div>`;
    }
    body.innerHTML = html;

    let x = document.getElementsByClassName("progress-fill");
    let y = document.getElementsByClassName("bar");
    for (let i = 0; i < x.length; i++) {
        let percent = y[i].innerHTML;
        console.log(percent.slice(0, percent.length - 1));
        let pTop = 100 - parseInt( percent.slice(0, percent.length - 1));
        
        x[i].style.height = 100-pTop + "%";
        x[i].style.top = pTop + "%";
        
    }
});


