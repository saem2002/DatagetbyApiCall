import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/Api';
import Updatecard from './Updatecard';
import './HomePage.css'
const HomePage = ({ setstoreuserDetails }) => {
    const [Items, setItems] = useState([]);
    useEffect(() => {
        const setitems = async () => {
            const data = await getUsers('https://randomuser.me/api/?results=10');
            setItems(data);

        }
      
            setitems();
   


    }, []);
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                    {Items.length === 0 && "Loading"}
                </div>
            </div>

            {Items.length > 0 && <>
                <div className='Update_card_map'>

                    <div className='updatecardHome' >
                        <div className='Item_details' style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Name</div>
                        <div className='Item_details' style={{ fontWeight: 'bold' }}>Gender</div>
                        <div className='Item_details' style={{ fontWeight: 'bold' }}>City </div>
                        <div className='Item_details' style={{ fontWeight: 'bold' }}>State </div>
                        <div className='Item_details' style={{ fontWeight: 'bold' }}>Country </div>


                    </div>



                    {Items && Items.map((data, index) =>
                        <>




                            <Updatecard
                                firstname={data.name.first}
                                lastname={data.name.last}
                                setstoreuserDetails={setstoreuserDetails}
                                gender={data.gender}
                                phone={data.phone}
                                date={data.dob.date}
                                picture={data.picture.large}
                                city={data.location.city}
                                State={data.location.state} country={data.location.country} />
                            <div className='line_update' ></div>





                        </>
                    )}
                </div>         </>
            }
        </>
    )
}

export default HomePage