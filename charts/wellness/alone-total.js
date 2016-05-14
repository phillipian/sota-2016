$(function() {
  $("[id='alone-total']").highcharts({
    colors: ['#BBB', '#999', '#777', '#555', '#333'],
    title: {
      // text: 'Feel Alone Total'
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['Always', 'Regularly', 'Sometimes', 'Never'],
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
      data: [['Always', 33], ['Regularly', 165], ['Sometimes', 516], ['Never', 209]],
      showInLegend: false
    }]
  });
});
