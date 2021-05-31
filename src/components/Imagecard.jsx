import React, { Fragment } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

export default class Imagecard extends React.Component{

    constructor(props){
        super(props);
       this.handleDelete=this.handleDelete.bind(this)
    }
handleDelete(e){
this.props.onDelete(this.props.image);
}
    render(){
        return (
    

           <div className="center">
  <div className="property-card">
    
      <img className="property-image" src={"http://localhost/php/image-viewer/src/api/images/"+this.props.image} />
    <div className="property-description">
      <h5>{this.props.image}</h5>
      
    </div>
    <a href="#">
      <div className="property-social-icons">
    
      </div>
    </a>
    <Fab className="deleteimage" onClick={this.handleDelete}>
        <DeleteIcon />
      </Fab>
  </div>
  
</div>
        )
    }
}


