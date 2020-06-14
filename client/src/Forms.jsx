import React from "react";
import Maps from "./maps";
import "./index.css";
import confirm from "reactstrap-confirm";

import { FormGroup, Label, Input, Button, Card, CardBody } from "reactstrap";
import axios from "axios";
const Forms = () => {
  var state = {};
  var emptyInput=[];
  
  const inputHandler = (event) => {
    state[event.target.name] = event.target.value;
    emptyInput.push (event.target)

  };

const clearState= ()=>{
  emptyInput.map( x => x.value="" )

}
  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await confirm({
      message: "Are you sure you want to add this data?"
    });
    console.log(result);
    await axios
      .post("http://localhost:200/footpath/add", state)
      .then(() => {
        //console.log(res.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
      clearState()
  };

  return (
    <>
      <div className="container">
        <div className="mapboxgl-canvas">
          <Maps />
        </div>
        <div className="input">
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <FormGroup className="col-md-4">
                    <Label for="assetname">Asset Name</Label>
                    <Input
                      type="text"
                      placeholder="Asset Name"
                      id="assetname"
                      name="assetname"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Label for="surveyorname">Employee Name</Label>
                    <Input
                      type="text"
                      placeholder="Employee Name"
                      id="surveyorname"
                      name="surveyorname"
                      value={state.surveyorname}
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="dateofsurvey">Date of survey</Label>
                    <Input
                      type="date"
                      name="dateofsurvey"
                      id="dateofsurvey"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-4">
                    <Label for="cracks">Cracks</Label>
                    <Input
                      type="text"
                      name="cracks"
                      id="cracks"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Label for="pothole">Potehole condition</Label>
                    <Input
                      type="text"
                      name="pothole"
                      id="pothole"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Label for="erosion">Erosion </Label>
                    <Input
                      type="text"
                      name="erosion"
                      id="erosion"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup className="col-md-5">
                    <Label for="slipperySurface">Slippery Surface</Label>
                    <Input
                      type="text"
                      name="slipperySurface"
                      id="slipperySurface"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-5">
                    <Label for="fallenBranches">
                      Fallen Branches percentage
                    </Label>
                    <Input
                      type="text"
                      name="fallenBranches"
                      id="fallenBranches"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-5">
                    <Label for="QualityOfCurbing">Quality of curbing</Label>
                    <Input
                      type="text"
                      name="fallenBranches"
                      id="fallenBranches"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <div className="form-row">
                    <FormGroup className="col-md-5">
                      <Label for="degreeOfCleanliness">
                        Degree of cleanliness
                      </Label>
                      <Input
                        type="text"
                        name="degreeOfCleanliness"
                        id="degreeOfCleanliness"
                        onChange={inputHandler}
                      />
                    </FormGroup>

                    <FormGroup className="col-md-5">
                      <Label for="conditionofDrains">Condition of drains</Label>
                      <Input
                        type="text"
                        name="conditionofDrains"
                        id="conditionofDrains"
                        onChange={inputHandler}
                      />
                    </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-5">
                      <Label for="pedestrians_Sainage_Condition">
                        Condition of sainage
                      </Label>
                      <Input
                        type="text"
                        name="pedestrians_Sainage_Condition"
                        id="pedestrians_Sainage_Condition"
                        onChange={inputHandler}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-5">
                      <Label for="generalCondition">General Condition</Label>
                      <Input
                        type="text"
                        name="generalCondition"
                        id="generalCondition"
                        onChange={inputHandler}
                      />
                    </FormGroup>
                  </div>
                </div>
                <Button type="submit" color="primary">
                  Add
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Forms;




 
