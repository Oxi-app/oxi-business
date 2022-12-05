import logo from './logo.svg';
import './App.css';
import { DataStore, Auth } from 'aws-amplify';
import { Item, Materials, Basket } from "./models";
import React from 'react'
import { withAuthenticator} from '@aws-amplify/ui-react';
console.log('Hello')


function App() {

  async function getItem(){

    const transaction = await DataStore.query(Item);
    
    console.log(transaction)
  }

  getItem()

  

  
  return (
    <div className="App">

      <div className='actionBar1'>
      <div className="searchBar" />
      <div className="addProductButton">
        Add Product
      </div>
      </div>


      <div className="productList" />
      
    </div>
     
  );
}

export default withAuthenticator(App);
