import React, {useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'
import TablePagination from 'material-table';
import { useHistory } from "react-router-dom";

export default function MaterialTableDemo(props) {
  
  const {state,setState} = props

  const fetchData = async () => {
    const result = await axios.get(
      'http://localhost:9000/projects/',
    );
    setState({columns: state.columns,
  data: result.data});
  };

  useEffect(() => {
    fetchData();
    
      // console.log(state)
  }, []);

   async function addProject (newProject){
    const result = await axios.post(
      'http://localhost:9000/projects/add',newProject
    );
    setState({columns: state.columns,
  data:[...state.data , result.data],
      tableRef: React.createRef(),
      selected: false,
      selectedRowId: null,
      c: "blue",
      currentRow: {}});
      console.log(state)
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, state.data.length - page * rowsPerPage);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const history = useHistory();

  async function handleClick(project) {
    history.push(`/project/${project._id}`);
    const result = await axios.get(
      'http://localhost:9000/projects/' + project._id,
    );
    console.log(result)
    setState({
      project: result.data});
  }

  function handleStyle(rowData) {
    console.log(rowData);
      //  setState({ currentRow: rowData });
      console.log(state)
      // console.log(state.currentRow)
      //   console.log(state.tableRef);
      //   console.log(rowData.tableData.id)
        // if (rowData.tableData.id === state.selectedRowId) {
        //  setState({ selected: false });
        //  setState({ selectedRowId: null });
        //  console.log("yes")
        // } else {
        //  setState({ selected: true,
        //             selectedRowId: rowData.tableData.id  });
        //  console.log("no")
        // console.log(state.selected)
        // }
  }


  return (
    <MaterialTable
      options={{
        rowStyle: rowData => ({
          backgroundColor:
           state.selected &&
            rowData.tableData.id ===state.selectedRowId
              ?state.c
              : "#fff"
        })
      }}
      title="All Projects"
      columns={state.columns}
      data={state.data}
      onRowClick={(event, rowData) => {
        handleClick(rowData);
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            resolve();
            addProject(newData);
          }),
          // ToDo onDelete from database
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
      onRowClick={(event, rowData) => {
        // if the rowData.tableDate.id could be used on condidtional render
        handleStyle(rowData);
      }}
      
      localization={{
        Pagination: props => (
          <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          count={state.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
            ),
                  }}
    />
  );
}