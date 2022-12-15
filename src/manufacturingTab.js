import { DataStore, Auth } from 'aws-amplify';
import { Processes} from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddProcess from './AddProcess';
import { useLocation } from 'react-router-dom';


const ManufacturingTab = () => {

  const [processes, updateProcesses] = useState([{"id":"null","Barcode":"null","Electricity":"null","Renweable":"null","Source":"null","Fuel":"null","Type":"null","Waste":"null","Composition":"null","Carbon":"null","createdAt":"null","updatedAt":"null","_version":1,"_lastChangedAt":1668093357306,"_deleted":null}])
  const [val,setVal] = useState('')
  const location = useLocation();
  const barcode = location.state.barcode
  const name = location.state.name

  const change = event => {
    setVal(event.target.value)
  }

  useEffect(()=>{
    getSearchProcesses()
  },[val])

  async function getProcesses(){
    const processes = (await DataStore.query(Processes, c => c.Barcode.eq(location.state.barcode)));
    console.log(processes)
    updateProcesses(processes)
  }

  async function getSearchProcesses(){
    const searchProcesses = await DataStore.query(Processes, c => c.and(c => [
     c.Name.contains(val.toString()),
     c.Barcode.eq(location.state.barcode)
    ]
      ));
    updateProcesses(searchProcesses)
  }

  return (
    <div className="materialsTab">

      <div className="actionBar3">

        <div className="addMaterials">

          <div className="materialsTitle">
              Processes          </div>

              <Link className="plusButton" to="/AddProcess" state={{barcode,name}}>+</Link>
        </div>

        <div className='materialsSearchAndRefresh'>

        <button className='refreshButton' onClick={()=> getProcesses()}><FiRefreshCw className='refreshIcon'/></button>

        <div className="materialsSearchBar">
        <input className = "materialsSearchBarField" onChange={change} value={val}/> <FiSearch color='#00C2FF'/> 
        </div>

        </div>

        

      </div>

      <div className="materialsTable">

      <table>
            
            <div className="productList2">
            <tbody>
              {processes.map((process)=>(
              <tr>
              <td>{process.Barcode}</td>
              <td>{process.Name}</td>
              <td>{process.Electricity}</td>
              <td>{process.Renweable}</td>
              <td>{process.Source}</td>
              <td>{process.Fuel}</td>
              <td>{process.Type}</td>
              <td>{process.Waste}</td>
              <td>{process.Composition}</td>
              <td>{process.Carbon}</td>
              
              </tr>
              ))}
            </tbody>
            </div>

            <thead>
              <tr>
                <th>Barcode</th>
                <th>Name (Kg)</th>
                <th>Electricity</th>
                <th>Renweable</th>
                <th>Source (Kg)</th>
                <th>Fuel</th>
                <th>Type</th>
                <th>Waste</th>
                <th>Composition (Kg)</th>
                <th>Carbon (Kg)</th>
              </tr>
            </thead>
            
           
          </table>

      </div>

    </div>
  );
};

export default ManufacturingTab;