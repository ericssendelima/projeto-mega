import React, { useState } from 'react';

import './styles.css'

const NewLine = () => {
const [numbers, setNumbers] = useState([]);

const control = [];
    
const handleRandom = () => {
    let teste = [];
    for(let i = 0; i < 6; i++){
        let num = Math.floor(Math.random() * (60) + 1);
        control.push(num);
    };
    teste = [...control.filter(( num, index ) => control.indexOf(num) === index)].sort((a, b) => a - b);

    setNumbers(teste);
};   

    return (
        <div className='container'>
        <div className='list'>
            <ul>
                {numbers.length === 6 
                 ?
                 numbers.map(n =>(<li key={numbers.indexOf(n)}>{n}</li>)) 
                 : 
                 <span className='msg'>
                    <span>Números repetidos.</span>
                    <span>Tente novamente!</span>
                 </span>
                 }
            </ul>
            
            
        </div>

        <button onClick={handleRandom}>Jogar</button>
        
        </div>
    );
}

export default NewLine;
