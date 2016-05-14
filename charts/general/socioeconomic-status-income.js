$(function() {
  $("[id='income-status']").highcharts({
    colors: [ '#BBB', '#999', '#777', '#555', '#333'],
    title: {
      text: ''
    },
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
      categories: ['$250,000 or more', '$150,000 to $24,999', '$100,000 to $149,999','$60,000 to $99,999','$35,000 to $59,999','$34,999 or less','Unsure'],
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    series: [{
      name: 'Upper class',
      data: [209, 20, 2, 1, 0, 1, 29]
    }, {
      name: 'Upper-middle class',
      data: [137, 100, 47, 10, 1, 3, 104]
    }, {
      name: 'Middle class',
      data: [8, 12, 55, 37, 6, 5, 50]
    }, {
      name: 'Lower-middle class',
      data: [1, 0, 1, 9, 26, 15, 10]
    }, {
      name: 'Lower class',
      data: [0, 0, 1, 1, 4, 15, 3]
    }]
  });
});
