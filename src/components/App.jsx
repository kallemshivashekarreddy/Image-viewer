import React from 'react';
import  { useState } from "react";
import Header from "./Header";
import Upload from "./Upload";
import Footer from "./Footer";
import Imagecard from './Imagecard';
import axios from 'axios';
export default class App extends React.Component{
constructor(props){
    super(props);
    this.state={
        images:[]
    }
    this.deleteImage=this.deleteImage.bind(this);
}

async componentDidMount(){
  try{
  const response= await axios.get("http://localhost/php/image-viewer/src/api/viewer.php");
  const json=await response.data;
  console.log(response);
  this.setState(
    (prevState, prevProps) => {
      return { images:json.data };
    },
    () => console.log(this.state.images)
  );
  
  if(!response.ok){
    throw new Error();
  }
  }catch(err){
    console.log(err);
  }
  
  

}
deleteImage(img){
      const data=new FormData();
      data.append('filedelete',img);
      let url="http://localhost/php/image-viewer/src/api/delete.php";
      axios.post(url,data,{
        headers: {
          'content-type': 'multipart/form-data',
           //Authorization: user.authToken //the token is a variable which holds the token
          
      }
      }).then(res=>{
        
        this.componentDidMount(); 
        console.log(res);
      })
      
}

render(){
     
    return(
        <div id="contdata">
<Header />

<Upload />
{
  this.state.images.length?
<h1 className="h1uploads"> Your Uploads</h1>:<h1 className="h1uploads"> No Post</h1>
}


{

  this.state.images.length?
    this.state.images.map((img,index)=>(
<Imagecard
 key={index}
 id={index}
 onDelete={this.deleteImage}
 image={img.image}
 />)
     ):console.log("No post")
     
}

</div>
    
     )

}
}