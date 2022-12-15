import { DataStore, Auth } from 'aws-amplify';
import { RawMaterials} from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddMaterial from './AddMaterial';
import { useLocation } from 'react-router-dom';

const MaterialsTab = () => {

  const [materials, updateMaterials] = useState([{"id":"null","Barcode":"null","Material":"null","CO2perkg":"null","Mass":"null","Carbon":"null","createdAt":"null","updatedAt":"null","_version":1,"_lastChangedAt":1668093357306,"_deleted":null}])
  const [val,setVal] = useState('')
  const location = useLocation();
  const barcode = location.state.barcode
  const name = location.state.name
  console.log(barcode)
  const change = event => {
    setVal(event.target.value)
  }

  useEffect(()=>{
    getSearchMaterials()
  },[val])

  async function getMaterials(){
    const materials = (await DataStore.query(RawMaterials, c => c.Barcode.eq(location.state.barcode)));
    updateMaterials(materials)
  }

  async function getSearchMaterials(){
    const searchMaterials = await DataStore.query(RawMaterials, c => c.and(c => [
     c.Material.contains(val.toString()),
     c.Barcode.eq(location.state.barcode)
    ]
      ));
    updateMaterials(searchMaterials)
  }

  return (
    <div className="materialsTab">

      <div className="actionBar3">

        <div className="addMaterials">

          <div className="materialsTitle">
              Materials
          </div>
            <Link className="plusButton" to="/AddMaterial" state={{barcode,name}}>+</Link>
        </div>

        <div className='materialsSearchAndRefresh'>

        <button className='refreshButton' onClick={()=> getMaterials()}><FiRefreshCw className='refreshIcon'/></button>

        <div className="materialsSearchBar">
        <input className = "materialsSearchBarField" onChange={change} value={val}/> <FiSearch color='#00C2FF'/> 
        </div>

        </div>

        

      </div>

      <div className="materialsTable">

      <table>
            
            <div className="productList2">
            <tbody>
              {materials.map((material)=>(
              <tr>
              <td>{material.Barcode}</td>
              <td>{material.Material}</td>
              <td>{material.Mass}</td>
              <td>{material.Carbon}</td>
              </tr>
              ))}
            </tbody>
            </div>

            <thead>
              <tr>
                <th>Barcode</th>
                <th>Material</th>
                <th>Mass (Kg)</th>
                <th>Carbon (Kg)</th>
              </tr>
            </thead>
            
           
          </table>

      </div>

    </div>
  );
};

export default MaterialsTab;