$(function() {
  $("[id='study-drugs-grade']").highcharts({
    title: {
      // text: 'Study Drugs Grade'
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['2016', '2017','2018','2019']
    },
    plotOptions: {
      series: {
        stacking: 'percent',
        dataLabels: {
            enabled: false
        }
      }
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },

    series: [{
      name: 'On and off campus',
      data: [19,7,5,2]
    }, {
      name: 'On campus',
      data: [18,14,12,5]
    }, {
      name: 'Off campus',
      data: [0,1,1,1]
    }, {
      name: 'Not applicable',
      data: [190,210,245,193]
    }]
  });
});
