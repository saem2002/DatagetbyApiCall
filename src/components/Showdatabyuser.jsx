import React from 'react'

const Showdatabyuser = ({ storeuserDetails }) => {


    const changeTodate = (Time) => {
        var date = new Date(Time);
        var date1 = new Date();
        var str=String(date)
        var newStr = str.replace( date.getFullYear(),date1.getFullYear());
        var date2 = new Date(newStr)
        console.log(date2)
        var difference = date2 - date1;
        var finalAns =  Math.floor((difference) / (1000*60*60*24))
        if(finalAns>=0){
            return finalAns
        }else{
          
                var newStr2 = str.replace( date.getFullYear(),date1.getFullYear()+1);
                var date3 = new Date(newStr2)
                console.log(date3)
                var difference1 = date3 - date1;
                 finalAns =  Math.floor((difference1) / (1000*60*60*24))
                return finalAns;
            

        }
        

    }



    return (
        <>
            <div style={{ height:'100vh',backgroundColor: 'black', color: 'whitesmoke',display:'flex',flexDirection:'column',justifyContent:'center' }} >
                <div style={{ display: 'flex', marginBottom: '2px',justifyContent:'center' }}>
                    <div style={{ width: '12vw', textAlign: 'center', boxShadow: '0px 1px 5px whitesmoke' }}>Image</div>
                    
                    <div style={{ width: '25vw', textAlign: 'center', boxShadow: '0px 1px 5px whitesmoke' }}>Phone No.</div>
                    <div style={{ width: '25vw', textAlign: 'center', boxShadow: '0px 1px 5px whitesmoke' }}>Days to next birthday</div>

                </div>

                <div style={{ display: 'flex', backgroundColor: 'black', color: 'whitesmoke',justifyContent:'center' }}>
                    <div style={{ width: '12vw', height: '20vh', fontFamily: 'emoji', boxShadow: '0px 1px 1px whitesmoke' }}><img style={{ width: '12vw', height: '20vh' }} src={storeuserDetails.picture} alt='...'></img></div>
                    <div style={{ width: '25vw', height: '20vh', fontFamily: 'emoji', textAlign: 'center', boxShadow: '0px 1px 1px whitesmoke' }}>{storeuserDetails.phone}</div>
                    <div style={{ width: '25vw', height: '20vh', fontFamily: 'emoji', textAlign: 'center', boxShadow: '0px 1px 1px whitesmoke' }}>{changeTodate(`${storeuserDetails.date}`)} </div>

                </div>


            </div>


        </>
    )
}

export default Showdatabyuser