$(function() {
  $("[id='reverse-racism-political-affiliation']").highcharts({
    title: {
      // text: 'Faculty Diversity vs. Political Affiliation'
    },
    chart: {
      type: 'column'
    },
    // plotOptions: {
    //   series: {
    //     stacking: 'percentage'
    //   }
    // },
    xAxis: {
      categories: ['Reverse racism exists', 'Reverse racism doesn\'t exist'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      name: 'Sec. Hillary Clinton',
      data: [99, 198]
    }, {
      name: 'Sen. Bernie Sanders',
      data: [100, 263]
    }, {
      name: 'Sen. Ted Cruz',
      data: [21, 15]
    }, {
      name: 'Gov. John Kasich',
      data: [93, 73]
    }, {
      name: 'Mr. Donald Trump',
      data: [47, 14]
    }]
  });
});
