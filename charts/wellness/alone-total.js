$(function() {
  $("[id='alone-total']").highcharts({
    colors: ['#BBB', '#999', '#777', '#555', '#333'],
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    xAxis: {
      categories: ['Always', 'Regularly', 'Sometimes', 'Never'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Always', 33],
        ['Regularly', 165],
        ['Sometimes', 516],
        ['Never', 209]
      ],
      showInLegend: false
    }]
  });
});
