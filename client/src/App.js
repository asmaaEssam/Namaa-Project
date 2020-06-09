import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bar from "./components/Bar";
import VerticalMenu from "./components/VerticalMenu";
// import UserProject from "./components/userProjects";
import ProjectsMap from "./components/projectsMap";
import LandingPage from "./components/LandingPage";
function App() {
  const [isAddMenuState, setIsAddMenuState] = useState(false);

  function triggerAddMenuState() {
    setIsAddMenuState(!isAddMenuState);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/dataEntry"}
          render={() => <ProjectsMap></ProjectsMap>}
        ></Route>
        <Route
          path="/landing"
          render={() => <LandingPage></LandingPage>}
        ></Route>

        <Route
          path={"/"}
          render={() => (
            <div className="App">
              <Bar addMenu={triggerAddMenuState} />

              {isAddMenuState && <VerticalMenu />}
            </div>
          )}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
