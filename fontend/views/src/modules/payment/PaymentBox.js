import { useState } from "react";
import { PaymentSchema } from "../../DTO/product.dto";
import {validateBody} from "../../middleware/validateBody.middleware"

function PaymentBox(props) {
    const  bill=  props.bill;
    const total= bill.reduce((tot, ele) =>{return tot + ele.total;}, 0);
    const [change, setChange]=useState(0);
    function updateChange(e){
        setChange(Number(e.target.value)-total);
    }
    function Payment(){
      var payment = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        change: document.getElementById('change').value,
      };
     
      const checkInput = validateBody(PaymentSchema, payment);
      if (checkInput.status === "fail") {
        alert(checkInput.message);
        return;
      } else alert("Paid!");
        
    }
    return(
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
                    <input type="number" class="form-control " disabled name="total" id="total" value={total}/>
                  </div>

                  <div class="form-group">
                    <label for="cash">Cash:</label>
                    <input type="number" class="form-control " name="cash" id="cash" onChange={updateChange}/>
                  </div>

                  <div class="form-group">
                    <label for="change">Change:</label>
                    <input type="number" class="form-control " disabled name="change" id="change" value={change}/>
                  </div>
                  
                  <div class="form-group">
                    <button type="button" className="btn btn-success btn-block" onClick={Payment}>Payment</button>
                  </div>

                </form>
                </div>
    );

}

export default PaymentBox;