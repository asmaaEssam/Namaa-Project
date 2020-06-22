import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const SplineArea =(props)=> {
    const [state,setState] = useState(
        {
      
            series: [{
              name: 'factor 1',
              data: [31, 40, 28, 51, 42, 109, 100,31, 40, 28, 51, 42, 109, 100,31, 40, 28, 51, 42, 109, 100,31, 40, 28, 51, 42, 109, 100,31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'factor 2',
              data: [11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41]
            },{
                name: 'factor 3',
                data: [31, 40, 38, 21, 32, 90, 80,31, 40, 38, 21, 32, 90, 80,31, 40, 38, 21, 32, 90, 80,31, 40, 38, 21, 32, 90, 80,31, 40, 38, 21, 32, 90, 80]
              }, {
                name: 'factor 4',
                data: [11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41,11, 32, 45, 32, 34, 52, 41]
              }],
            options: {
              chart: {
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              yaxis:{
                  labels:{
                    style: {
                        colors: "#9e9e9e",
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    }
                  }
              },
              xaxis: {
                type: 'string',
                categories: props.assetName,
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 120,
                    style: {
                        colors: "#9e9e9e",
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        cssClass: 'apexcharts-xaxis-label',
                    }
                },
              },
              
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    offsetX: 0,
    offsetY: 0,
    labels: {
        colors: ["#9e9e9e"],
        useSeriesColors: false
    },
    markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
        horizontal: 5,
        vertical: 0
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    },
}

            }
        })

        return (
            <div id="chart">
            <Chart options={state.options} series={state.series} type="area" height={265} />
            </div>
        )
}


export default SplineArea;