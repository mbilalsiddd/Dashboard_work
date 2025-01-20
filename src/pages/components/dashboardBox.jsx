import React from 'react'


const DashboardBox = (props) => {
  return (
    <>
      <div className='dashboardbox'  style={{
        backgroundImage:`linear-gradient(to right, ${props.color?.[0]}  , ${props.color?. [1]})`
      }}>
        <div className='d-flex w-100'>
            <div className='col1 mb-0'>
                <h4 className='text-white'>{props.name}</h4>
                <span className='text-white'>{props.message}</span>
            </div>

            <div className='ms-auto '>
                {
                    props.icon?
                    <span className='icon'>
                        {props.icon ? props.icon : ''}
                    </span> 
                     
                    :
                    ""
                }
              
            </div>
        </div>
        
    </div>
 
    </>
  )
}

export default DashboardBox
