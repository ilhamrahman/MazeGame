import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic24.jpg';


class Bestfriend extends React.Component { 

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

        <div className="abanPictures">

            <div >
            <img src={image} height={350} width={300}/>
            <h2 style={{ color: '#00ff00'}}> <strong> Best Friend </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is my eternal best friend. </em> </h2>
            </div>

            </div>
            
   

   

);



}

}
export default Bestfriend;
