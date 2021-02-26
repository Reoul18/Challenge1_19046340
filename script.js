var s = 10;
var r = 100;

/*var kleding = [10, 15, 5, 90]; voor staafdiagram*/ 

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

var lijn = document.getElementById ('myChart').getContext ('2d');
var chart = new Chart(lijn, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul'],
        datasets: [{
            label: 'Distance Progress',
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: '20',
            data: [0, 9.1, 18.2, 27.3, 36.4, 36.4, 45.5, 54.6],
        }]
    },
    options: {
            legend: {
                labels: {
                    fontFamily :'Nasalization',
                    fontColor: 'white'
            }
            }
    }
});

var rad = document.getElementById ('myChart2').getContext ('2d');
var myRadarChart = new Chart(rad, {
    type: 'radar',
    data: {
        labels: ['Turbulence', 'Meteorite Regen', 'Black Hole Gevaar', 'Hittegolf'],
        datasets: [{
            label: 'Route',
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            data: [40, 50, 50, 20],
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: '1'
    },{ 
            label : 'Route 2',
            backgroundColor: 'rgba(0, 60, 255, 0.3)',
            data: [70, 80, 80, 40],
            borderColor: 'white',
            pointBorderColor: 'white',
            pointStyle: 'star',
            pointBorderWidth: '1'
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
                fontColor: 'white'
            }
        }
    }
});