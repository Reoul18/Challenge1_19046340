var s = 13;
var r = 150;

/*var kleding = [10, 15, 5, 90]; voor staafdiagram*/ 

document.getElementById('speed').innerHTML = s;
document.getElementById('balk').style.width = s+'%';


document.getElementById('gas').onclick = function(){
    s += 10;

     if(s > 100){
         s = 100;
    }
    document.getElementById('speed').innerHTML = s;
    document.getElementById('balk').style.width = s+'%';

};

var ctx = document.getElementById ('myChart').getContext ('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul'],
        datasets: [{
            label: 'Distance Progress',
            backgroundColor: 'gray',
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: '5',
            data: [0, 9.1, 18.2, 27.3, 36.4, 36.4, 45.5, 54.6],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                fontFamily :'Nasalization',
                fontColor: 'white'
            }
        }
    }
});

var ctr = document.getElementById ('myChart2').getContext ('2d');
var myRadarChart = new Chart(ctr, {
    type: 'radar',
    data: {
        labels: ['Turbulence', 'Meteorite Regen', 'Black Hole Gevaar', 'Hittegolf'],
        datasets: [{
            label: 'Route',
            data: [40, 50, 50, 20],
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: '3'
        }]
    },
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        legend: {
            labels: {
                fontFamily :'Nasalization',
                fontColor: 'white',
            }
        }
    }
});