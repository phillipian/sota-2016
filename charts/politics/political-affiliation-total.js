$(function() {
  $("[id='political-affiliation-total']").highcharts({
    title: {
      // text: 'What is your political affiliation?'
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['Conservative', 'Liberal', 'Libertarian', 'Other or Unsure'],
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
      data: [['Conservative', 152], ['Liberal', 447], ['Libertarian', 41], ['Other or Unsure', 283]],
      showInLegend: false
    }]
  });
});
