let start;
let end;
// Access input values 

// document.getElementsByClassName("search-btn")[0].onclick=dateSearch;

function dateSearch() {
  start = document.getElementById("begDate").value; 
  end = document.getElementById("endDate").value;

  // Access API
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
    .then(response => {
      printChart(response.data.bpi);
      dateSearch();
    })
    .catch(error => {
      console.log(error);
  });
}
// Make Chart
  const printChart = (currencyData => {
  const currencyLabels = Object.keys(currencyData);
  const currencyPrice = Object.values(currencyData);
  const ctx = document.getElementById('bitcoinChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: currencyLabels,
      datasets: [{
        label: "Date",
        backgroundColor: 'rgb(52, 226, 174)',
        borderColor: 'rgb(52, 226, 174)',
        data: currencyPrice,
      }]
    }
  });
});

