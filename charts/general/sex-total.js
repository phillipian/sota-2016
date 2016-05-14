$(function() {
  $("[id='sex-total']").highcharts({
    title: {
      text: ''
    },
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Female', 'Male', 'Intersex'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    plotOptions: {
      series: {
        // stacking: 'normal',
        colorByPoint: true,
      }
    },
    series: [{
      data: [['Female', 494], ['Male', 427], ['Intersex', 2]],
      showInLegend: false
    }]
  });
});
