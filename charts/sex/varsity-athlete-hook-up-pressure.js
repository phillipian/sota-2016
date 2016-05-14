$(function() {
  $("[id='varsity-athlete-hook-up-pressure']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: ['Pressured to participate', 'Not pressured to pariticpate'],
    },
    yAxis: {
      title: {
        text: 'Respondents'
      }
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    series: [{
      name: 'Varsity athletes',
      data: [174, 235]
    }, {
      name: 'Non-varsity athletes',
      data: [167, 347]
    }]
  });
});
