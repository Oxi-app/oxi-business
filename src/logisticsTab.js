import { DataStore, Auth } from 'aws-amplify';
import { Logistics, Processes } from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddLogistic from './AddLogistic';
import { useLocation } from 'react-router-dom';

const LogisticsTab = () => {

  const [logistics, updateLogistics] = useState([{"id":"null","Barcode":"null","Location":"null","Distance":"null","Mode":"null", "Carbon":"null","createdAt":"null","updatedAt":"null","_version":1,"_lastChangedAt":1668093357306,"_deleted":null}])
  const [val,setVal] = useState('')
  const location = useLocation();
  const barcode = location.state.barcode
  const name = location.state.name

  const change = event => {
    setVal(event.target.value)
  }

  useEffect(()=>{
    getSearchLogistics()
  },[val])

  async function getLogistics(){
    const logistics = (await DataStore.query(Logistics, c => c.Barcode.eq(location.state.barcode)));
    console.log(logistics)
    updateLogistics(logistics)
  }

  async function getSearchLogistics(){
    const searchLogistics = await DataStore.query(Logistics, c => c.and(c => [
     c.Location.contains(val.toString()),
     c.Barcode.eq(location.state.barcode)
    ]
      ));
    updateLogistics(searchLogistics)
  }

  return (
    <div className="materialsTab">

      <div className="actionBar3">

        <div className="addMaterials">

          <div className="materialsTitle">
              Logistics
          </div>

          <Link className="plusButton" to="/AddLogistic" state={{barcode,name}}>+</Link>

        </div>

        <div className='materialsSearchAndRefresh'>

        <button className='refreshButton' onClick={()=> getLogistics()}><FiRefreshCw className='refreshIcon'/></button>

        <div className="materialsSearchBar">
        <input className = "materialsSearchBarField" onChange={change} value={val}/> <FiSearch color='#00C2FF'/> 
        </div>

        </div>

        

      </div>

      <div className="materialsTable">

      <table>
            
            <div className="productList2">
            <tbody>
              {logistics.map((logistics)=>(
              <tr>
              <td>{logistics.Barcode}</td>
              <td>{logistics.Location}</td>
              <td>{logistics.Distance}</td>
              <td>{logistics.Mode}</td>
              <td>{logistics.Carbon}</td>
              </tr>
              ))}
            </tbody>
            </div>

            <thead>
              <tr>
                <th>Barcode</th>
                <th>Location</th>
                <th>Distance</th>
                <th>Mode (Kg)</th>
                <th>Carbon (Kg)</th>
              </tr>
            </thead>
            
           
          </table>

      </div>

    </div>
  );
};

export default LogisticsTab;