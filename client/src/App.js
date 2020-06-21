import React, { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Bar from "./components/Bar";
import VerticalMenu from "./components/VerticalMenu";
import "./index.css";
import Forms from "./Forms";
function App() {
  const [isAddMenuState, setIsAddMenuState] = useState(false);

  function triggerAddMenuState() {
    setIsAddMenuState(!isAddMenuState);
  }

  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          {/* <Route
            path={"/dataEntry"}
            render={() => <UserProject></UserProject>}
          /> */}
          <Route path="/forms" render={() => <Forms></Forms>} />
          {/* <Route exact path='/' render={props =>
        <>
        <Bar addMenu = {triggerAddMenuState}/>
        {isAddMenuState && <VerticalMenu state={state} setState={setState} />}
        </>
        } /> */}
          {/* <Route path="/project/:projectid" component={ProjectProfile} /> */}
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
