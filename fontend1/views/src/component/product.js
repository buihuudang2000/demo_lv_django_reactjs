import Nav from './nav';
import './css/product.css'
import { useState } from 'react';

function Body() {

  var id_delete=-1;
  function setIdDelete(id){
    id_delete=id;
    console.log("delete ", id_delete);
  }
  var id_update=-1;
  function setIdUpdate(id){
    id_update=id;
    console.log("update ",id_update);
  }
  const product=[{
    index: 1,
    id : "P0001",
    picture: "https://phunuketnoi.com/wp-content/uploads/2021/03/mon-ngon-moi-ngay.jpg",
    name : "Abc",
    price: 40000
  },
  {
    index: 2,
    id : "P0001",
    picture: "https://phunuketnoi.com/wp-content/uploads/2021/03/mon-ngon-moi-ngay.jpg",
    name : "Abc",
    price: 40000
  },
  {
    index: 3,
    id : "P0001",
    picture: "https://phunuketnoi.com/wp-content/uploads/2021/03/mon-ngon-moi-ngay.jpg",
    name : "Abc",
    price: 40000
  }]
  var List_product= product.map((item,index) =>
            <tr key={index}>
              <td className="col-md-1">{item.id}</td>
              <td className="col-md-1"> <img src={item.picture} className="picture " style={{width: "30px"}} alt="Picture"></img></td>
              <td>{item.name}</td>
              <td className="col-md-2">{item.price}</td>
              <td className="col-md-2"><button onClick={() => setIdUpdate(item.index)} id="update" type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateModal"> <i className="fas fa-edit"></i> </button>
              <button onClick={() => setIdDelete(item.index)} style={{marginLeft: "5px"}}  type="button" className="btn btn-danger" id="delete"> <i className="fas fa-trash-alt"></i> </button>
              </td>
            </tr>
  );

  return (
    <div >
    <Nav/>
    
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
              <p>Some text in the modal.</p>
          </div>
          <div className="modal-footer">
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
              <p>Some text in the modal.</p>
          </div>
          <div className="modal-footer">
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

export default Body;
