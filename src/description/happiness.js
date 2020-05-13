import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic15.jpg';


class Happiness extends React.Component { 

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
            <h2 style={{ color: '#ffa500'}}> <strong> Happiness </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is the reason for my happiness. 
              Yes, it sounds very cheesy and cliche, but I feel like I discovered true happiness ever since she became my best friend. 
              She makes me happier than I ever hoped to be. I hope I can make her equally happy. </em> </h2>
            </div>
  

            </div>
            
   

   

);



}

}
export default Happiness;


