import logo from './logo.png';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, Materials, Basket, Logistics, Transport } from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Tabs from './Tabs';
import { useLocation } from 'react-router-dom';  

  
function AddLogistic (){ 
    const location = useLocation();

    const barcode = location.state.barcode
    const name = location.state.name


    const [Location, updateLocation] = useState('')
    const [distance, updateDistance] = useState('')
    const [mode, updateMode] = useState('')
    const [modeName1, updateModeName1] = useState(null);
    const [modeName2, updateModeName2] = useState(null);
    const [modeName3, updateModeName3] = useState(null);
    const [modeCO2perMile, updateModeCO2perMile] = useState(null);

    const changeLocation = event => {
        updateLocation(event.target.value)
      }

    const changeDistance = event => {
        updateDistance(event.target.value)
      }

    const changeMode = event => {
        updateMode(event.target.value)
      }

      useEffect(() => {
        checkMode();
      }, [mode]);

      async function checkMode() {
        try{
        const modeName = (
          await DataStore.query(Transport, (p) => p.Mode.contains(mode))
        ).map((n) => n.Mode);
        console.log(modeName)
        const modeCO2perMile = (
          await DataStore.query(Materials, (p) => p.Mode.contains(mode))
        ).map((n) => n.CO2perMile);
        console.log(modeCO2perMile)
        updateModeCO2perMile(parseFloat(modeCO2perMile));
        if (mode == "") {
          modeName = [];
        }
        updateModeName1(modeName[0]);
        updateModeName2(modeName[1]);
        updateModeName3(modeName[2]);
      } catch (error) {
        console.log("Error checking Material", error);
      }
      }



      async function newLogistic(){

        await DataStore.save(
            new Logistics (
                {
                    Barcode: barcode,
                    Location: Location,
                    Distance:  distance,
                    Mode: mode,
                    Carbon: (parseFloat(modeCO2perMile)*parseFloat(distance)).toString()
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
                            Location of source:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeLocation} value={Location} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <div className='formLine'>
                        <div>
                            Distance travelled:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeDistance} value={distance} className='barcodeInputField'></input>
                        </div>
                    </div>
                    <div className='formLine'>
                        <div>
                            Mode of transport:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeMode} value={mode} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <button onClick={()=>{updateMode(modeName1)}}>{modeName1}</button>
                    <button onClick={()=>{updateMode(modeName2)}}>{modeName2}</button>
                    <button onClick={()=>{updateMode(modeName3)}}>{modeName3}</button>

            </div>

            <div className='actionBar4'>
            <Link className='materialSaveButton' to={"/AddProduct"} state={{barcode,name}}>Back</Link>
                <div className='carbonReading'>Carbon: </div>
                <Link onClick={()=> {newLogistic()}} className='materialSaveButton' to={"/AddProduct"} state={{barcode,name}}>Done</Link>
            </div>

        </div>
    )
}
  
export default AddLogistic;