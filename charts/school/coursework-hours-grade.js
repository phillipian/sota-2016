$(function() {
  $("[id='coursework-hours-grade']").highcharts({
    colors: ['#FFF', '#DDD', '#BBB', '#999', '#777', '#555', '#333'],
    title: {
      // text: 'Coursework Hours Grade'
    },
    chart: {
      type: 'area'
    },
    plotOptions: {
      area: {
        stacking: 'area',
        dataLabels: {
          color: '#333'
        }
      }
    },
    xAxis: {
      categories: ['10+ hours', '9', '8', '7', '6', '5', '4', '3', '2', '1 hour or less'],
      reversed: true
    },
    legend: {
      reversed:true
    },
    yAxis: {
      reversedStacks: true
    },
    tooltip: {
      // formatter: barTooltipFormatter
    },
    series: [{
      name: '2016',
      data: [7, 20, 38, 65, 47, 35, 15]
    }, {
      name: '2017',
      data: [15, 30, 64, 72, 37, 14, 0]
    }, {
      name: '2018',
      data: [11, 33, 63, 78, 67, 8, 3]
    }, {
      name: '2019',
      data: [9, 16, 46, 69, 43, 12, 6]
    }]
  });
});
