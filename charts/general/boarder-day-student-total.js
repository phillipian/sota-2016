$(function() {
  $("[id='boarder-day-student-total']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Boarder', 'Day Student'],
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
        ['Boarder', 668],
        ['Day Student', 255]
      ],
      showInLegend: false
    }]
  });
});
