import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import {FundProjectForOwner_ADDRESS } from '../config';
import fundContract from "../contracts/FundProjectForOwner.json";

const web3 = new Web3(Web3.givenProvider);

function FundCard(weiUnit, setContract) {
  const [balance, setContractBalance] = useState(0);
  const [owner, setOwner] = useState('');
  const [funders, setFunders] = useState([Number]);

  useEffect(() => {
    (async () => { 
        const fundProjectContract = new web3.eth.Contract(fundContract.abi, FundProjectForOwner_ADDRESS); 
        setContract(fundProjectContract);
    
        const cOwner = await fundProjectContract.methods.owner().call();
        setOwner(cOwner);
        console.log(`contract owner: ${cOwner}`);
    
        const cBalance = await web3.eth.getBalance(fundProjectContract.options.address);
        setContractBalance(cBalance/weiUnit);
        console.log(`contract balance: ${cBalance}`);

        //await fundProjectContract.methods.funders(0).call((err, res) => { if(res)setFunders(res);console.log(res)});
        
    })();
  },[]);

  return (
    <div className="card">
        <div className="card-body">
        <h5 className="card-title">Fund Details</h5>
        <p className="card-text">
            Owner: {owner} <br />
            balance: {balance} <br />
            {/*funders: {funders}*/}
        </p>
        </div>
    </div>
            
  );
}

export default FundCard;
