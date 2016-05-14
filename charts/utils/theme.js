Highcharts.theme = {
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
