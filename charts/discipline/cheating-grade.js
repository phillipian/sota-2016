$(function() {
  $("[id='cheating-grade']").highcharts({
    colors: ['#DDD', '#BBB', '#999', '#777', '#555', '#333'],
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent',
        dataLabels: {
          enabled: false
        }
      }
    },
    xAxis: {
      categories: ['2016', '2017','2018','2019']
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    series: [{
      name: 'Yes, has cheated',
      data: [72, 66, 55, 25]
    }, {
      name: 'No, has not cheated',
      data: [155, 166, 208, 176]
    }
  ]
  });
});
