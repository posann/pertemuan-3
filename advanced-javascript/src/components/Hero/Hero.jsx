import React from 'react';

const Hero = () => {

    const fetchData = async() => {
        const response = await fetch("https://equran.id/api/v2/surat")
        const data = await response.json()
        console.log(data);
    }

    return (
        <div>
        
        </div>
    );
}

export default Hero;
