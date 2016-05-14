$(function() {
  $("[id='school-sponsered-event-under-influence']").highcharts({
    chart: {
      type: 'pie'
    },
    xAxis: {
      categories: ['Yes', 'No'],
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
        ['Have attended under the influence', 179],
        ['Have never attended under the influence', 744]
      ],
      innerSize: '60%',
      showInLegend: true
    }]
  });
});
