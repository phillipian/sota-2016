$(function() {
  $("[id='self-harm-andover-total']").highcharts({
    title: {
      // text: 'Self Harm at Andover Total'
    },
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Has engaged in self-harm at Andover', 'Has not engaged in self-harm at Andover'],
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
      data: [
        ['Yes', 134],
        ['No', 789]
      ],
      showInLegend: false
    }]
  });
});
