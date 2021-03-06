import Nav from '../../component/nav';
import '../../component/css/product.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductPayment from './ProductPayment';
import Bill from './Bill';
import PaymentBox from './PaymentBox';
import '../../component/css/payment.css';

function Payment() {
   
    const [select,setSelect]= useState([]);
    const [bill,setBill]= useState([]);
    const [product,setProduct]= useState([]);
    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/products/')
          .then(res => {
            setProduct(res.data.map(ele => {
                ele.quantity=1;
                return ele;
            }));
            
          
          })
          .catch(err => console.log(err));
    
      },[]);
    
    function subItemSelect(id){
        try {
            setSelect(select.map(ele => {
                if (ele.id === id) ele.quantity=(ele.quantity-1 <1)?1:ele.quantity-1;
                return ele;
            }));
        } catch (error) {
            throw error;
        }
    }
    function plusItemSelect(id){
        try {
            setSelect(select.map(ele => {
                if (ele.id === id) ele.quantity=ele.quantity+1;
                return ele;
            }));
        } catch (error) {
            throw error;
        }
        
    }
    function subItemBill(id){
        try {
            setBill(bill.map(ele => {
                if (ele.id === id) {
                ele.quantity=(ele.quantity-1 <1)?1:ele.quantity-1;
                ele.total=Number(ele.price)*Number(ele.quantity);
                }
                return ele;
            }));
            
        } catch (error) {
            throw error;
        }
    }
    function plusItemBill(id){
        try {
            setBill(bill.map(ele => {
                if (ele.id === id) {
                    ele.quantity=ele.quantity+1;
                    ele.total=Number(ele.price)*Number(ele.quantity);
                }
                return ele;
            }));
            
        } catch (error) {
            throw error;
        }
        
    }
    async function selectItem(id){
        try {
            let isSame = true;
            bill.forEach((ele) =>{
                if (ele.id === id) isSame=false;
            })
            if (!isSame) {
                alert("Products have been added to Bill");
                return;
            }
            await setBill([...bill,...select.map(ele=> {
               if (ele.id === id) {
                return {...ele, total: Number(ele.price)*Number(ele.quantity)};
               } 
               return;
            })]);
            
            
        } catch (error) {
            throw error;
        }
    }
    function deleteItem(id){
        try {
            setBill(bill.filter(ele => ele.id!==id));
          
        } catch (error) {
            throw error;
        }
    }
    function searchProduct(e){
        console.log(product);
        setSelect((product.filter(item => item.id === Number(e.target.value) )));
        console.log(e.target.value);
    }
    return(
        <div>
            <Nav page="payment"/>
            
            <div className="col-sm-8">
                <div class="search">
                    <label  for="search">Search to payment:</label>
                    <div class="form-group has-feedback has-search">
                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                        <input type="number" class="form-control" placeholder="Search ID"  onChange={searchProduct}/>
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
                <ProductPayment listrecord={select} plus={plusItemSelect} sub={subItemSelect} selectItem={selectItem}/> 
                </div>
                <div class="form-group"> 
                <label  >Bill:</label>
                <Bill  listrecord={bill} plus={plusItemBill} sub={subItemBill} deleteItem={deleteItem}/> 
                </div>
            </div>
          
            <div className="col-sm-4">
                <PaymentBox  bill={bill}/>
                {/* <div >
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
                    <label for="cash">Cash:</label>
                    <input type="number" class="form-control " name="cash" id="cash"/>
                  </div>

                  <div class="form-group">
                    <label for="change">Change:</label>
                    <input type="number" class="form-control " name="change" id="change"/>
                  </div>
                  
                  <div class="form-group">
                    <button type="button" className="btn btn-success btn-block" >Payment</button>
                  </div>

                </form>
                </div> */}
                
            </div>
        </div>
    )

}

export default Payment;