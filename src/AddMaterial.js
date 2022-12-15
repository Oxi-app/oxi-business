import logo from './logo.png';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, RawMaterials, Basket, Materials } from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Tabs from './Tabs';
import { useLocation } from 'react-router-dom';  

  
function AddMaterial (){

    const location = useLocation();

    const barcode = location.state.barcode
    const name = location.state.name

    const [material, updateMaterial] = useState('')
    const [mass, updateMass] = useState('')
    const [materialName1, updateMaterialName1] = useState(null);
    const [materialName2, updateMaterialName2] = useState(null);
    const [materialName3, updateMaterialName3] = useState(null);
    const [materialCO2perKg, updateMaterialCO2perKg] = useState(null);

    const changeMaterial = event => {
        updateMaterial(event.target.value)
    }

      const changeMass = event => {
        updateMass(event.target.value)
      }

      useEffect(() => {
        checkMaterial();
      }, [material]);

      async function checkMaterial() {
        try{
        const materialName = (
          await DataStore.query(Materials, (p) => p.Material.contains(material))
        ).map((n) => n.Material);
        console.log(materialName)
        const materialCO2perKg = (
          await DataStore.query(Materials, (p) => p.Material.contains(material))
        ).map((n) => n.CO2perkg);
        console.log(materialCO2perKg)
        updateMaterialCO2perKg(parseFloat(materialCO2perKg));
        if (material == "") {
          materialName = [];
        }
        updateMaterialName1(materialName[0]);
        updateMaterialName2(materialName[1]);
        updateMaterialName3(materialName[2]);
      } catch (error) {
        console.log("Error checking Material", error);
      }
      }


      async function newMaterial(){
        await DataStore.save(
            new RawMaterials (
                {
                    Barcode: barcode,
                    Material: material,
                    Mass: mass,
                    Carbon: (parseFloat(materialCO2perKg)*parseFloat(mass)).toString()

                }
            )
        )

      }


    return (
        <div className="addProductPage">

            

            <img src={logo} className='oxiLogo'/>

            <div className='formField'>
                    <div className='formLine'>
                        <div>
                            Material:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeMaterial} value={material} className='barcodeInputField'>
                        </input>
                        </div>


                    </div>

                    <button onClick={()=>{updateMaterial(materialName1)}}>{materialName1}</button>
                    <button onClick={()=>{updateMaterial(materialName2)}}>{materialName2}</button>
                    <button onClick={()=>{updateMaterial(materialName3)}}>{materialName3}</button>



                    <div className='formLine'>
                        <div>
                            Mass:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeMass} value={mass} className='barcodeInputField'>
                        </input>
                        </div>
                    </div>
            </div>

            <div className='actionBar4'>
                <Link className='materialSaveButton' to={"/AddProduct"} state={{barcode,name}}>Back</Link>
                <div className='carbonReading'>Carbon: </div>
                <Link onClick={()=> {newMaterial()}} className='materialSaveButton' to={"/AddProduct"} state={{barcode, name}}>Done</Link>
            </div>

        </div>
    )
}
  
export default AddMaterial;