import React, { useState } from 'react';
import './App.css';

function App() {
    const [display, setDisplay] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setDisplay(eval(display));
            } catch (error) {
                setDisplay('Error');
            }
        } else if (value === 'AC') {
            setDisplay('');
        } else if (value === 'DE') {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <form>
                    <div className="display">
                        <input type="text" name="display" value={display} readOnly />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={() => handleButtonClick('AC')} className="operator" />
                        <input type="button" value="DE" onClick={() => handleButtonClick('DE')} className="operator" />
                        <input type="button" value="." onClick={() => handleButtonClick('.')} className="operator" />
                        <input type="button" value="/" onClick={() => handleButtonClick('/')} className="operator" />
                    </div>
                    <div>
                        <input type="button" value="7" onClick={() => handleButtonClick('7')} />
                        <input type="button" value="8" onClick={() => handleButtonClick('8')} />
                        <input type="button" value="9" onClick={() => handleButtonClick('9')} />
                        <input type="button" value="*" onClick={() => handleButtonClick('*')} className="operator" />
                    </div>
                    <div>
                        <input type="button" value="4" onClick={() => handleButtonClick('4')} />
                        <input type="button" value="5" onClick={() => handleButtonClick('5')} />
                        <input type="button" value="6" onClick={() => handleButtonClick('6')} />
                        <input type="button" value="-" onClick={() => handleButtonClick('-')} className="operator" />
                    </div>
                    <div>
                        <input type="button" value="1" onClick={() => handleButtonClick('1')} />
                        <input type="button" value="2" onClick={() => handleButtonClick('2')} />
                        <input type="button" value="3" onClick={() => handleButtonClick('3')} />
                        <input type="button" value="+" onClick={() => handleButtonClick('+')} className="operator" />
                    </div>
                    <div>
                        <input type="button" value="00" onClick={() => handleButtonClick('00')} />
                        <input type="button" value="0" onClick={() => handleButtonClick('0')} />
                        <input type="button" value="=" className="equal" onClick={() => handleButtonClick('=')} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;