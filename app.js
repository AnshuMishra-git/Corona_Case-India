 window.onload= function() {
        getcovid();
 }
function getcovid()
{
    console.log("Hi i am working");
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/131')
    .then(function(resp)
    {
        return resp.json()
    })
    .then(function(data)
    {
        let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('Population').innerHTML = population.toLocaleString('en');
		document.getElementById('Update').innerHTML = update.substr(0, 10);
		document.getElementById('Cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('Deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('Percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

    })
    .catch(function()
    {
        console.log("Error something is going wrong");
    })
    //  setTimeout(getcovid, 43200000)
    setTimeout(getcovid, 100000)
}
