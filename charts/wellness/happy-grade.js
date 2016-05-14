$(function() {
  $("[id='happy-grade']").highcharts({
    colors: ['#555','#777'],
    title: {
      // text: 'Happy Grade'
    },
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['2016', '2017', '2018', '2019'],
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    plotOptions: {
      series: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Generally happy at Andover',
      data: [175, 166, 216, 176]
    }, {
      name: 'Generally not happy at Andover',
      data: [52, 66, 47, 25]
    }]
  });
});
