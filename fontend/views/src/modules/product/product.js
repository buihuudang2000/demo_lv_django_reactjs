import Nav from '../../component/nav';
import '../../component/css/product.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { validateBody } from '../../middleware/validateBody.middleware';
import {ProductSchema} from '../../DTO/product.dto';
import ListProduct from './ListProduct';

function Products() {

  var id_delete=-1;
  var id_update=-1;
  // const [List_product, setListProduct] = useState([]);

  const [product,setProduct]= useState([]);
  const [updateProduct,setupdateProduct]= useState([]);
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
            const idproduct= product.length +1;
            setProduct( [...product, {id: idproduct, ...inputProduct}]);
            alert("Insert successfullly");
          })
          .catch(err => alert("Insert failed"));
      
      
    } catch (error) {
      alert("Insert failed");
      throw error;
    }
  }

  function handleDelete(id){
        
    console.log("delete ", id);
    if (window.confirm("Delete a product"))
    {
      
      axios.delete(`http://127.0.0.1:8000/products/${id}/`)
      .then(data => setProduct( product.filter(item => item.id !== id)))
      .catch(err => alert("Please try again!"));
    }
    
  }

  
  async function handleUpdate(id){
    await setupdateProduct(product.filter(item => item.id === id));
    console.log("update ",id, updateProduct);
    // console.log("update ", product[id]);

  }

  return (
    <div >
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
              <h4 className="modal-title">Insert Product</h4>
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
              <h4 className="modal-title">Update Product</h4>
          </div>
          <div className="modal-body">
                <form action="#">
                  <div class="form-group">
                    <label for="upname">Name:</label>
                    <input type="text" class="form-control" id="upname"/>
                  </div>

                  <div class="form-group">
                    <label for="upimg">Img:</label>
                    <input type="text" class="form-control" id="upimg"/>
                  </div>
                  <div class="form-group">
                    <label for="upprice">Price:</label>
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

      <ListProduct listrecord= {product} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      {/* <div className="table1" >
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
      </div> */}

      
    </div>


    </div>
  
  );
}

export default Products;