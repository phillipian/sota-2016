$(function() {
  $("[id='sex-total']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['Female', 'Male', 'Intersex'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Female', 494],
        ['Male', 427],
        ['Intersex', 2]
      ],
      showInLegend: false
    }]
  });
});
