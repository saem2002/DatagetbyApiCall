import React  from 'react';

import { useNavigate } from 'react-router-dom';

const Updatecard = ({ firstname,lastname, gender, city, State, country,setstoreuserDetails ,phone,date,picture}) => {
  const navigate = useNavigate();
  const afterclick=()=>{
    navigate(`/${firstname}${lastname}`)
    setstoreuserDetails({phone:phone,date:date,picture:picture})

  }
  return (
    
    <>


      <div className='updatecard'>

 
      
          <div className='Item_details' style={{fontWeight:'bold',cursor:'pointer'}} onClick={()=>afterclick()}>{firstname} {lastname} </div>
          <div className='Item_details' >{gender}</div>
          <div className='Item_details'>{city} </div>
          <div className='Item_details' >{State} </div>
          <div className='Item_details' >{country} </div>
          
 
 

      </div>





    </>
  );
};

export default Updatecard;
