$(function() {
  $("[id='self-harm-andover-total']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['Has engaged in self-harm at Andover', 'Has not engaged in self-harm at Andover'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Yes', 134],
        ['No', 789]
      ],
      showInLegend: false
    }]
  });
});
