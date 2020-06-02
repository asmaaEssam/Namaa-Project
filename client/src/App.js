import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bar from "./components/Bar";
import VerticalMenu from "./components/VerticalMenu";
import UserProject from "./components/userProjects";
import ProjectProfile from './components/ProjectProfile'

function App() {
  const [isAddMenuState, setIsAddMenuState] = useState(false);
  const [state, setState] = useState({
    columns: [{ title: 'Category', field: 'category' },
    { title: 'Name', field: 'name' },
    { title: 'Owner', field: 'owner' },
    { title: 'Manager', field: 'manager' },
    { title: 'Status', field: 'status' },
    { title: 'Start Date', field: 'start_date', type: 'date' },
    { title: 'End Date', field: 'end_date', type:'date' },
],
    data: [
    ],
    project :[]
  });

  function triggerAddMenuState() {
    setIsAddMenuState(!isAddMenuState);
  }

  return (
    <BrowserRouter>
      <Switch>
    <div className="App">
    <Route
          path={"/dataEntry"}
          render={() => <UserProject></UserProject>}
        />
      <Route exact path='/' render={props =>
        <>
        <Bar addMenu = {triggerAddMenuState}/>
        {isAddMenuState && <VerticalMenu state={state} setState={setState} />}
        </>
        } />
      <Route path='/project/:projectid' component= {ProjectProfile}/>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
