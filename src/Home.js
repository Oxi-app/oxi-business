import logo from './logo.png';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, Materials, Basket, ManufacturedItems } from "./models";
import {React, useEffect, useState, Component} from 'react'
import { Button, withAuthenticator} from '@aws-amplify/ui-react';
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddProduct from './AddProduct';
import PreProduct from './PreProduct';


function Home() {

  const [items, updateItems] = useState([{"id":"null","Barcode":"null","Merchant":"null","Name":"null","Price":"null","Weight":"null","Material":"null","Carbon":"null","createdAt":"null","updatedAt":"null","_version":1,"_lastChangedAt":1668093357306,"_deleted":null}])
  const [val,setVal] = useState('')
  const change = event => {
    setVal(event.target.value)
  }

  useEffect(()=>{
    getSearchItems()
  },[val])

  async function getItems(){
    const items = (await DataStore.query(Item));
    updateItems(items)
    console.log(items)
  }

  async function getSearchItems(){
    const searchItems = await DataStore.query(Item, c => c.Barcode.contains(val.toString()));
    updateItems(searchItems)
    
  }

  return (
    
    <div className="App">

      <img src={logo} className='oxiLogo'/>

      <div className='pageItems'>
        <div className='actionBar1'>
          <div className='searchAndRefresh'>
            
          <div className="searchBar" > <input className = "searchBarField" onChange={change} value={val}/> <FiSearch color='#00C2FF'/> </div>

          <button className='refreshButton' onClick={()=> getItems()}><FiRefreshCw className='refreshIcon'/></button>
          </div>

          <Link className='addProductButton' to="/PreProduct">Add Product</Link>

        </div>

        <div className="productList">

          <table>
            
            <div className="productList2">
            <tbody>
              {items.map((item)=>(
              <tr>
              <td>{item.Barcode}</td>
              <td>{item.Name}</td>
              <td>{item.Merchant}</td>
              <td>{item.Carbon}</td>
              </tr>
              ))}
            </tbody>
            </div>

            <thead>
              <tr>
                <th>Barcode</th>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Carbon (Kg)</th>
              </tr>
            </thead>
            
           
          </table>
        </div>

      </div>
      
    </div>
     
  );
}

export default withAuthenticator(Home);
