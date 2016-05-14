/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='dorm-searches-major-offense']").highcharts({
    colors: ['#999', '#777', '#555', '#333'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Should be able to search dorms', 'Shouldn\'t be able to search dorms'],
    },
    series: [{
      name: 'Has committed major offense',
      data: [167, 287]
    }, {
      name: 'Has not committed major offense',
      data: [292, 177]
    }]
  });
});
