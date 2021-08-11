import axios from 'axios';

function ProductPayment(props) {
    const [product,status]= [props.listrecord, props.status];
    
    return(
        <div className="table1" >
        <table  className="table table-bordered table-striped ">
          <thead >
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="col-md-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item,index) =>
                <tr key={index}>
                  <td className="col-md-1">{item.id}</td>
                  <td className="col-md-1"> <img src={item.img} className="picture " style={{width: "30px"}} alt="Picture"></img></td>
                  <td>{item.name}</td>
                  <td className="col-md-2">{item.price}</td>
                  <td className="col-md-2">
                    <div class="btn-group">
                    <button type="button" class="btn btn-primary">-</button>
                    <button type="button" class="btn btn-primary">1</button>
                    <button type="button" class="btn btn-primary">+</button>
                    </div>
                  </td>
                  <td className="col-md-2">{
                    (status ==="bill")?
                    <button onClick={() => console.log(item.id)} id="update" type="button" className="btn btn-danger" data-toggle="modal" data-target="#updateModal"> Delete </button>
                    :<button onClick={() => console.log(item.id)} id="update" type="button" className="btn btn-success" data-toggle="modal" data-target="#updateModal"> Select </button>
                  }
                    
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )

}

export default ProductPayment;