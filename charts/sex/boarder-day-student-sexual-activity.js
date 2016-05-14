$(function() {
  $("[id='boarder-day-student-sexual-activity']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: ['Boarders', 'Day Students'],
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    series: [{
      name: 'Have engaged in sexual activity',
      data: [340, 91]
    }, {
      name: 'Never have engaged in sexual activity',
      data: [328, 164]
    }]
  });
});
