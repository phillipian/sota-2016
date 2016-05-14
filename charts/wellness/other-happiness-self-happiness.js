$(function() {
  $("[id='other-happiness-self-happiness']").highcharts({
    title: {
      // text: 'Other\'s Happiness vs. Self Happiness'
    },
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Thinks others are generally happy at Andover', 'Doesn\'t think others are generally happy at Andover'],
    },
    tooltip: {
      // formatter: barTooltipFormatter
    },
    // plotOptions: {
    //   series: {
    //     stacking: 'normal'
    //   }
    // },
    series: [{
      name: 'Generally happy at Andover',
      data: [507, 226]
    }, {
      name: 'Not generally happy at Andover',
      data: [60, 130]
    }]
  });
});
