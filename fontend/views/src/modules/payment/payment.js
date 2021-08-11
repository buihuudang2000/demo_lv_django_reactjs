import Nav from '../../component/nav';
import '../../component/css/product.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductPayment from './ProductPayment';
import '../../component/css/payment.css';

function Payment() {
    
    const [select,setSelect]= useState([]);
    const [bill,setBill]= useState([]);
    const [product,setProduct]= useState([]);
    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/products/')
          .then(res => {
            setProduct(res.data);
            setSelect([{id: 1, img: "abc", name: "dang", price: "100000"}]);
          
          })
          .catch(err => console.log(err));
    
      },[]);
    return(
        <div>
            <Nav page="payment"/>
            
            <div className="col-sm-8">
                <div class="search">
                    <label  for="search">Search to payment:</label>
                    <div class="form-group has-feedback has-search">
                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search"  onkeyup={searchProduct(this.value)}/>
                    </div>
                    {/* <div class="col-xs-10">
                        
                        <input type="text" class="form-control" name="search" id="search"></input>
                    </div>
                    <div class="col-xs-2">
                        <button type="button" className="btn btn-primary" ><i class="fas fa-search"></i></button>
                    </div> */}
                </div>
                <div class="form-group"> 
                <label  >Select to payment:</label>
                <ProductPayment status="select" listrecord={select}/> 
                </div>
                <div class="form-group"> 
                <label  >Bill:</label>
                <ProductPayment  status="bill" listrecord={bill}/> 
                </div>
            </div>
          
            <div className="col-sm-4">
                <div >
                <form action="#" >
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" name="name" id="name"/>
                  </div>

                  <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="text" class="form-control" name="phone" id="phone"/>
                  </div>

                  <div class="form-group">
                    <label for="total">Total:</label>
                    <input type="number" class="form-control " name="total" id="total"/>
                  </div>

                  <div class="form-group">
                    <label for="total">Cash:</label>
                    <input type="number" class="form-control " name="total" id="total"/>
                  </div>

                  <div class="form-group">
                    <label for="total">Change:</label>
                    <input type="number" class="form-control " name="total" id="total"/>
                  </div>
                  
                  <div class="form-group">
                    <button type="button" className="btn btn-success btn-block" >Payment</button>
                  </div>

                </form>
                </div>
                
            </div>
        </div>
    )

}

export default Payment;