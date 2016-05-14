$(function() {
  $("[id='boarder-day-student-alcohol']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: ['Boarder', 'Day Student'],
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    series: [{
      name: 'Have consumed alcohol',
      data: [437, 124]
    }, {
      name: 'Have not consumed alcohol',
      data: [231, 131]
    }]
  });
});
