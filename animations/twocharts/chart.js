const xArray1 = [55, 49, 44, 24, 15,55, 49, 44, 24, 15, 19, 29, 19,12,12,14];
const yArray1 = ["1 ", "2 ", "3 ", "4 ", "5 ","6 ", "7 ", "8 ", "9 ", "10", "11", "12","12", "14", "15", "16"];

const data1 = [{
  x:xArray1,
  y:yArray1,
  type:"bar",
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout2 = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot1", data1, layout2);



const xArray = [55, 49, 44, 24, 15,55, 49, 44, 24, 15, 19, 29, 19,12,12,14];
const yArray = ["1 ", "2 ", "3 ", "4 ", "5 ","6 ", "7 ", "8 ", "9 ", "10", "11", "12","12", "14", "15", "16"];

const data = [{
  x:xArray,
  y:yArray,
  text: yArray1.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  type:"bar",
  orientation:"h",
  marker: {color:"rgba(255,255,0,0.6),rgba(255,0,0,0.6)"}
}];

const layout = {title:"World Wide Wheat Production"};

Plotly.newPlot("myPlot", data, layout);

