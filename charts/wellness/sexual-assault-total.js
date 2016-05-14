$(function() {
  $("[id='sexual-assault-total']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['On and <br />off campus', 'On campus', 'Off campus', 'Never']
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['On and off campus', 10],
        ['On campus', 21],
        ['Off campus', 53],
        ['Never', 839]
      ],
      showInLegend: false
    }]
  });
});
