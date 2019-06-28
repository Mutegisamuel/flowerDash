new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
        responsive: [{
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
        }
    }, {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
    }]
});

function openTab(tab) {
    window.location.hash = tab.innerText;
}

//   chart code

let monthlyChart = document.getElementById('monthlychart');

let chartone = new Chart (monthlyChart, {
    type:'bar',
    data:{
        labels:['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5'],
        datasets:[{
            label:'Banch in Kgs',
            data:[
                20,
                15,
                30,
                50,
                77
            ],
            backgroundColor:[
                '#e53935',
                '#FF5722',
                '#AFB42B',
                '#26A69A',
                '#F9A825'
            ],
            borderWidth:2,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Flowers produced per Block per Month in KGs'
        },
        tooltip:{
            enabled:true
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }

    }
})

let yearlyChart = document.getElementById('yearlychart');

let charttwo = new Chart (yearlyChart, {
    type:'bar',
    data:{
        labels:['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5'],
        datasets:[{
            label:'Banch in Kgs',
            data:[
                44,
                102,
                500,
                300,
                900
            ],
            backgroundColor:[
                '#e53935',
                '#FF5722',
                '#AFB42B',
                '#26A69A',
                '#F9A825'
            ],
            borderWidth:2,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Flowers produced per Block per Year in KGs'
        },
        tooltip:{
            enabled:true
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }

    }
})