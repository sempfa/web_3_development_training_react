import React, { useState } from 'react';
import UserCard from './components/userCard';
import FundCard from './components/fundCard';
import PayForm from './components/payForm';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const weiUnit = 1000000000000000000;
const gweiUnit = 1000000000;

function App() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState({})

  return (
    <div className="container-fluid">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex justify-content-center">
          <div id="content">
            <h1>Web3 Fund App</h1>
            {UserCard(weiUnit, setAccount)}
            {FundCard(weiUnit, setContract)}
            {PayForm(weiUnit, gweiUnit, contract, account)}
          </div>
        </main>
      </div>  
    </div>
  );
}

export default App;
