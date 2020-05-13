import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic18.jpg';


class Perfect extends React.Component { 

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
            <h2 style={{ color: '#00fa9a'}}> <strong> Perfect </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is perfect for me. We both are perfectly imperfect for each other. 
              We both have flaws, yet those flaws make us perfect for each other. 
              She is very much a perfectionist, so it's fitting that she is perfect for me. </em> </h2>
            </div>     

            </div>
            
   

   

);



}

}
export default Perfect;


