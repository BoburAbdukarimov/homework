import React from 'react';



function Footer() {
    const d = new Date()
    const year = d.getFullYear()
    return (
     <div className="footer" style={{ position: "absolute", bottom: 0, left: "600px"}}>
         <p>copyright Reserved {year}</p>
     </div>
    );
}

export default Footer;