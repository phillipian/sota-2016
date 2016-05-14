$(function() {
  $("[id='boarder-day-student-sexual-activity']").highcharts({
    title: {
      // text: 'Boarder-Day Student vs. Sexual Activity'
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['Boarders', 'Day Students'],
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
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
