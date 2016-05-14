$(function() {
  $("[id='boarder-day-student-total']").highcharts({
    title: {
      text: ''
    },
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
        // stacking: 'normal',
        colorByPoint: true,
      }
    },
    series: [{
      data: [['Boarder', 668], ['Day Student', 255]],
      showInLegend: false
    }]
  });
});
