

function PaymentBox(props) {
    const  bill=  props.bill;
    const total= bill.reduce((tot, ele) =>{return tot + ele.total;}, 0);
    
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
                </div>
    );

}

export default PaymentBox;