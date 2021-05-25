import React from 'react';

function Cardnota (nota, date){
    
    return (
        <div>
            <body style={{margin: 0}}>
                <div class="container" style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr));"}}>
                    <div class="quote" style={{boxShadow: "4px 4px 4px black", borderRadius:"3px", backgroundColor:"white", height:"auto", width:"96vw", marginLeft:"2vw", marginRight:"2vw", marginTop:"20px", paddingBottom:"5px", paddingTop:"5px"}}>
                        <div style={{fontSize:"13px", textAlign:"left", marginLeft:"5px", marginRight:"5px"}}>
                            {new Date().toLocaleString()}
                        </div>
                        <div style={{fontSize:"15px", textAlign:"left", marginLeft:"5px", marginRight:"5px"}}>
                            {nota}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Cardnota;