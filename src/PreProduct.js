import logo from './logo.png';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, Materials, Basket } from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Tabs from './Tabs';

  
function PreProduct (){

    const [barcode,updateBarcode] = useState('')
    const [name,updateName] = useState('')
    console.log(barcode)
    console.log(name)
    const changeBarcode = event => {
        updateBarcode(event.target.value)
      }

    const changeName = event => {
        updateName(event.target.value)
      }
 
    return (
        <div className="addProductPage">

            

            <img src={logo} className='oxiLogo'/>

            <div className='addProductPageItemsTop'>

            <div className='actionBar2'>
                <div className='barcode'>
                    <div className='barcodeItems'>
                        <div>
                            Barcode:
                        </div> 
                        <div className='barcodeInput'>
                            <input className='barcodeInputField' onChange={changeBarcode} value={barcode}></input>
                        </div>

                        

                        
                    </div>
                </div>
                <div className='barcode'>
                        <div className='nameLabel'>
                            Name:
                        </div> 
                        <div className='barcodeInput'>
                            <input className='barcodeInputField' onChange={changeName} value={name}></input>
                        </div>
                        </div>

                        <Link onClick={() => {console.log('hello')}} className="addButton" to="/AddProduct" state={{barcode,name}}>Add</Link>
                </div>

            </div>

        </div>
    )
}
  
export default PreProduct;