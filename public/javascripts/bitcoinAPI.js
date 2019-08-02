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




// Wallet Chart

const ctx = document.getElementById('walletChart').getContext('2d');
const walletChart = new Chart(ctx, {
    type: 'doughnut',
    animation:{
      animateScale:true
  },
    data: {
        labels: ['Bitcoin', 'Ethereum', 'Litecoin', 'XRP'],
        datasets: [{
            label: 'Coins',
            data: [920, 859, 540, 321],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
                
            ],
            borderWidth: 2
        }]
    },
    options: {
      "easeInCirc",
      animateRotate : true,
      animateScale : false,
      responsive: true,
      maintainAspectRatio: true,
      showScale: true,
      animateScale: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
