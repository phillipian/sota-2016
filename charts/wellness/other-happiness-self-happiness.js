$(function() {
  $("[id='other-happiness-self-happiness']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Thinks others are generally happy at Andover', 'Doesn\'t think others are generally happy at Andover'],
    },
    series: [{
      name: 'Generally happy at Andover',
      data: [507, 226]
    }, {
      name: 'Not generally happy at Andover',
      data: [60, 130]
    }]
  });
});
