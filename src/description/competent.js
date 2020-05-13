import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic19.jpg';


class Competent extends React.Component { 

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
            <h2 style={{ color: '#7fff00'}}> <strong> Competent </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban is competent at everything she does because she gives her 100% 
              at everything she does. She is a perfectionist. There are very few things this amazing woman cannot do (navigation being one). 
              She is both book smart and street smart, 
              which is why she is such an accomplished woman at such a young age. </em> </h2>
            </div>

            </div>
            
   

   

);



}

}
export default Competent;


