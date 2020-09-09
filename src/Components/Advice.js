import React from 'react'
import {Link} from 'react-router-dom'
import handwash from "../images/handwash.png"


const Advice = () => {
    return (
           <div className='container-fluid home-container' style={{ height: 'fit-content', overflow: 'hidden', fontFamily: 'Poppins', background: '#fff', paddingLeft: 0, marginLeft: 0, marginTop: 20 }}>
                <div className="row home-row">
                    <div className='col-lg-5 offset-lg-1 col-8 offset-2' style={{ padding: '12% 0px 180px', }}>
                        
                        <h2 className='mt-5' style={{ fontSize: '50px' }}>Please stay home if you're sick and remember to wash your hands</h2>
                    </div>
                    <div className='col-lg-5 mr-3'>
                        <img src={handwash} alt='Stay Home' className='img-fluid home-img' />
                    </div>
                    
                </div>
            </div>
    )
}

export default Advice
