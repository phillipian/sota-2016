$(function() {
  $("[id='college-chances-grade']").highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      // text: 'Do you think attending Andover affects your chances of attending a selective college?'
    },
    xAxis: {
      categories: ['2016', '2017', '2018', '2019'],
    },
    yAxis: {
      title: {
        // text: 'Number of Respondants'
      }
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    plotOptions: {
      series: {
        stacking: 'percentage',
        dataLabels: {
          formatter: function() {
            return Math.round(this.percentage*10)/10 + '%';
          }
        }
      }
    },
    series: [{
      name: 'Negatively',
      data: [96, 102, 105, 52],
      dataLabels: {
          style: {
              color: 'white'
          }
      }
    }, {
      name: 'Positively',
      data: [113, 114, 143, 133]
    }, {
      name: 'None',
      data: [18, 16, 15, 16]
    }]
  });
});
