Highcharts.theme = {
  // colors: ['#FFF', '#DDD', '#BBB', '#999', '#777', '#555', '#333'],
  // colors: ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'],
  colors: ['#333', '#555', '#7777', '#999', '#BBB', '#DDD', '#FFF'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: "'Source Sans Pro', sans-serif"
    }
  },
  plotOptions: {
    series: {
      animation: false,
      dataLabels: {
        enabled: true,
        style: {
          color: 'white',
          textShadow: false
        },
        formatter: dataLabelFormatter
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  title: {
    text: null,
    style: {
      color: 'white'
    }
  },
  subtitle: {
    text: null,
    style: {
      color: 'white'
    }
  },
  xAxis: {
    gridLineColor: 'rgba(255, 255, 255, 0.2)',
    gridLineWidth: 1,
    style: {
      color: 'white'
    },
    title: {
      text: null,
      style: {
        color: 'white'
      }
    },
    labels: {
      style: {
        color: 'white'
      }
    }
  },
  yAxis: {
    gridLineColor: 'rgba(255, 255, 255, 0.2)',
    gridLineWidth: 1,
    reversedStacks: false,
    style: {
      color: 'white'
    },
    title: {
      text: '',
      style: {
        color: 'white'
      }
    },
    labels: {
      style: {
        color: 'white'
      }
    }
  },
  legend: {
    align: 'center',
    // reversed: true,
    itemStyle: {
      color: 'white',
      fontWeight: 'normal'
    },
    verticalAlign: 'bottom',
    backgroundColor: null,
    borderWidth: 0,
    shadow: false
  },
  tooltip: {
    animation: false,
    shadow: false
  },
};

Highcharts.setOptions(Highcharts.theme);
