//alert("help")

const c1 = document.getElementById('myChart');
const c2 = document.getElementById('myChart2');

new Chart(c1, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Looping tension',
    data: [65, 59, 80, 81, 26, 55, 40,65, 59, 80, 81, 26, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
  }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(c2, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [2, 7, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: '#cf0690',
        color: '#cf0690',
      }]
    },
    options: {

      plugins: {
        legend: {
          display: true,
          labels: {
              color: 'rgb(255, 99, 132)'
          }
      },
        
        title: {
            display: true,
            text: 'Custom Chart Title',
            color:'green',
        }
    },
      indexAxis: 'y',
      
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 100,
        }
      }
    }
  });

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
    }
});