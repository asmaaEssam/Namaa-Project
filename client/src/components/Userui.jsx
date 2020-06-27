import React, {useState ,useEffect} from 'react';
import MaterialTable, { MTableCell } from 'material-table';
import axios from 'axios';
const client= axios.create ();
client.interceptors.response.use(res=>res,err=>{
  throw new Error(err.response.data.message)
})
export default function MaterialTableDemo() {

  //const [err,setErr] = useState({})
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'User Name', field: 'username' },
      { title: 'Password', field: 'password' },
      {
        title: 'User role',
        field: 'role',
        
        
      },
    ],
    data: [
     
    ],
  });
  // if(err!={}){alert(err);}
  //console.log(err);
  useEffect(() => {
    const token= localStorage.getItem("token")
    console.log(token)
    const headers =  {Authorization:token}
    console.log(headers)
    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:9000/users/', {headers}      
      );
 if (!{headers}){
      alert(result.data.message)
      
 }
      //console.log(result.data.message)
      setState({columns: state.columns,
    data: result.data});
    };
 
    fetchData();
  }, []);

  async function addUser (newuser){
    const token= localStorage.getItem("token")
    console.log(token)
    const headers =  {Authorization:token}
    console.log(headers)
 const result = await axios.post(
   'http://localhost:9000/users/register',newuser,{headers}
 )
 alert(result.data.message)
 ///console.log(result.data.message)
 setState({columns: state.columns,
data:[...state.data , result.data]});
};

async function deleteUser (id){
  const token= localStorage.getItem("token")
    console.log(token)
    const headers =  {Authorization:token}
    console.log(headers)
const result = await axios.delete(
 `http://localhost:9000/users/${id}`,{headers}
);
alert(result.data.message)
console.log(result.data)
setState({columns: state.columns,
  data: result.data});
};

 async function editUser (id,editedUser){
  const token= localStorage.getItem("token")
    console.log(token)
    const headers =  {Authorization:token}
    console.log(headers)
  const result =  await axios.patch(
   `http://localhost:9000/users/${id}`,editedUser,{headers}
  )
  alert(result.data.message)
//  if(result.data.message!={}){
//    setErr(result.data.message);
   
//  }
 
  setState({columns: state.columns,
    data: result.data})
  
  }

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
           
              resolve();
              addUser(newData);
              // setState((prevState) => {
              //   const data = [...prevState.data];
              //   data.push(newData);
              //   return { ...prevState, data };
              // });
            
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            
           
              const id= oldData._id
              resolve();
              
              // if (newData.password==""||newData.name==""||newData.username==""||newData.role==""){
              // alert("menna")
              // }
              
              editUser(id,newData,oldData)
              // if (oldData) {
              //   setState((prevState) => {
              //     const data = [...prevState.data];
              //     data[data.indexOf(oldData)] = newData;
              //     console.log(MTableCell)
              //     return { ...prevState, data };
              //   });
              // }
           
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            
              const id= oldData._id
              resolve();
             
              deleteUser(id,oldData)
              // setState((prevState) => {
              //   const data = [...prevState.data];
              //   data.splice(data.indexOf(oldData), 1);
              //   return { ...prevState, data };
              // });
           
          }),
      }}
    />
  );
}


 
