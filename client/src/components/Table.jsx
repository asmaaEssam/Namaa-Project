import React, {useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'

export default function MaterialTableDemo() {

  const [state, setState] = useState({
    columns: [],
    data: [
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        '/projects/',
      );
      setState({columns: [
        { title: 'Category', field: 'category' },
        { title: 'Name', field: 'name' },
        { title: 'Owner', field: 'owner' },
        { title: 'Manager', field: 'manager' },
        { title: 'Status', field: 'status' },
        { title: 'Start Date', field: 'start_date', type: 'date' },
        { title: 'End Date', field: 'end_date', type:'date' },
      ],
    data: result.data});
    };
 
    fetchData();
  }, []);

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
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            },10000 );
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
            }, 600);
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