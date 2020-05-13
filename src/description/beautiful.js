import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic16.jpg';


class Beautiful extends React.Component { 

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
            <h2 style={{ color: '#ffff00'}}> <strong> Beautiful </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is the most beautiful woman in my eyes. 
              Beauty like hers is very rare and unique. MashaAllah MashaAllah thu thu! </em> </h2>
            </div>

            </div>
            
   

   

);



}

}
export default Beautiful;


