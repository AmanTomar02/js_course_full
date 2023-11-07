let p = fetch("https://goweather.herokuapp.com/weather/india")
p.then((response) => {
    console.log(response.headers);
    console.log(response.status);
    console.log(response.ok);
    return response.json()
}).then((response2) => {
    console.log(response2)
})