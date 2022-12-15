import logo from './logo.png';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, Materials, Basket } from "./models";
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Tabs from './Tabs';
import { useLocation } from 'react-router-dom';  
function AddProduct (){
    const location = useLocation();
    console.log(location)
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
                        <div>
                            {location.state.barcode}
                        </div>
                
                    </div>
                </div>
                <div className='barcode'>
                    <div className='barcodeItems'>
                        <div className='nameLabel'>
                            Name:
                        </div> 
                        <div>
                            {location.state.name}
                        </div>
                        </div>
                        </div>

                <div>
                    Carbon Total: 65kg
                </div>

                </div>



            </div>

            <div className='addProductPageItemsBottom'>
                <Tabs/>
            </div>



            

           


        </div>
    )
}
  
export default AddProduct;