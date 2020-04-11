import React from 'react';
import Tilt from 'react-tilt'
//import './Logo.css';
import './ImageLinkForm.css';
//import brain from './brain.png'
const ImageLinkForm =({onInputChange,onButtonSubmit})=>{


    return ( 
        <div >

          <p className='f3'>
                {' Magie qui permet de detecter des visages '}
          </p>
          <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type="tex" onChange={onInputChange} />
            <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detecter</button>
                
            </div>
            
          </div>
        </div>
    );
}

export default ImageLinkForm ;