import React from 'react';

const Footer = () => {
    const data_kip = [ 'data_1', 'data_2']

    // iterasi/iterate (perulangan)
    data_kip.forEach(
        function(data){
            console.log(`Data KIP: ${data}`);
        }
    )

    // map/reduce (transform/perubahan)
    const data_kip_baru = data_kip.map(
        function(data){
            console.log(`Data KIP Map/Reduce: ${data}`);
        }
    )

    return (
        <div>
            
        </div>
    );
}

export default Footer;
