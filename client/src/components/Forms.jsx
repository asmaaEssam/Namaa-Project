import React from "react";
import confirm from "reactstrap-confirm";
import { FormGroup, Label, Input, Button, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
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
    <div id='xx'>
          <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <h2>
                Feature Data
              </h2>
            </CardHeader>
            <CardBody>
              
                <div className="form-row">
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      placeholder="Asset Name"
                      id="assetname"
                      name="assetname"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      placeholder="Employee Name"
                      id="surveyorname"
                      name="surveyorname"
                      value={state.surveyorname}
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="date"
                      name="dateofsurvey"
                      id="dateofsurvey"
                      onChange={inputHandler}
                      placeholder="Date of survey"
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="cracks"
                      id="cracks"
                      onChange={inputHandler}
                      placeholder="Cracks"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="pothole"
                      id="pothole"
                      onChange={inputHandler}
                      placeholder="Potehole condition"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="erosion"
                      id="erosion"
                      onChange={inputHandler}
                      placeholder="Erosion"
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="slipperySurface"
                      id="slipperySurface"
                      onChange={inputHandler}
                      placeholder="Slippery Surface"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="fallenBranches"
                      id="fallenBranches"
                      onChange={inputHandler}
                      placeholder="Fallen Branches percentage"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="fallenBranches"
                      id="fallenBranches"
                      onChange={inputHandler}
                      placeholder="Quality of curbing"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="degreeOfCleanliness"
                        id="degreeOfCleanliness"
                        onChange={inputHandler}
                      placeholder="Degree of cleanliness"
                      />
                    </FormGroup>

                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="conditionofDrains"
                        id="conditionofDrains"
                        onChange={inputHandler}
                        placeholder="Condition of drains"
                      />
                    </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="pedestrians_Sainage_Condition"
                        id="pedestrians_Sainage_Condition"
                        onChange={inputHandler}
                      placeholder="Condition of sainage"
                      />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="generalCondition"
                        id="generalCondition"
                        onChange={inputHandler}
                      placeholder="General Condition"
                      />
                    </FormGroup>
                  </div>
                
            </CardBody>
            <CardFooter>
            <Button type="submit" color="primary">
                  Add
                </Button>
            </CardFooter>
            </form>
          </Card>
          </div>
  );
};

export default Forms;




 
