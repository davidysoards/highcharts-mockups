import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HCReact from 'highcharts-react-official';
import './themes/custom';

Highcharts.setOptions(Highcharts.theme);

const App = () => {
  //=STATE HOOKS
  const [incomeShortfallOptions, setIncomeShortfall] = useState({});
  const [shortfallAmountOptions, setShortfallAmount] = useState({});
  const [bondPorfolioOptions, setBondPortfolio] = useState({});

  useEffect(() => {
    setIncomeShortfall({
      chart: {
        type: 'pie',
        style: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
      },
      title: {
        text: 'Income Shortfall',
      },
      subtitle: {
        text: '% of Trials',
      },
      tooltip: {},
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {},
          showInLegend: true,
        },
      },
      series: [
        {
          innerSize: '60%',
          name: '# of trials',
          data: [
            {
              name: 'Income Shortfall',
              y: 247,
            },
            {
              name: 'Income Met',
              y: 3,
              sliced: true,
              selected: true,
            },
          ],
        },
      ],
    });

    setShortfallAmount({
      chart: {
        type: 'column',
        style: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
      },
      title: {
        text: 'Shortfall Amount',
      },
      subtitle: {
        text: '% of Total Income Payments',
      },

      xAxis: {
        name: 'Amount Short',
        categories: [
          '<5%',
          '5 - 10%',
          '10 - 15%',
          '15 - 20%',
          '20 - 25%',
          '>25%',
        ],
      },
      yAxis: {
        title: {
          text: '# of payments short',
        },
      },
      tooltip: {
        headerFormat:
          '<span style="font-size:10px">Amount Short: {point.key}</span><table>',
        pointFormat:
          '<tr><td><span style="color:{point.color}">\u25CF</span> {series.name}: </td>' +
          '<td><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Short Payments',
          showInLegend: false,
          data: [7, 14, 38, 95, 95, 1],
        },
      ],
    });

    setBondPortfolio({
      chart: {
        type: 'column',
        style: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
      },
      title: {
        text: 'Bond Portfolio Income Sources',
      },
      subtitle: {
        text: 'by Year',
      },
      xAxis: {
        // type: 'datetime',
        min: 1,
        crosshair: true,
      },
      yAxis: {
        min: -5000,
        max: 20000,
        title: {
          text: '',
        },
      },
      tooltip: {
        headerFormat:
          '<span style="font-size:10px">Year {point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Coupon Income (after tax)',
          data: [
            null,
            11811,
            11707,
            11636,
            11779,
            11789,
            11647,
            11636,
            11458,
            10933,
            10056,
          ],
        },
        {
          name: 'Net Principle Maturity',
          data: [
            null,
            17878,
            18004,
            18100,
            17983,
            18000,
            18172,
            18214,
            18426,
            18987,
            19903,
          ],
        },
        {
          name: 'Principle Sold to Meet Income Need',
          data: [null, 0, 0, 0, 0, 0, 0, -189, -1020, -2196, -4054],
        },
      ],
    });
  }, []);

  return (
    <div id="app">
      <div className="grid">
        <div className="grid_item-1">
          <h1>SPIA Charts</h1>
        </div>
        <div className="grid_item-2">
          <HCReact highcharts={Highcharts} options={incomeShortfallOptions} />
        </div>
        <div className="grid_item-3">
          <HCReact highcharts={Highcharts} options={shortfallAmountOptions} />
        </div>
        <div className="grid_item-4">
          <HCReact highcharts={Highcharts} options={bondPorfolioOptions} />
        </div>
      </div>
    </div>
  );
};

export default App;

/*=============================================================================================================*/
// import React, { Component } from 'react';
// import Highcharts from 'highcharts';
// import HCReact from 'highcharts-react-official';
// import './themes/custom';

// Highcharts.setOptions(Highcharts.theme);

// export default class App extends Component {
//   state = {
//     incomeShortfallOptions: {
//       chart: {
//         type: 'pie',
//         style: {
//           fontFamily:
//             '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
//         },
//       },
//       title: {
//         text: 'Income Shortfall',
//       },
//       subtitle: {
//         text: '% of Trials',
//       },
//       tooltip: {},
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {},
//           showInLegend: true,
//         },
//       },
//       series: [
//         {
//           innerSize: '60%',
//           name: '# of trials',
//           data: [
//             {
//               name: 'Income Shortfall',
//               y: 247,
//             },
//             {
//               name: 'Income Met',
//               y: 3,
//               sliced: true,
//               selected: true,
//             },
//           ],
//         },
//       ],
//     },

//     shortfallAmountOptions: {
//       chart: {
//         type: 'column',
//         style: {
//           fontFamily:
//             '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
//         },
//       },
//       title: {
//         text: 'Shortfall Amount',
//       },
//       subtitle: {
//         text: '% of Total Income Payments',
//       },

//       xAxis: {
//         name: 'Amount Short',
//         categories: [
//           '<5%',
//           '5 - 10%',
//           '10 - 15%',
//           '15 - 20%',
//           '20 - 25%',
//           '>25%',
//         ],
//       },
//       yAxis: {
//         title: {
//           text: '# of payments short',
//         },
//       },
//       tooltip: {
//         headerFormat:
//           '<span style="font-size:10px">Amount Short: {point.key}</span><table>',
//         pointFormat:
//           '<tr><td><span style="color:{point.color}">\u25CF</span> {series.name}: </td>' +
//           '<td><b>{point.y}</b></td></tr>',
//         footerFormat: '</table>',
//         shared: true,
//         useHTML: true,
//       },
//       series: [
//         {
//           name: 'Short Payments',
//           showInLegend: false,
//           data: [7, 14, 38, 95, 95, 1],
//         },
//       ],
//     },

//     bondPorfolioOptions: {
//       chart: {
//         type: 'column',
//         style: {
//           fontFamily:
//             '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
//         },
//       },
//       title: {
//         text: 'Bond Portfolio Income Sources',
//       },
//       subtitle: {
//         text: 'by Year',
//       },
//       xAxis: {
//         // type: 'datetime',
//         min: 1,
//         crosshair: true,
//       },
//       yAxis: {
//         min: -5000,
//         max: 20000,
//         title: {
//           text: '',
//         },
//       },
//       tooltip: {
//         headerFormat:
//           '<span style="font-size:10px">Year {point.key}</span><table>',
//         pointFormat:
//           '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//           '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//         footerFormat: '</table>',
//         shared: true,
//         useHTML: true,
//       },
//       plotOptions: {
//         column: {
//           pointPadding: 0.2,
//           borderWidth: 0,
//         },
//       },
//       series: [
//         {
//           name: 'Coupon Income (after tax)',
//           data: [
//             null,
//             11811,
//             11707,
//             11636,
//             11779,
//             11789,
//             11647,
//             11636,
//             11458,
//             10933,
//             10056,
//           ],
//         },
//         {
//           name: 'Net Principle Maturity',
//           data: [
//             null,
//             17878,
//             18004,
//             18100,
//             17983,
//             18000,
//             18172,
//             18214,
//             18426,
//             18987,
//             19903,
//           ],
//         },
//         {
//           name: 'Principle Sold to Meet Income Need',
//           data: [null, 0, 0, 0, 0, 0, 0, -189, -1020, -2196, -4054],
//         },
//       ],
//     },
//   };

//   render() {
//     const {
//       incomeShortfallOptions,
//       shortfallAmountOptions,
//       bondPorfolioOptions,
//     } = this.state;
//     return (
//       <div id="app" className="grid">
//         <div className="grid_item-1">
//           <h1>SPIA Charts</h1>
//         </div>
//         <div className="grid_item-2">
//           <HCReact highcharts={Highcharts} options={incomeShortfallOptions} />
//         </div>
//         <div className="grid_item-3">
//           <HCReact highcharts={Highcharts} options={shortfallAmountOptions} />
//         </div>
//         <div className="grid_item-4">
//           <HCReact highcharts={Highcharts} options={bondPorfolioOptions} />
//         </div>
//       </div>
//     );
//   }
// }
