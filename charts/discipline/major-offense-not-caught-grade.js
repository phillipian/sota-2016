$(function() {
  $("[id='major-offense-not-caught-grade']").highcharts({
    colors: ['#DDD', '#BBB', '#999', '#777', '#555', '#333'],
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent',
        dataLabels: {
          enabled: false
        }
      }
    },
    xAxis: {
      categories: ['2016', '2017', '2018', '2019'], //, 'Not applicable'
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    series: [{
      name: 'Yes, have gotten away with major offense/I.P. without being caught',
      data: [149, 137, 121, 52]
    }, {
      name: 'No, have not committed a major offense or have bee',
      data: [78, 95, 142, 149]
    }]
  });
});