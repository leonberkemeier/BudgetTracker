//date today
function dateFunction() {
    var number = "123";
    let today = new Date().toISOString().slice(0, 10)
  
    console.log(today)
    document.getElementById("Date_today").innerHTML = today;
};

// alert("helpme");


sidebar = document.getElementById("sidebar");
main = document.getElementById("main");
toggleSidebarOff = document.getElementById("toggleOff");
toggleSidebarOn = document.getElementById("toggleOn");


toggleSidebarOff.addEventListener('click', () =>{
    sidebar.classList.add('close');
    toggleSidebarOn.classList.remove('hide');
    main.classList.add('show-main');
    window.dispatchEvent(new Event('resize'));
});



toggleSidebarOn.addEventListener('click', () =>{
    sidebar.classList.remove('close');
    toggleSidebarOn.classList.add('hide');
    main.classList.remove('show-main');
    window.dispatchEvent(new Event('resize'));
});

function dateFunction() {
    var number = "123";
    let today = new Date().toISOString().slice(0, 10)
  
    console.log(today)
    document.getElementById("Date_today").innerHTML = today;
  }


//   FIRST CHART 
//   EXPENSES PER DAY


const data = [{
    x:xArray,
    y:TageArray,
    type:"bar",
    // text: xArray.map(String),
    bgcolor: "rgb(255,0,0)",
    textposition: 'auto',
    titlecolor: "#eee",
    hoverinfo: 'label',
    orientation:"h",
    marker: {color:"rgba(88,95,164,0.8)"}
  }];
  
  const layout = {    
    color: 'rgb(100,100,100',
    paper_bgcolor: 'rgb(38,38,38)',
    plot_bgcolor: 'rgb(38,38,38)', 
    title: {
      text: 'Expenses per Day',
      font: {
      color:'#eee',
      size: 20
      }
    },
    autosize: true,
    xaxis: {
        
        title: 'amount',
        showgrid: true,
        zeroline: true,
        showline: true,
        // mirror: 'ticks',
        gridcolor: 'rgb(88,88,88)',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 1,
        linecolor: 'rgb(88,88,88)',
        color:'#eee'
  
    },
  
    yaxis: {
  
      title: 'date',
      showgrid: false,
        zeroline: true,
        showline: true,
        // mirror: 'ticks',
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 8,
        linecolor: '#636363',
        color:'#eee'
  
    }
  
  };

  var config = {responsive: true}
  
  Plotly.newPlot("expenses_per_day_chart", data, layout, config);


  // relative NEtworth

  //   FIRTH PLOT


const trace5 = {
  x: TageArray,
  y: y1Array,
  type: 'scatter',
  name: 'toi',
  marker: {color:"rgba(114,116,214,0.5)"}
};

var dataRelNet = [trace5];

var layoutRelNet = {
  color: 'rgb(100,100,100)',
  paper_bgcolor: 'rgb(38,38,38)',
  plot_bgcolor: 'rgb(38,38,38)', 
  title: {
    text: 'Relative Networth',
    font: {
    color:'#eee',
    size: 20
    }
  },
  titlecolor: '#eee',
  autosize: true,
  xaxis: {
    title: 'Tage',
    showgrid: false,
    zeroline: true,
    // showline: true,
    // mirror: 'ticks',
    gridcolor: 'rgb(88,88,88)',
    gridwidth: 1,
    zerolinecolor: '#969696',
    zerolinewidth: 1,
    linecolor: 'rgb(88,88,88)',
    color:'#eee'
  },
  yaxis: {
    title: 'Networth',
    showline: true,
    showgrid: true,
        zeroline: true,
        showline: true,
        // mirror: 'ticks',
        gridcolor: 'rgb(88,88,88)',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 1,
        linecolor: 'rgb(88,88,88)',
        color:'#eee'
  }

};

Plotly.newPlot('networth_per_day_chart', dataRelNet, layoutRelNet,config);


//   Bar Graph Expenses vs Income per day

var xValue = TageArray;


  var yValue = y2Array;
  var trace3 = {  
    x: xValue,  
    y: yValue,  
    type: 'bar',  
    // text: yValue.map(String),  
    textposition: 'auto',  
    hoverinfo: 'label',  
    marker: {
      color: 'rgb(114,116,214)',  
      opacity: 0.6,  
      line: {  
        color: 'rgb(87,95,164)',  
        width: 1.5  
      }
  
    }

  
  };
  
  
  var data3 = [trace3]; 
  
  var layout3 = { 
    color: 'rgb(100,100,100',
    paper_bgcolor: 'rgb(38,38,38)',
    plot_bgcolor: 'rgb(38,38,38)',  
    title: {
      text: 'Daily Networth',
      font: {
      color:'#eee',
      size: 20
      }
    },
    autosize: true, 
    barmode: 'stack',
    yaxis: {
      title: 'Networth',
      showline: true,
      showgrid: true,
          zeroline: true,
          showline: true,
          // mirror: 'ticks',
          gridcolor: 'rgb(88,88,88)',
          gridwidth: 1,
          zerolinecolor: '#969696',
          zerolinewidth: 1,
          linecolor: 'rgb(88,88,88)',
          color:'#eee'
    },
    xaxis: {
      title: 'days',
      showline: true,
      showgrid: false,
          zeroline: true,
          showline: true,
          // mirror: 'ticks',
          gridcolor: 'rgb(88,88,88)',
          gridwidth: 1,
          zerolinecolor: '#969696',
          zerolinewidth: 1,
          linecolor: 'rgb(88,88,88)',
          color:'#eee'
    }
  };
  
  
  Plotly.newPlot('average_networth_per_day_chart', data3, layout3,config);

  // THIRD SECTION

  // PurposeLISt

  const dataDonut = [{
    x:xDonut,
    y:yDonut,
    type:"bar",

    textposition: 'auto',
    hoverinfo: 'label',
    
    orientation:"h",
    marker: {color:"rgba(255,0,0,0.2)"},
    marker: {
      color: 'rgba(88,95,164,.5)',  
      line: {  
        color: 'rgb(88,95,164)',  
        width: 1.5  
      }
  
    },
  }];

  const layoutDonut = {    
    color: 'rgb(114,116,214',
    paper_bgcolor: 'rgb(38,38,38)',
    plot_bgcolor: 'rgb(38,38,38)', 
    title: {
      text: 'Purpose List',
      font: {
      color:'#eee',
      size: 20
      }
    },
    autosize: true,
    xaxis: {  
      title: 'amount' ,
      showline: true,
      showgrid: false,
          zeroline: true,
          showline: true,
          // mirror: 'ticks',
          gridcolor: 'rgb(88,88,88)',
          gridwidth: 1,
          zerolinecolor: '#969696',
          zerolinewidth: 1,
          linecolor: 'rgb(88,88,88)',
          color:'#eee' 
    },
  
    yaxis: {  
      title: 'Purpose'  ,
      showline: true,
      showgrid: false,
          zeroline: true,
          showline: true,
          // mirror: 'ticks',
          gridcolor: 'rgb(88,88,88)',
          gridwidth: 1,
          zerolinecolor: '#969696',
          zerolinewidth: 1,
          linecolor: 'rgb(88,88,88)',
          color:'#eee'
    }
}; 
  
Plotly.newPlot('PurposeList', dataDonut, layoutDonut,config);


var ultimateColors = [

  ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],

  ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],

  ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],

  ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']

];

var datad = [{
  values: xDonut,
  labels: yDonut,
  
  marker: {

    colors: ultimateColors[0]

  },
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie',
  
}];



var layoutd = {
  title: {
    text: 'thedonut',
    color:'#eee',
    family: 'Courier New, monospace',

    size: 70
  },
  color: 'rgb(255,0,0)',
  paper_bgcolor: 'rgb(38,38,38)',
  plot_bgcolor: 'rgb(38,38,38)', 
  title: {
    text: 'thedonut',
    font: {
    color:'#eee',
    size: 20
    }
  },
  autosize: true,
  showlegend: true,
  legend: {

    font: {
      color: "#eee"
    }

  },
  // grid: {rows: 1, columns: 2},
  yaxis: {  
    title: 'Purpose'  ,
    showline: true,
    showgrid: false,
        zeroline: true,
        showline: true,
        // mirror: 'ticks',
        gridcolor: 'rgb(88,88,88)',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 1,
        linecolor: 'rgb(88,88,88)',
        color:'#eee'
  },
  xaxis: {  
    title: 'Purpose'  ,
    showline: true,
    showgrid: false,
        zeroline: true,
        showline: true,
        // mirror: 'ticks',
        gridcolor: 'rgb(88,88,88)',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 1,
        linecolor: 'rgb(88,88,88)',
        color:'#eee'
  }
};

Plotly.newPlot('theDonut', datad, layoutd,config);