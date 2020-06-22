import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import '../assets/css/dashboard.css'
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts";

import DashboardMap from '../components/Map';
import Chart from '../components/chart';
import Donut from "../components/PieChart";
import RadialChart from "../components/RadialChart";
import SplineArea from "../components/splineArea";
import PieWithImage from "../components/pieWithImage";

class Dashboard extends React.Component {

    state = {
      bigChartData: "data1",
      geojson: {
        type:"FeatureCollection", features: [
          {type:"Feature",geometry:{type:"Point",coordinates:[31.613116,30.089831]},properties:{"FID_1":"04bbb223d23feaa00d3676bd025ff2c5",stop_name:"station_0",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:40,Remain_lif:0,Asset_age:20}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.64279,30.102447]},properties:{"FID_1":"06280b61e938ec0849934806d32cadc7",stop_name:"station_1",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:60,Remain_lif:0,Asset_age:10}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.608155,30.091189]},properties:{"FID_1":"103fbd54bb3c9a2034cbe4a4a331b5de",stop_name:"station_2",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:55,Remain_lif:0,Asset_age:15}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.620251,30.094267]},properties:{"FID_1":"1d5a69a464237a47cbd3260dbe79e318",stop_name:"station_3",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:70,Remain_lif:0,Asset_age:13}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.617331,30.096614]},properties:{"FID_1":"2134b9d12b3182c452bcf19b2eb8a772",stop_name:"station_4",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:72,Remain_lif:0,Asset_age:12}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.615583,30.087506]},properties:{"FID_1":"2367e3c2ff20cb6f08543e011eed741d",stop_name:"station_5",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:75,Remain_lif:0,Asset_age:11}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.623564,30.093979]},properties:{"FID_1":"2a240bed8275e32dc76164e9c37cd071",stop_name:"station_6",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:65,Remain_lif:0,Asset_age:16}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.61653,30.090606]},properties:{"FID_1":"2c0e13cb39fb227e9d4058fc6949412f",stop_name:"station_7",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:80,Remain_lif:0,Asset_age:8}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.623411,30.083127]},properties:{"FID_1":"32c5bbbaf1148a7c7b67237deaf9d804",stop_name:"station_8",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:85,Remain_lif:0,Asset_age:5}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.627998,30.090624]},properties:{"FID_1":"3a08ac67cfaf7ede11c9ed231c8f8ead",stop_name:"station_9",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:83,Remain_lif:0,Asset_age:4}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.635987,30.107084]},properties:{"FID_1":"3a7c14c2bdb3cfcda56645a2dbecea1f",stop_name:"station_10",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:82,Remain_lif:0,Asset_age:7}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.626091,30.098112]},properties:{"FID_1":"3f8fbc9a62bdfeae91bd3559229a834f",stop_name:"station_11",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:80,Remain_lif:0,Asset_age:6}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.6183,30.083261]},properties:{"FID_1":"43331a7fe428d896d0baf5597fce4efc",stop_name:"station_12",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:85,Remain_lif:0,Asset_age:7}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.622655,30.088527]},properties:{"FID_1":"438f3ffac66724306ad781eb5e3cf964",stop_name:"station_13",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:64,Remain_lif:0,Asset_age:12}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.635594,30.0911]},properties:{"FID_1":"48b479094eeca9d90c8c3c4e75630218",stop_name:"station_14",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:50,Remain_lif:0,Asset_age:15}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.617515,30.100282]},properties:{"FID_1":"4959ac919ee3d38192d71baa5f1c697d",stop_name:"station_15",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:70,Remain_lif:0,Asset_age:9}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.628978,30.095067]},properties:{"FID_1":"5dd51f27e676636d3963ca637e22ac57",stop_name:"station_16",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:76,Remain_lif:0,Asset_age:8}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.618683,30.104726]},properties:{"FID_1":"5f4eaddf080cad1d1cf0f3f8ea2cbe80",stop_name:"station_17",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:73,Remain_lif:0,Asset_age:10}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.638853,30.085857]},properties:{"FID_1":"640b5cb0b8bdca2064f7f931c16b6449",stop_name:"station_18",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:69,Remain_lif:0,Asset_age:15}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.616878,30.085699]},properties:{"FID_1":"67f890d45726167391495ad35a61d0b9",stop_name:"station_19",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:54,Remain_lif:0,Asset_age:14}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.647773,30.083396]},properties:{"FID_1":"775aa0682e9478c7386c432a29075446",stop_name:"station_20",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:45,Remain_lif:0,Asset_age:17}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.621693,30.092068]},properties:{"FID_1":"7ded044098f80a81a727304958ff5fbf",stop_name:"station_21",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:42,Remain_lif:0,Asset_age:19}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.621763,30.080923]},properties:{"FID_1":"8ef1c5e514a6aa262ddcc9a7b0200c85",stop_name:"station_22",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:89,Remain_lif:0,Asset_age:8}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.638805,30.096755]},properties:{"FID_1":"93113862987392746a50ac01c93cd52b",stop_name:"station_23",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:78,Remain_lif:0,Asset_age:9}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.621192,30.084246]},properties:{"FID_1":"93a561ec3690ce6ad7cd386d6b4ed273",stop_name:"station_24",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:90,Remain_lif:0,Asset_age:5}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.62917,30.093493]},properties:{"FID_1":"9ef5177832eb3f63040dcc4e486b228a",stop_name:"station_25",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:68,Remain_lif:0,Asset_age:10}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.629975,30.089217]},properties:{"FID_1":"a0d170c3b5c76c1e3bf184947d71f665",stop_name:"station_26",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:62,Remain_lif:0,Asset_age:12}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.620604,30.100143]},properties:{"FID_1":"aeaaf0bc06b718fbe7add1dbf4c16bd2",stop_name:"station_27",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:84,Remain_lif:0,Asset_age:7}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.614039,30.09856]},properties:{"FID_1":"b82946a79ad8f3fa3217f36350e873b5",stop_name:"station_28",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:74,Remain_lif:0,Asset_age:9}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.61152,30.097519]},properties:{"FID_1":"bbcaa9db28a7d1399ace257721df1a12",stop_name:"station_29",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:59,Remain_lif:0,Asset_age:11}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.616401,30.081278]},properties:{"FID_1":"d0249c25b3085d7fa48450eec716f1dd",stop_name:"station_30",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:74,Remain_lif:0,Asset_age:8}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.609747,30.084932]},properties:{"FID_1":"d4009f43c7103c2bfd4d5982ffbd9202",stop_name:"station_31",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:87,Remain_lif:0,Asset_age:5}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.644103,30.106307]},properties:{"FID_1":"d4d5db5befb145c8f259b30537cf989e",stop_name:"station_32",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:76,Remain_lif:0,Asset_age:9}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.62931,30.085833]},properties:{"FID_1":"d9c8b30b4689a2e7c2acbb9fff2f083b",stop_name:"station_33",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:67,Remain_lif:0,Asset_age:12}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.624795,30.093254]},properties:{"FID_1":"dcd82f60a0a381b5ad06ffb274ae3c7c",stop_name:"station_34",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:66,Remain_lif:0,Asset_age:11}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.614153,30.099484]},properties:{"FID_1":"dda54258c2786af6cdd1b882b83894f6",stop_name:"station_35",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:54,Remain_lif:0,Asset_age:15}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.627687,30.096975]},properties:{"FID_1":"e9ddd13fd769a4fa3b3925e6f6980509",stop_name:"station_36",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:33,Remain_lif:0,Asset_age:18}},
          {type:"Feature",geometry:{type:"Point",coordinates:[31.626272,30.083258]},properties:{"FID_1":"f3b9133695bfe861b1e3a9b77b4e75e6",stop_name:"station_37",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z","ACR_distri":0,Oper_statu:0,general_co:34,Remain_lif:0,Asset_age:14}}
          ]
      },
      series: {},
      performance: 0
  }

  componentWillMount(){
    const series = this.state.geojson.features.map(f=> f.properties.Overall_ra);
    const computedSeries = {};
    for (let index = 0; index < series.length; index++) {
      let key = series[index];
      if(computedSeries.hasOwnProperty(key))
      {
        computedSeries[key] +=1;
      }else {
        computedSeries[key] = 1;
      }
    }
    const generalCondition = this.state.geojson.features.map(f=> f.properties.general_co);
    const performance = generalCondition.reduce(function(a,b){
      return a+b
    },0);
    this.setState ({
      series : computedSeries,
      performance : performance/(generalCondition.length*100) * 100
    })
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <div id= 'dashboard'>
          <Row>
          <Col lg="3">
          <Card >
              <CardBody>
                <Donut series= {this.state.series} />
              </CardBody>
          </Card>
          <Card >
              <CardBody>
                <RadialChart overallPerformance = {this.state.performance} />
                <h4 style= {{textAlign: 'center', color: "#1E80FF",alignSelf: 'center'}}>Performance</h4>
              </CardBody>
              </Card>
          </Col>
          <Col lg="6">
              <Card className="card-chart" id= "map">
              <CardBody>
                <DashboardMap/>
              </CardBody>
              </Card>
          </Col>
          <Col lg="3">
              <Card className="card-chart">
                <CardBody>
                  <h4 style={{textAlign:'center'}}><i className="tim-icons icon-delivery-fast text-primary" />{" "}Customer Satisfication</h4>
                  <h3 style={{textAlign:'center', color: "#e14eca"}}>75 %</h3>
                </CardBody>
              </Card>
              <Card className="card-chart">
                <CardBody>
                 <PieWithImage/>
                </CardBody>
              </Card>
          </Col>
          </Row>
          <Row>
            <Col lg= '6'>
            <Card className="card-chart" id= "map">
              <CardBody>
              <SplineArea assetName = {this.state.geojson.features.map(f=>f.properties.stop_name)} />
              </CardBody>
              </Card>
            </Col>
            <Col lg= '6'>
            <Card className="card-chart">
                <CardHeader>
                  {/* <h5 className="card-category">Performance</h5> */}
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Dashboard;
