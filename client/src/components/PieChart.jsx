import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const Donut=()=> {
    const [state,setState] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            width: 380,
            type: 'donut',
            // sparkline: { enabled: true }
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
          },
            tooltip: {
            enabled: true,
            }

        //   responsive: [{
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 100
        //       },
        //       legend: {
        //         position: 'bottom'
        //       }
        //     }
        //   }]
        }
    });

    //   useEffect(() => {
    //       const {data}= axios.get('/projects');

    //   }, [])
      return (
        <div className="donut">
          <Chart options={state.options} series={state.series} type="donut" width="380" />
        </div>
      );
}
export default Donut;