import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import classNames from "classnames";


// reactstrap components
import {
  Button,
  ButtonGroup,
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

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
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
          <Col lg="4">
            <Donut/>
              {/* <Chart chartExample= {chartExample1[this.state.bigChartData]} bigChartData={this.state.bigChartData} setBgChartData= {this.setBgChartData} /> */}
          </Col>
          <Col lg="4">
              <Card className="card-chart">
              <CardBody>
                <DashboardMap/>
              </CardBody>
              </Card>
          </Col>
          <Col lg="4">
            <RadialChart/>
          {/* <Chart chartExample= {chartExample2.data} bigChartData={this.state.bigChartData} setBgChartData= {this.setBgChartData} /> */}
          </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Shipments</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Daily Sales</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500€
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
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Completed Tasks</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
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
