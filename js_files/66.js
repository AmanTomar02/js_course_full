let p = fetch("https://goweather.herokuapp.com/weather/india")
p.then((response) => {
    return response.json()
}).then((response2) => {
    console.log(response2)
})