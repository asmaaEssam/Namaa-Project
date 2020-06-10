import React, { useState, useEffect } from "react";
import Maps from './maps';
import './index.css';
import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";
import axios from 'axios'
const Forms = () => {
  
  const [state, setState] = useState({
  assetname:"",
  surveyorname:""
  });

 
  //  async function addUser (newuser){
  //    await axios.post( 
  //     'http://localhost:200/footpath/add',newuser
  //   ) .then((res) => {
  //                 console.log(res.data)
  //             }).catch((error) => {
  //                 console.log(error)
  //             });
              
  //           }
            
  const inputHandler= (event)=>{
    const newstate = {[event.target.name]:event.target.value}
    setState({...state,...newstate})
     }

     const handleSubmit= async(event,newdata)=>{
       event.preventDefault()
       const result= await axios.post( 
        'http://localhost:200/footpath/add',newdata
      ) .then((res) => {
                    console.log(res.data)
                }).catch((error) => {
                    console.log(error)
                });
                setState({})
     }

  return (
    <>
    <div className="container">
    <div className="mapboxgl-canvas" >
        <Maps/>
      </div>
      <div className="input">
    <Card>
        <CardBody>
      <form onSubmit={handleSubmit} >
        <div className="form-row">
          <FormGroup className="col-md-4">
            <Label for="assetname">Asset Name</Label>
            <Input type="text" placeholder="Asset Name"  id="assetname" name="assetname" value={state.assetname} onChange={inputHandler}/>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="surveyorname">Employee Name</Label>
            <Input type="text"  placeholder="Employee Name" id="surveyorname" name="surveyorname" onChange={inputHandler} value={state.surveyorname}/>
          </FormGroup>
          <FormGroup >
          <Label for="dateofsurvey">Date of survey</Label>
          <Input type="date" name="dateofsurvey" id="dateofsurvey" />
        </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-md-4">
            <Label for="cracks">Cracks</Label>
            <Input type="text" name="cracks"  id="cracks"/>
          </FormGroup>
          <FormGroup className="col-md-4">
          <Label for="pothole">Potehole condition</Label>
          <Input type="text" name="pothole" id="pothole" />
        </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="erosion">Erosion </Label>
            <Input type="text" name="erosion"   id="erosion" />
          </FormGroup>
        </div>
        <div>
        <FormGroup className="col-md-5">
            <Label for="slipperySurface">Slippery Surface</Label>
            <Input type="text" name="slipperySurface" id="slipperySurface" />
          </FormGroup>
          <FormGroup className="col-md-5">
            <Label for="fallenBranches">Fallen Branches percentage</Label>
            <Input type="text" name="fallenBranches" id="fallenBranches" />
          </FormGroup>
          <FormGroup className="col-md-5">
            <Label for="QualityOfCurbing">Quality of curbing</Label>
            <Input type="text" name="fallenBranches" id="fallenBranches"/>
          </FormGroup>
          <div className="form-row">
          <FormGroup className="col-md-5">
            <Label for="degreeOfCleanliness">Degree of cleanliness</Label>
            <Input type="text" name="degreeOfCleanliness" id="degreeOfCleanliness" />
          </FormGroup>
          
          <FormGroup className="col-md-5">
            <Label for="conditionofDrains">Condition of drains</Label>
            <Input type="text" name="conditionofDrains" id="conditionofDrains" />
          </FormGroup>
          </div>
          <div className="form-row">
          <FormGroup className="col-md-5">
            <Label for="pedestrians_Sainage_Condition">Condition of sainage</Label>
            <Input type="text" name="pedestrians_Sainage_Condition" id="pedestrians_Sainage_Condition" />
          </FormGroup>
          <FormGroup className="col-md-5">
            <Label for="generalCondition">General Condition</Label>
            <Input type="text"  name="generalCondition" id="generalCondition"/>
          </FormGroup>
          </div>
          </div>
        <Button type="submit"   color="primary">Add</Button>
      </form>
      </CardBody>
      </Card>
      </div>
</div>
      
    </>
  );
};

export default Forms;


 
