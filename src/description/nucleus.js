import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic23.jpg';


class Nucleus extends React.Component { 

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
            <h2 style={{ color: '#00ff7f'}}> <strong> Nucleus </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is my nucleus.
            The way she treats everyone is exceptional, and she brings people together.
            She is one of a kind. My one and only, forever. 
            The only person I have ever fallen in love with, and will ever fall in love with.  </em> </h2>
            </div>       

            </div>
            
   

   

);



}

}
export default Nucleus;
