import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const PieWithImage =(props)=> {
    const [state,setState] = useState( {
      
        series: [44, 33, 54],
        options: {
          chart: {
            width: 130,
            type: 'pie',
          },
          colors: [ '#E5C6A0', '#669DB5', '#94A74A'],
          fill: {
            type: 'image',
            opacity: 0.85,
            image: {
               src: ['../assets/img/inuse.jpg','../assets/img/ryan.jpg','../assets/img/julie.jpeg'],
              width: 25,
              imagedHeight: 25
            },
          },
          stroke: {
            width: 4
          },
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 170
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      })

      return (
        

        <div id="chart">
      <Chart options={state.options} series={state.series} type="pie" />
      </div>
      
      
            );
          }

export default PieWithImage;