import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic20.jpg';


class Growth extends React.Component { 

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
            <h2 style={{ color: '#000000'}}> <strong> Growth </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban and I will grow together forever InshaAllah. 
              We have made each other better human beings and improved ourselves, and will continue to do so.
              She has already made me grow so much, and it has been a pleasure to watch this amazing woman grow with me 
              over the past year, and I can't wait to grow with her forever. </em> </h2>
            </div>

            </div>
            
   

   

);



}

}
export default Growth;


