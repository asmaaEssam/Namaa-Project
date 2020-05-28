import React, {useState} from 'react';

import Bar from './components/Bar'
import VerticalMenu from './components/VerticalMenu'

function App() {

  const [isAddMenuState, setIsAddMenuState] = useState(false);

  function triggerAddMenuState() {
    setIsAddMenuState(!isAddMenuState)
  };

  return (
    <div className="App">
      <Bar addMenu = {triggerAddMenuState}/>
      {isAddMenuState && <VerticalMenu/>}
    </div>
  );
}

export default App;
