import React from 'react';
import axios from 'axios';
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";
import { FormatListNumberedRtlRounded } from "@material-ui/icons";
import { ClickAwayListener } from '@material-ui/core';

export default class Upload extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedFile:null,
            title:"",
            content:"",
            setFocus:false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.setFocused=this.setFocused.bind(this);
    }
setFocused(event){
    this.setState({
        setFocus: event.target.value
      })
}
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0]
          })
    }
  

onSubmit(e){
        
       
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
       
        let url = "http://localhost/php/image-viewer/src/api/uploadfile.php";

        axios.post(url, data, {
            headers: {
                'content-type': 'multipart/form-data',
                 //Authorization: user.authToken //the token is a variable which holds the token
                
            }
        })
        .then(res => { 
            console.log(res,this.state.title);
        })
       
    }

   async  handleChange(event) {
        
      await  this.setState({
            title: event.target.value
           
          })
          
      }
    
       
    

shouldComponentUpdate(){
    return false;
}
    render(){
        return(
<div>
<form className="formAlign"   >
<label>Upload Image </label>
<input type="file" className="inputImage" name="file"  onChange={this.handleInputChange}  />
<br/>
{/* <div 
        className="create-note"
        onFocus={() => {
          this.state.setFocus=true;
          console.log("focussed");
        }}
        onBlur={() => {
          this.state.setFocus=false;
          console.log("blurred");
        }}
      >
        <input
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={this.handleChange}

          className={this.state.setFocus ? "fadeIn" : "fadeOut"}
          value={this.state.content}
          placeholder="Description..."
          rows="1"
          FormatListNumberedRtlRounded
        />
        
      </div> */}
<br/>
<button type="submit" className="button-img" onClick={(event)=>this.onSubmit(event)}>Upload</button>
 
</form>
</div>
        )
    
        }
}
