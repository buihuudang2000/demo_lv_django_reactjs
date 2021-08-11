import axios from 'axios';

function ListProduct(props) {
    const [product, handleDelete, handleUpdate]= [props.listrecord,props.handleDelete, props.handleUpdate];
    
    return(
        <div className="table1" >
        <table  className="table table-bordered table-striped ">
          <thead >
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
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
                  <td className="col-md-2"><button onClick={() => handleUpdate(item.id)} id="update" type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateModal"> <i className="fas fa-edit"></i> </button>
                  <button onClick={() => handleDelete(item.id)} style={{marginLeft: "5px"}}  type="button" className="btn btn-danger" id="delete"> <i className="fas fa-trash-alt"></i> </button>
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    )

}

export default ListProduct;