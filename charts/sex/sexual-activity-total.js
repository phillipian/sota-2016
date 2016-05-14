$(function() {
  $("[id='sexual-activity-total']").highcharts({
    colors: ['#999', '#777', '#555', '#333'],
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    xAxis: {
      categories: ['Yes', 'Not Applicable'],
    },
    tooltip: {
      formatter: barTooltipFormatter
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
