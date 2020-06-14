import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bar from "./components/Bar";
import VerticalMenu from "./components/VerticalMenu";
import UserProject from "./components/userProjects";
import ProjectProfile from "./components/ProjectProfile";
import LandingPage from "./components/LandingPage";
import Forms from "./components/Forms";
import ProjectsMap from "./components/projectsMap";

function App() {
  const [isAddMenuState, setIsAddMenuState] = useState(false);
  const [state, setState] = useState({
    columns: [
      { title: "Category", field: "category" },
      { title: "Name", field: "name" },
      { title: "Owner", field: "owner" },
      { title: "Manager", field: "manager" },
      { title: "Status", field: "status" },
      { title: "Start Date", field: "start_date", type: "date" },
      { title: "End Date", field: "end_date", type: "date" },
    ],
    data: [],
    project: [],
  });

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
        <Route path="/menna" render={() => <Forms></Forms>}></Route>

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
