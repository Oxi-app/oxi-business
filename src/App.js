import logo from './logo.png';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, Materials, Basket } from "./models";
import {React, useState} from 'react'
import { Button, withAuthenticator} from '@aws-amplify/ui-react';
import { FiSearch } from 'react-icons/fi';

// Example of a data array that
// you might receive from an API
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]



function App() {

  const [items, updateItems] = useState(null);
  const [barcode, updateBarcode] = useState(null);
  const [name, updateName] = useState(null);
  const [manufacturer, updateManufacturer] = useState(null);
  const [carbon, updateCarbon] = useState(null);

  async function getItems(){

    const items = (await DataStore.query(Item));
    updateItems(items)
    const barcode = items.map((p) => p.Barcode)
    updateBarcode(barcode)
    const name = items.map((p) => p.Name).toString()
    updateName(name)
    const manufacturer = items.map((p) => p.Merchant).toString()
    updateManufacturer(manufacturer)
    const carbon = items.map((p) => p.Carbon).toString()
    updateCarbon(carbon)

  }



  console.log(barcode)

  

  
  return (
    <div className="App">

      <img src={logo} className='oxiLogo'/>


      <div className='pageItems'>
        <div className='actionBar1'>
          <div className="searchBar" > <FiSearch color='#00C2FF'/> </div>

          <button className='refreshButton' onClick={()=> getItems()}>R</button>
          <div className="addProductButton">
            Add Product
          </div>
        </div>

        <div className="productList">

        <table>
        <tr>
          <th>Barcode</th>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Carbon</th>
        </tr>


        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{barcode}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )


        })}
      </table>


        </div>


      </div>
      
    </div>
     
  );
}

export default withAuthenticator(App);
