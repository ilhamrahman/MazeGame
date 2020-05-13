import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic13.jpg';


class Inspiration extends React.Component { 

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

            <div>
            <img src={image} height={350} width={300} />
            <h2 style={{ color: '#1e90ff'}}> <strong> Inspiration </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is my inspiration. 
              The way she gives her 100% at everything she does and how she treats other people is inspirational. 
              The person she is and how hard she works inspires myself and everyone around her.  </em> </h2>
            </div>

          

            </div>
            
   

   

);



}

}
export default Inspiration;


