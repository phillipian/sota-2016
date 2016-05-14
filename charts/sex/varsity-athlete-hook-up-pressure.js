$(function() {
  $("[id='varsity-athlete-hook-up-pressure']").highcharts({
    title: {
      // text: 'Hook Up Pressure vs. Varsity Athlete'
    },
    chart: {
      type: 'column'
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
    plotOptions: {
      series: {
        stacking: 'normal'
      }
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
