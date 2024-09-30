
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


const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  text: xArray.map(String),
  bgcolor: "rgb(2,0,0)",
  textposition: 'auto',
  hoverinfo: 'label',
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.2)"}
}];

const layout = {    
  title:"Expenses per Day",
  paper_bgcolor: 'rgb(165,165,165)',
  plot_bgcolor: 'rgb(165,165,165)', 
  title: 'Expenses Per Day',

  xaxis: {

    title: 'x-axis aa'

  },

  yaxis: {

    title: 'y-axis aa'

  }

};

Plotly.newPlot("split_expenses_chart", data, layout);