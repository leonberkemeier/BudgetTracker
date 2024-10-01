


const data = [{
    x:xArray,
    y:yArray,
    type:"bar",

    textposition: 'auto',
    hoverinfo: 'label',

    orientation:"h",
    marker: {color:"rgba(255,0,0,0.2)"},
    marker: {

      color: 'rgba(58,200,225,.5)',
  
      line: {
  
        color: 'rgb(8,48,107)',
  
        width: 1.5
  
      }
  
    },
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
  
Plotly.newPlot('myDiv', data, layout);

var ultimateColors = [

  ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],

  ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],

  ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],

  ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']

];

var datad = [{
  values: xArray,
  labels: yArray,
  
  marker: {

    colors: ultimateColors[0]

  },
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];



var layoutd = {
  title: 'TheDonut',
  paper_bgcolor: 'rgb(165,165,165)',
  plot_bgcolor: 'rgb(165,165,165)', 
  height: 400,
  width: 400,
  showlegend: true,
  // grid: {rows: 1, columns: 2}
};

Plotly.newPlot('theDonut', datad, layoutd);

// alert('hi');