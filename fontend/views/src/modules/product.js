import Nav from '../component/nav';
import '../component/css/product.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { validateBody } from '../middleware/validateBody.middleware';
import {ProductSchema} from '../DTO/product.dto';

function Products() {

  var id_delete=-1;
  var id_update=-1;
  const [List_product, setListProduct] = useState([]);
  const [product,setProduct]= useState([]);
  useEffect(()=> {
    axios.get('http://127.0.0.1:8000/products/')
      .then(res => {
        setProduct(res.data);
        
      })
      .catch(err => console.log(err));

  },[]);

  // window.onload = function() {
  //   loadRecord();
  // };

  function insertProduct(){
    try {
      const inputProduct = {
        name: document.getElementById('name').value,
        img: document.getElementById('img').value,
        price: document.getElementById('price').value,
      };
     
      const checkInput = validateBody(ProductSchema, inputProduct);
      if (checkInput.status === "fail") {
        alert(checkInput.message);
        return;
      }
      

      axios.post('http://127.0.0.1:8000/products/', inputProduct)
          .then(data => {
            document.getElementById("insertproduct").reset();
            alert("Insert successfullly");
          })
          .catch(err => alert("Insert failed"));
      
      
    } catch (error) {
      alert("Insert failed");
      throw error;
    }
  }

  function Delete(id){
    id_delete=id;
    console.log("delete ", id_delete);
  }

  
  function Update(id){
    id_update=id;
    console.log("update ",id_update);
  }

  function loadRecord(){
    try {
      console.log(product);
      List_product= setListProduct(product.map((item,index) =>
                <tr key={index}>
                  <td className="col-md-1">{item.id}</td>
                  <td className="col-md-1"> <img src={item.img} className="picture " style={{width: "30px"}} alt="Picture"></img></td>
                  <td>{item.name}</td>
                  <td className="col-md-2">{item.price}</td>
                  <td className="col-md-2"><button onClick={() => Update(item.index)} id="update" type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateModal"> <i className="fas fa-edit"></i> </button>
                  <button onClick={() => Delete(item.index)} style={{marginLeft: "5px"}}  type="button" className="btn btn-danger" id="delete"> <i className="fas fa-trash-alt"></i> </button>
                  </td>
                </tr>
      )
      );
      console.log(List_product);
      
    } catch (error) {
      throw error;
    }
  }
  

  return (
    <div onload={loadRecord}>
    <Nav page="products"/>
    
    <div className="body">

      {/*Modal*/ }
      <div className="modalInsert">

      <button type="button" className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#myModal">Insert</button>
      
          
      <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">

        
          <div className="modal-content">
          <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
          </div>
          <div className="modal-body">
                <form action="#" id="insertproduct">
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" name="name" id="name"/>
                  </div>

                  <div class="form-group">
                    <label for="img">Image:</label>
                    <input type="text" class="form-control" name="img" id="img"/>
                  </div>
                  <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="number" class="form-control" name="price" id="price"/>
                  </div>
                </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={insertProduct}>Insert</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
          </div>

      </div>
      </div>

      </div> {/*Modal End*/}

      {/*Modal Update*/}
      <div>
      <div id="updateModal" className="modal fade" role="dialog">
      <div className="modal-dialog">

        
          <div className="modal-content">
          <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Update Modal Header</h4>
          </div>
          <div className="modal-body">
                <form action="#">
                  <div class="form-group">
                    <label for="upname">Name:</label>
                    <input type="text" class="form-control" id="upemail"/>
                  </div>

                  <div class="form-group">
                    <label for="upimg">Password:</label>
                    <input type="text" class="form-control" id="upimg"/>
                  </div>
                  <div class="form-group">
                    <label for="upprice">Password:</label>
                    <input type="number" class="form-control" id="upprice"/>
                  </div>
                </form>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal">Update</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
          </div>

      </div>
      </div>
      </div>

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
            {List_product}
          </tbody>
        </table>
      </div>

      
    </div>


    </div>
  
  );
}

export default Products;
