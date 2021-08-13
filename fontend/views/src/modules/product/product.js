import Nav from '../../component/nav';
import '../../component/css/product.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { validateBody } from '../../middleware/validateBody.middleware';
import {ProductSchema} from '../../DTO/product.dto';
import ListProduct from './ListProduct';
import UpdateModal from './UpdateModal';

function Products() {

  var id_delete=-1;
  var id_update=-1;
  // const [List_product, setListProduct] = useState([]);

  const [product,setProduct]= useState([]);

  const [updateProduct,setupdateProduct]= useState({});

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
    try {
      console.log("delete ", id);
      if (window.confirm("Delete a product"))
      {
        
        axios.delete(`http://127.0.0.1:8000/products/${id}/`)
        .then(data => setProduct( product.filter(item => item.id !== id)))
        .catch(err => alert("Please try again!"));
      }
        
    } catch (error) {
      throw error;
    }
    
    
  }

  
  async function handleUpdate(id){
    try {
      
      setupdateProduct((product.filter(item => item.id === id)).pop());
      
    } catch (error) {
      
      throw error;
    }
    
  }

  function UpdateService(){
    try {
      var itemUpdate = {
        name: document.getElementById('upname').value,
        img: document.getElementById('upimg').value,
        price: document.getElementById('upprice').value,
      };
     
      const checkInput = validateBody(ProductSchema, itemUpdate);
      if (checkInput.status === "fail") {
        alert(checkInput.message);
        return;
      }

      console.log(itemUpdate);
      document.getElementById("updateproduct").reset();
      axios.put(`http://127.0.0.1:8000/products/${updateProduct.id}/`, itemUpdate)
          .then(data => {
            itemUpdate.id= updateProduct.id;

            // const indexUpdate= product.findIndex(item => item.id ===updateProduct.id);
            // var tempProduct = product;
            // tempProduct[indexUpdate]=updateProduct;
            // setProduct(tempProduct);
            // console.log(indexUpdate);

            const tempListProduct=[];
            product.forEach((item)=> {
              if (item.id===itemUpdate.id) 
                 tempListProduct.push(itemUpdate);
              else tempListProduct.push(item);
            });
            setProduct(tempListProduct);
            
          })
          .catch(err => alert("Update failed"));
    } catch (error) {
      alert("Update failed");
      throw error;
    }
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
     
      <UpdateModal updateProduct={updateProduct} UpdateService={UpdateService}/>
      <ListProduct listrecord= {product} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      {/* <div className="paginationitem">
      <ul class="pagination ">
        <li><a href="#">&lt;</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">&gt;</a></li>
      </ul>
      </div> */}
      

      
    </div>


    </div>
  
  );
}

export default Products;
