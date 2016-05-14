$(function() {
  $("[id='body-image-gender']").highcharts({
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
      categories: ['Agender', 'Gender fluid', 'Genderqueer', 'Man', 'Nonbinary', 'Woman']
    },
    series: [{
      name: 'Yes, always',
      data: [1, 1, 0, 25, 2, 83]
    }, {
      name: 'Yes, regularly',
      data: [3, 0, 1, 48, 2, 146]
    }, {
      name: 'Yes, sometimes',
      data: [0, 0, 1, 161, 5, 198]
    }, {
      name: 'No',
      data: [1, 1, 0, 191, 0, 53]
    }]
  });
});
