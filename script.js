/*Bar Chart*/
Chart.defaults.global.defaultFontColor = '#ffffff'
Chart.defaults.global.defaultFontFamily = 'Nasalization'

var s = 10;
var r = 100;

document.getElementById('speed').innerHTML = s;
document.getElementById('balk').style.width = s+'%';

document.getElementById('range').innerHTML = r;
document.getElementById('fuelbalk').style.width = r-'%';

document.getElementById('gas').onclick = function(){
    s += 10;

     if(s > 100){
        s = 100;
        alert('We kunnen niet sneller gaan !');
    }
    document.getElementById('speed').innerHTML = s;
    document.getElementById('balk').style.width = s+'%';

    r -= 5;

    if(r<55){
         r=55;
    }
    document.getElementById('range').innerHTML = r;
    document.getElementById('fuelbalk').style.width = r+'%';

};

/*Lijn Chart*/
var lijn = document.getElementById ('myChart').getContext ('2d');
var chart = new Chart(lijn, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul'],
        datasets: [{
            label: 'Distance Progress in miljoen km',
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: 10,
            lineTension: 0,
            data: [0, 9.1, 18.2, 27.3, 36.4, 36.4, 45.5, 54.6],
        }]
    },
    options: {
        legend: {
            labels: {
                fontFamily :'Nasalization',
                fontColor: 'white'
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color:'rgba(255, 255, 255, 0.3)'
                },
            }],
            yAxes:[{
                gridLines:{
                    color:'rgba(255, 255, 255, 0.3)'
                }
            }]
        } 
    }    
});

/*Radar Chart*/
var rad = document.getElementById ('myChart2').getContext ('2d');
var myRadarChart = new Chart(rad, {
    type: 'radar',
    data: {
        labels: ['Turbulence', 'Meteorite Rain', 'Black Hole Danger', 'Heatwave'],
        datasets: [{
            label: 'Route',
            backgroundColor: 'rgba(0, 60, 255, 0.5)',
            data: [40, 30, 10, 20],
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: 7
    },{ 
            label : 'Route 2',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            data: [70, 80, 80, 40],
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: 7
        }]
    },
    options: {
        legend: {
            position: 'left',
            labels: {
                fontFamily :'Nasalization',
                fontColor: 'white'
            }
        },
        scale: {
            gridLines:{
                color:'rgba(255, 255, 255, 0.3)'
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});

/*Bar Chart*/
var bars = document.getElementById ('myChart3').getContext ('2d');
var myBarChart = new Chart(bars, {
    type: 'bar',
    data: { 
        labels: ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul'],
        datasets: [{
            label: 'Zwartekracht in m/s²',
            data: [9, 8, 7, 6, 5, 4, 3, 0],
            backgroundColor: 'rgb(0, 60, 255)',
            hoverBackgroundColor: 'rgba(66, 105, 140, 0.3)',
            borderColor: 'rgba(0, 60, 255, 0.3)'
        }]
    },
    options: {
        legend: {
            labels: {
                fontFamily :'Nasalization',
                fontColor: 'white'
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color:'rgba(255, 255, 255, 0.3)'
                },
            }],
            yAxes:[{
                gridLines:{
                    color:'rgba(255, 255, 255, 0.3)'
                }
            }]
        }
    }
});