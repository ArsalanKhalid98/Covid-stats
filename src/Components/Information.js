import React from 'react'
import {Link} from 'react-router-dom'
import distance2 from "../images/distance2.png"


const Information = () => {
    return (
           <div className='container-fluid home-container' style={{ height: '600px', overflow: 'hidden', fontFamily: 'Poppins', background: '#fff', paddingLeft: 0, marginLeft: 0, marginTop: 20 }}>
            <div className="row home-row" >
                
                
                <img src={distance2} alt='Stay Home' className='img-fluid home-img' style= {{ width: '50%', height:'100%'}}/>
                
                
            </div>
        </div>
    )
}

export default Information