import React, { useEffect, useState } from 'react';

function PayForm(weiUnit, gweiUnit, contract, account) {
  const [ethVal, setEthVal] = useState(0);
  const [weiVal, setWeiVal] = useState(0);
  const [gweiVal, setGweiVal] = useState(0);


  const fundContract = () => {
    // execute fund() method and send message to contract
    contract.methods.fund().send({value: weiVal, from: account}, (err, result) => {
      if(err) console.log(err)
      if(result) {
        console.log(result);
      } 
    });
  }

  const setEtherValueHandler = (e) => {
    setEthVal(e.target.value);
    setGweiVal(e.target.value*gweiUnit);
    setWeiVal(e.target.value*weiUnit);
  }

  const setGweiValueHandler = (e) => {
    setEthVal(e.target.value/gweiUnit);
    setGweiVal(e.target.value);
    setWeiVal((e.target.value/gweiUnit)*weiUnit);
  }

  const setWeiValueHandler = (e) => {
    setEthVal(e.target.value/weiUnit);
    setGweiVal((e.target.value/weiUnit)*gweiUnit);
    setWeiVal(e.target.value);
  }

  return (
    <div className="card">
        <div className="card-body">
        <h5 className="card-title">Send Funds</h5>
        <div className="row">
            <div className="col-md-5">
                <label className="form-label">Ether</label>
                <input type="number" className="form-control" onChange={setEtherValueHandler} value={ethVal}></input>
                <hr/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-7">
                <label className="form-label">Gwei</label>
                <input type="number" className="form-control" onChange={setGweiValueHandler} value={gweiVal}></input>
                <hr/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-9">
                <label className="form-label">Wei</label>
                <input type="number" className="form-control" onChange={setWeiValueHandler} value={weiVal}></input>
                <hr/>
            </div>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={fundContract}>Fund</button>
        </div>

        </div>
    </div> 
  );
}

export default PayForm;
