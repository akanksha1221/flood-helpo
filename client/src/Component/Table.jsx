import React,{useState,useEffect} from 'react';
import Axios from "axios";

import '../Css/Table.css';

function Table(){
  const [donators, setDonators] = useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:8000/donar").then((response)=>{
    setDonators(response.data);
    });
  },[]);

  return(
          <>
            <div className="container table">
              <h2>List of donator</h2>
              <ul className="responsive-table">
                <li className="table-header">
                  <div className="col-8 left">Name</div>
                  <div className="col-4 right">Amount</div>
                </li>
                {donators.map((val,key)=>{
                  return(
                    <li className="table-row" key={val._id}>
                        <div className="col-8 left" data-label="Name">{val.name} </div>
                        <div className="col-4 right" data-label="Amount">₹{val.amount}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        )
}

export default Table;