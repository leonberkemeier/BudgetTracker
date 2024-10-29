
const trace1 = {
    x: xArray,
    y: yArray,
    type: 'scatter',
    name: 'toi'
  };

  var data = [trace1];

  var layout = {

    title: 'Quarter 1 Growth',
  
    xaxis: {
  
      title: 'Tage',
  
      showgrid: false,
  
      zeroline: false
  
    },
  
    yaxis: {
  
      title: 'Networth',
  
      showline: false
  
    }
  
  };
  
  Plotly.newPlot('myDiv', data, layout);

//   SECOND PLOT


  var xValue = xArray;


  var yValue = y1Array;
  
  
  var trace2 = {
  
    x: xValue,
  
    y: yValue,
  
    type: 'bar',
  
    text: yValue.map(String),
  
    textposition: 'auto',
  
    hoverinfo: 'none',
  
    marker: {
  
      color: 'rgb(158,202,225)',
  
      opacity: 0.6,
  
      line: {
  
        color: 'rgb(8,48,107)',
  
        width: 1.5
  
      }
  
    }
  
  };
  
  
  var data = [trace2];
  
  
  var layout = {
  
    title: 'AvgIncome',
  
    barmode: 'stack'
  
  };
  
  
  Plotly.newPlot('myDiv1', data, layout);



//   thrid PLOT


  var xValue = xArray;


  var yValue = y2Array;
  
  
  var trace3 = {
  
    x: xValue,
  
    y: yValue,
  
    type: 'bar',
  
    text: yValue.map(String),
  
    textposition: 'auto',
  
    hoverinfo: 'none',
  
    marker: {
  
      color: 'rgb(158,202,225)',
  
      opacity: 0.6,
  
      line: {
  
        color: 'rgb(8,48,107)',
  
        width: 1.5
  
      }
  
    }
  
  };
  
  
  var data = [trace3];
  
  
  var layout = {
  
    title: 'Expenses per Day',
  
    barmode: 'stack'
  
  };
  
  
  Plotly.newPlot('myDiv2', data, layout);
  

//   FOURTH GRPAH

var xValue = xArray;


  var yValue = y3Array;
  
  
  var trace3 = {
  
    x: xValue,
  
    y: yValue,
  
    type: 'bar',
  
    text: yValue.map(String),
  
    textposition: 'auto',
  
    hoverinfo: 'none',
  
    marker: {
  
      color: 'rgb(158,202,225)',
  
      opacity: 0.6,
  
      line: {
  
        color: 'rgb(8,48,107)',
  
        width: 1.5
  
      }
  
    }
  
  };
  
  
  var data = [trace3];
  
  
  var layout = {
  
    title: 'Expenses per Day',
  
    barmode: 'stack'
  
  };
  
  
  Plotly.newPlot('myDiv3', data, layout);

//   FIRTH PLOT


const trace5 = {
    x: xArray,
    y: y4Array,
    type: 'scatter',
    name: 'toi'
  };

  var data = [trace5];

  var layout = {

    title: 'Quarter 1 Growth',
  
    xaxis: {
  
      title: 'Tage',
  
      showgrid: false,
  
      zeroline: false
  
    },
  
    yaxis: {
  
      title: 'Networth',
  
      showline: false
  
    }
  
  };
  
  Plotly.newPlot('myDiv4', data, layout);