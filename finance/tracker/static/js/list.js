
document.getElementById('filter-button').addEventListener('click', function() {
    var year = document.getElementById('year-filter').value;
    var month = document.getElementById('month-filter').value;
    var queryString = '';
    
    console.log(year, month);
    window.location.href = `/list?year=${year}&month=${month}`;
// var data = JSON.parse('{{ data }}');

});

// cahrt


// first barchart

// const xArray = [7.65, 7.84, 7.72, 6.55, 6.71, 9.14, 9.88, 9.78, 8.61, 5.31, 8.96, 8.68, 8.36, 8.76, 7.79, 7.78, 9.67, 6.12, 5.5, 7.31, 6.32, 9.51, 8.06, 5.96, 5.02, 9.39, 8.12, 7.01, 7.86, 5.81, 9.76
// ];
// const yArray = ["1.01", "2.01", "3.01", "4.01", "5.01", "6.01", "7.01", "8.01", "9.01", "10.01", "11.01", "12.01", "13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01", "20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01", "27.01", "28.01", "29.01", "30.01", "31.01"
// ];


const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  text: xArray.map(String),
  bgcolor: "rgb(2,0,0)",
  textposition: 'auto',
  hoverinfo: 'label',
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout = {    
  title:"Expenses per Day",
  paper_bgcolor: 'rgb(165,165,165)',
  plot_bgcolor: 'rgb(165,165,165)', 
  title: 'Title of the Graph',

  xaxis: {

    title: 'x-axis aa'

  },

  yaxis: {

    title: 'y-axis aa'

  }

};

Plotly.newPlot("split_expenses_chart", data, layout);