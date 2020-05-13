import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic21.jpg';


class Unique extends React.Component { 

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
            <h2 style={{ color: '#b0c4de'}}> <strong> Unique </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban's uniqueness is another one of my favourite things about her. 
            Her beauty is unique, due to her unique facial features. She is so cute! More than that, she is a unique person with
            a unique heart, which is why I love her. This blend of inner and outer beauty is unique and rare in a person, 
            and I consider myself very lucky to  be spending the rest of my life with such a unique human being InshaAllah. </em> </h2>
            </div>
          
            </div>
            
   

   

);



}

}
export default Unique;


