import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic22.jpg';


class Weird extends React.Component { 

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
            <h2 style={{ color: '#ffffff'}}> <strong> Weird </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is almost as weird as me. I never thought I would 
            find someone who is the same breed of weird as me, but I have. This is why I love her, and we have so much fun 
            together, no matter what we're doing. We can do very boring things together, but we make it fun because of how
            weird we are. Everything I do with her is fun.  </em> </h2>
            </div> 

            </div>
            
   

   

);



}

}
export default Weird;
