import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic14.jpg';


class Talented extends React.Component { 

    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    render () {
return(

        <div className="abanPictures" >

            <div >
            <img src={image} height={350} width={300}/>
            <h2 style={{ color: '#20B2AA'}}> <strong> Talented </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is a multi-talented human being. 
              She can do art, she can play the piano, she is a great singer (even though she won't admit it)
              and she is the smartest person I know, who excels at everything she puts her mind and soul into. 
              There's so many more talents of hers I cannot wait to discover.</em> </h2>
            </div>
   

            </div>
            
   

   

);



}

}
export default Talented;


