$(function() {
  $("[id='sexual-activity-consent']").highcharts({
    title: {
      // text: 'Sexual Activity vs. Consent'
    },
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent'
      }
    },
    xAxis: {
      categories: ['Digital', 'Oral', 'Anal', 'Vaginal']
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    series: [{
      name: 'Consistently asks for consent',
      data: [236, 230, 27, 158]
    }, {
      name: 'Does not Consistently asks for consent',
      data: [98, 102, 11, 63]
    }
  ]
  });
});
