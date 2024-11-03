//date today
function dateFunction() {
    var number = "123";
    let today = new Date().toISOString().slice(0, 10)
  
    console.log(today)
    document.getElementById("Date_today").innerHTML = today;
};


sidebar = document.getElementById("sidebar");
main = document.getElementById("main");
toggleSidebarOff = document.getElementById("toggleOff");
toggleSidebarOn = document.getElementById("toggleOn");


toggleSidebarOff.addEventListener('click', () =>{
    sidebar.classList.add('close');
    toggleSidebarOn.classList.remove('hide');
    main.classList.add('show-main');
});



toggleSidebarOn.addEventListener('click', () =>{
    sidebar.classList.remove('close');
    toggleSidebarOn.classList.add('hide');
    main.classList.remove('show-main');
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
    y:yArray,
    type:"bar",
    text: xArray.map(String),
    bgcolor: "rgb(2,0,0)",
    textposition: 'auto',
    hoverinfo: 'label',
    orientation:"h",
    marker: {color:"rgba(255,0,0,0.7)"}
  }];
  
  const layout = {    
    color: 'rgb(100,100,100',
    paper_bgcolor: 'rgb(38,38,38)',
    plot_bgcolor: 'rgb(38,38,38)', 
    
  
    xaxis: {
        
        title: 'x-axis aa',
        showgrid: true,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 1,
        linecolor: '#636363',
        color:'#eee'
  
    },
  
    yaxis: {
  
      title: 'y-axis aa',
      showgrid: false,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 8,
        linecolor: '#636363',
        color:'#eee'
  
    }
  
  };
  
  Plotly.newPlot("expenses_per_day_chart", data, layout);