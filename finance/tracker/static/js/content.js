
const ctx = document.getElementById('myChart');
const c1 = document.getElementById('split_expenses');

new Chart(ctx, {
type: 'bar',
data: {
    labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29','30'],
    datasets: [{
    label: '# of Votes',
    data: [1,2,3,4,2,3,4,3,4,3,5,3,2,3,4,2,3,2],
    borderWidth: 1
    }]
},
options: {
    indexAxis: 'y',
    
    scales: {
    y: {
        beginAtZero: true
    }
    }
}
});
