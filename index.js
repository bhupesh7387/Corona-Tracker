let serialNumber = document.getElementsByClassName("serialNumber")
let place = document.getElementsByClassName("place")
let infected = document.getElementsByClassName("infected")
let active = document.getElementsByClassName("active")
let recovered = document.getElementsByClassName("recovered")
let deaths = document.getElementsByClassName("deaths")
let table = document.getElementById("data")
let data = document.getElementById("data1")
let data2;

function getData() {
    fetch("https://api.covid19api.com/summary").then((response) => {
        return response.json()
    }).then((coronaData) => {
        let length = coronaData["Countries"].length
        for (let index = 0; index < length - 1; index++) {
            data2 = table.appendChild(data.cloneNode(true))
        }

        let i = 0

        coronaData["Countries"].forEach(element => {
            let placeData = element.Country
            let infectedData = element.TotalConfirmed
            let recoveredData = element.TotalRecovered
            let deathsData = element.TotalDeaths
            let activeData = infectedData - recoveredData - deathsData

            serialNumber[i].innerHTML = `${i + 1})`
            place[i].innerHTML = placeData
            infected[i].innerHTML = infectedData
            recovered[i].innerHTML = recoveredData
            deaths[i].innerHTML = deathsData
            active[i].innerHTML = activeData
            i++
        });
    });
}


getData()

setInterval(location.reload, 1000)