$(function() {
  $("[id='sexual-orientation-total']").highcharts({
    title: {
      text: ''
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['Asexual', 'Bisexual', 'Demisexual', 'Heterosexual', 'Homosexual', 'Pansexual'],
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
        ['Asexual', 16],
        ['Bisexual', 86],
        ['Demisexual', 10],
        ['Heterosexual', 782],
        ['Homosexual', 18],
        ['Pansexual', 11]
      ],
      showInLegend: false
    }]
  });
});
