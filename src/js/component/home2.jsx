import React, { useState, useEffect } from "react";

function Home2() {

    const [color, setColor] = useState('red');
    const [isAlternating, setIsAlternating] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isAlternating) {
            intervalId = setInterval(() => {
                cycleColors();
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isAlternating]);

    const toggleAlternating = () => {
        setIsAlternating(prevState => !prevState);
    };

    const cycleColors = () => {
        setColor(prevColor => {
            if (prevColor === 'red') {
                return 'yellow';
            } else if (prevColor === 'yellow') {
                return 'green';
            } else {
                return 'red';
            }
        });
    };

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-2 bg-dark py-3 mt-5'>
                        <div className='row justify-content-center'>
                            <div className='col d-flex flex-row justify-content-center'>
                                <div onClick={() => setColor('red')} id={color === 'red' ? 'red' : 'darkred'} className='light rounded-circle bg-light'></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col d-flex flex-row justify-content-center'>
                                <div onClick={() => setColor('yellow')} id={color === 'yellow' ? 'yellow' : 'darkyellow'} className='light rounded-circle bg-light'></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col d-flex flex-row justify-content-center'>
                                <div onClick={() => setColor('green')} id={color === 'green' ? 'green' : 'darkgreen'} className='light rounded-circle bg-light'><font color='green'></font></div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col d-flex flex-row justify-content-center'>
                                <button onClick={toggleAlternating} className='btn btn-primary'>{isAlternating ? 'Stop Alternating' : 'Start Alternating'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home2;
