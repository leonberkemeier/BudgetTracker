

// const xArray=[{% for i in el %} '{{i}}' {% endfor %}];
// const yArray=[{% for i in pl%} {{i}} {% endfor %}];
// alert('hi');
const data = [{
    x:xArray,
    y:yArray,
    type:"bar",
    // text: xArray.map(String),
    // bgcolor: "rgb(2,0,0)",
    // textposition: 'auto',
    // hoverinfo: 'label',
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
  
Plotly.newPlot('myDiv', data, layout);
alert('hi');