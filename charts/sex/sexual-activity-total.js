$(function() {
  $("[id='sexual-activity-total']").highcharts({
    colors: ['#999', '#777', '#555', '#333'],
    title: {
      // text: 'Engaged in Any Sexual Activity Total'
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['Yes', 'Not Applicable'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    plotOptions: {
      series: {
        // stacking: 'normal',
        colorByPoint: true
      }
    },
    series: [{
      data: [
        ['Yes', 431],
        ['Not Applicable', 492]
      ],
      showInLegend: false
    }]
  });
});
