import logo from './logo.png';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, Materials, Basket, Processes } from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Tabs from './Tabs';
import { useLocation } from 'react-router-dom';  

  
function AddProcess (){

    const location = useLocation();
    const name = location.state.name

    const barcode = location.state.barcode

    const [Name, updateName] = useState('')
    const [electricity, updateElectricity] = useState('')
    const [renewable, updateRenewable] = useState('')
    const [source, updateSource] = useState('')
    const [fuel, updateFuel] = useState('')
    const [type, updateType] = useState('')
    const [waste, updateWaste] = useState('')
    const [composition, updateComposition] = useState('')

    const changeElectricity = event => {
        updateElectricity(event.target.value)
    }

    const changeName = event => {
        updateName(event.target.value)
    }

    const changeRenewable = event => {
        updateRenewable(event.target.value)
    }

    const changeSource = event => {
        updateSource(event.target.value)
    }

    const changeFuel = event => {
        updateFuel(event.target.value)
    }

    const changeType = event => {
        updateType(event.target.value)
    }

    const changeWaste = event => {
        updateWaste(event.target.value)
    }

    const changeComposition = event => {
        updateComposition(event.target.value)
    }

    async function newProcess(){

        await DataStore.save(
            new Processes (
                {
                    Name: Name,
                    Barcode: barcode,
                    Electricity: electricity,
                    Renewable: renewable,
                    Source: source,
                    Fuel: fuel,
                    Type: type,
                    Waste: waste,
                    Composition: composition

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
                            Process Name:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeName} value={Name} className='barcodeInputField'></input>

                        </div>
                    </div>
                    <div className='formLine'>
                        <div>
                            Electricity:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeElectricity} value={electricity} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <div className='formLine'>
                        <div>
                            Renewable:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeRenewable} value={renewable} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <div className='formLine'>
                        <div>
                            Source:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeSource} value={source} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <div className='formLine'>
                        <div>
                            Fuel:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeFuel} value={fuel} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <div className='formLine'>
                        <div>
                            Type:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeType} value={type} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <div className='formLine'>
                        <div>
                            Waste:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeWaste} value={waste} className='barcodeInputField'></input>

                        </div>
                    </div>

                    <div className='formLine'>
                        <div>
                            Composition:
                        </div> 
                        <div className='barcodeInput'>
                        <input onChange={changeComposition} value={composition} className='barcodeInputField'></input>

                        </div>
                    </div>

            </div>

            <div className='actionBar4'>
            <Link  className='materialSaveButton' to={"/AddProduct"} state={{barcode,name}}>Back</Link>

                <div className='carbonReading'>Carbon: </div>
                <Link onClick={()=> {newProcess()}} className='materialSaveButton' to={"/AddProduct"} state={{barcode,name}}>Done</Link>
            </div>

        </div>
    )
}
  
export default AddProcess;