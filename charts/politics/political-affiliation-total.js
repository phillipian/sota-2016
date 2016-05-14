$(function() {
  $("[id='political-affiliation-total']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['Conservative', 'Liberal', 'Libertarian', 'Other or Unsure'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Conservative', 152],
        ['Liberal', 447],
        ['Libertarian', 41],
        ['Other or Unsure', 283]
      ],
      showInLegend: false
    }]
  });
});
