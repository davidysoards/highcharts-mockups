/* *
 *
 *  (c) 2010-2019 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  Grid-light theme for Highcharts JS
 *
 * */

import Highcharts from 'highcharts';

Highcharts.theme = {
  colors: [
    '#5BC6E8', //Accent Muted Blue
    '#1C57A5', //Nationwide Blie
    '#58C140', //Accent Green
    '#CBA052', //Medium Yellow
    '#6F5091', //Medium Purple
    '#003B5C', //Dark Blue
    '#BCBDBC', //Cool Gray 4
    '#7B4931', //Dark Orange
    '#30CDD7', //Accent Teal
    '#FDBA2E', //Accent Yellow
    '#9E2A2B', //Medium Red
  ],
  chart: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px;',
    },
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    borderWidth: 0,
    backgroundColor: 'rgba(219,219,216,0.8)',
    shadow: false,
  },
  legend: {
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '13px',
    },
  },
  xAxis: {
    gridLineWidth: 1,
    labels: {
      style: {
        fontSize: '12px',
      },
    },
  },
  yAxis: {
    minorTickInterval: 'auto',
    title: {
      style: {
        textTransform: 'uppercase',
      },
    },
    labels: {
      style: {
        fontSize: '12px',
      },
    },
  },
  plotOptions: {
    candlestick: {
      lineColor: '#404048',
    },
  },
};
