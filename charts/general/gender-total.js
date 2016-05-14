$(function() {
  $("[id='gender-total']").highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['Agender', 'Gender fluid', 'Genderqueer', 'Man', 'Nonbinary', 'Woman'],
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
        ['Agender', 5],
        ['Gender fluid', 2],
        ['Genderqueer', 2],
        ['Man', 425],
        ['Nonbinary', 9],
        ['Woman', 480]
      ],
      showInLegend: false
    }]
  });
});
