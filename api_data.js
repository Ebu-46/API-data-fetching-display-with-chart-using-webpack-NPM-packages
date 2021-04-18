let apiData = async function (){
    let cities=[];
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=b0dfd5e61ca1609f0a1eb7f74247e03e');
    cities.push(await response.json());

    // fetch('http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=b0dfd5e61ca1609f0a1eb7f74247e03e')
    // .then(response => response.json())
    // .then(data => cities.push(data));

    response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=rajshahi&appid=b0dfd5e61ca1609f0a1eb7f74247e03e');
    cities.push(await response.json());
   

    response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=khulna&appid=b0dfd5e61ca1609f0a1eb7f74247e03e');
    cities.push(await response.json());


    return cities;
};
module.exports = apiData;



