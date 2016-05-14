$(function() {
  $("[id='sexual-assault-total']").highcharts({
    title: {
      // text: 'Have you ever been sexually assaulted?'
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['On and <br />off campus', 'On campus', 'Off campus','Never'],
      labels: {
        // rotation: -90,
      }
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    series: [{
      data: [['On and off campus', 10], ['On campus', 21], ['Off campus', 53], ['Never', 839]],
      showInLegend: false
    }]
  });
});
