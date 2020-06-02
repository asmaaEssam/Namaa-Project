import React, {useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'

export default function MaterialTableDemo() {

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
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        '/projects/',
      );
      setState({columns: state.columns,
    data: result.data});
    };
 
    fetchData();
  }, []);

   async function addProject (newProict){
       console.log("hii y 2lpy")
    const result = await axios.post(
      '/projects/add',newProict
    );
    console.log(result.data)
    setState({columns: state.columns,
  data:[...state.data , result.data]});
  };

  return (
    <MaterialTable
      title="All Projects"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              addProject(newData)
            //   setState((prevState) => {
            //     const data = [...prevState.data];
            //     data.push(newData);
            //     return { ...prevState, data };
            //   });
            },0 );
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 0);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}