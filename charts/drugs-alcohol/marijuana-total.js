$(function() {
  $("[id='marijuana-total']").highcharts({
    title: {
      // text: 'Marijuana Total'
    },
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['On and off campus', 'On campus', 'Off campus', 'Not applicable'],
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
      data: [
        ['On and off campus', 151],
        ['On campus', 23],
        ['Off campus', 103],
        ['Not applicable', 646]
      ],
      showInLegend: false
    }]
  });
});
