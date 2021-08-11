function UpdateModal(props) {
    const [updateProduct, UpdateService] = [props.updateProduct, props.UpdateService];
    return (
        <div>
        <div id="updateModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
  
          
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Update Product</h4>
            </div>
            <div className="modal-body">
                  <form action="#" id="updateproduct">
                    <div class="form-group">
                      <label for="upname">Name:</label>
                      <input type="text" class="form-control" id="upname" defaultValue={updateProduct.name}></input>
                    </div>
  
                    <div class="form-group">
                      <label for="upimg">Img:</label>
                      <input type="text" class="form-control" id="upimg" defaultValue={updateProduct.img}/>
                    </div>
                    <div class="form-group">
                      <label for="upprice">Price:</label>
                      <input type="number" class="form-control" id="upprice" defaultValue={updateProduct.price}/>
                    </div>
                  </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={UpdateService}>Update</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>
  
        </div>
        </div>
        </div>
        
    );
}

export default UpdateModal;