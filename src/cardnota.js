import React from 'react';

function Cardnota (date, nota){
    
    return (
        <div>
            <body style={{margin: 0}}>
                <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr));"}}>
                    <div style={{boxShadow: "4px 4px 20px black", borderRadius:"3px", backgroundColor:"#464646", height:"auto", width:"96vw", marginLeft:"2vw", marginRight:"2vw", marginTop:"20px", paddingBottom:"5px", paddingTop:"5px"}}>
                        <div style={{color:"white", fontSize:"13px", textAlign:"left", marginLeft:"5px", marginRight:"5px"}}>
                            {date}
                        </div>
                        <div style={{color:"white", fontSize:"15px", textAlign:"left", marginLeft:"5px", marginRight:"5px"}}>
                            {nota}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Cardnota;