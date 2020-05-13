import React from 'react';
import app from '../App';
import { Link, BrowserRouter } from 'react-router-dom';
import image from './Pic17.jpg';


class Pure extends React.Component { 

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
            <h2 style={{ color: '#f0f8ff'}}> <strong> Pure </strong> </h2>
            <h2 style={{ color: '#000000', fontSize: "20px"}}> <em> Aban's purity is my favourite thing about her. 
              She has this purity that I haven't seen in anyone before. 
              She is pure both inside and outside. She is a genuinely pure person with pure qualities and values. 
              On top of that, her beauty is very pure. </em> </h2>
            </div>

            </div>
            
   

   

);



}

}
export default Pure;


