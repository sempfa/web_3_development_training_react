import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

function UserCard(weiUnit, hoistAccount) {
  const [net, setNet] = useState('');
  const [account, setAccount] = useState('');
  const [accBalance, setAccBalance] = useState(0);

  useEffect(() => {
    (async () =>{
        let network = await web3.eth.net.getNetworkType((err) => { if(err) console.log(err)});
    
        console.log(`network: ${network}`);
        console.log(`account: ${web3.currentProvider.selectedAddress}`);
    
        setNet(network);
        setAccount(web3.currentProvider.selectedAddress);
        hoistAccount(web3.currentProvider.selectedAddress);
        const accBal = await web3.eth.getBalance(web3.currentProvider.selectedAddress);
        setAccBalance(accBal/weiUnit)  
      })();
  },[]);

  return ( 
    <div className="card">
        <div className="card-body">
        <h5 className="card-title">Your Details</h5>
        <p className="card-text">
            network: {net} <br />
            account: {account} <br />
            balance: {accBalance} 
        </p>
        </div>
    </div>
  );
}

export default UserCard;
