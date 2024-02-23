import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const clear = () => {
        setInput('');
    };
    const DEl = () => {
        if (input.length > 0) {
            setInput(input.slice(0, -1));
        }
    };

    return (
        <div className="container mx-auto mt-10 !overflow-y-hidden">
            <div className="bg-gray-100  rounded p-4">
                <input
                    type="text"
                    className=" h-12 px-4 mb-4 text-[40px] w-full rounded"
                    value={input}
                    readOnly
                />
                <div className="grid grid-cols-4 gap-2">
                    <button className="col-span-2 hover:bg-orange-400 transition duration-300 bg-gray-200 p-4 text-[40px] font-bold rounded" onClick={clear}>
                        C
                    </button>
                    <button className='col-span-1 hover:bg-orange-400 transition duration-300 bg-gray-200 p-4 text-[40px] font-bold rounded' onClick={DEl}  >
                        DEL
                    </button>

                    <button className=" bg-orange-400 p-4 text-[40px] font-bold  hover:bg-gray-200 transition duration-300 rounded" onClick={handleClick.bind(this, '/')}>
                        /
                    </button>
                    <button className=" bg-gray-200  hover:bg-orange-400 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '7')}>
                        7
                    </button>
                    <button className="bg-gray-200  hover:bg-orange-400 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '8')}>
                        8
                    </button>
                    <button className="bg-gray-200  hover:bg-orange-400 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '9')}>
                        9
                    </button>
                    <button className="bg-orange-400  hover:bg-gray-200 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '*')}>
                        *
                    </button>
                    <button className="bg-gray-200 p-4  hover:bg-orange-400 transition duration-300 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '4')}>
                        4
                    </button>
                    <button className="bg-gray-200 p-4  hover:bg-orange-400 transition duration-300 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '5')}>
                        5
                    </button>
                    <button className="bg-gray-200 p-4  hover:bg-orange-400 transition duration-300 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '6')}>
                        6
                    </button>
                    <button className="bg-orange-400  hover:bg-gray-200 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '-')}>
                        -
                    </button>
                    <button className="bg-gray-200 p-4  hover:bg-orange-400 transition duration-300 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '1')}>
                        1
                    </button>
                    <button className="bg-gray-200 p-4  hover:bg-orange-400 transition duration-300 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '2')}>
                        2
                    </button>
                    <button className="bg-gray-200 p-4  hover:bg-orange-400 transition duration-300 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '3')}>
                        3
                    </button>
                    <button className="bg-orange-400  hover:bg-gray-200 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '+')}>
                        +
                    </button>
                    <button className="col-span-2 bg-gray-200  hover:bg-orange-400 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '0')}>
                        0
                    </button>
                    <button className="bg-gray-200  hover:bg-orange-400 transition duration-300 p-4 text-[40px] font-bold rounded" onClick={handleClick.bind(this, '.')}>
                        .
                    </button>
                    <button className="bg-orange-400  hover:bg-gray-200  transition duration-300 p-4 text-[40px] font-bold rounded" onClick={calculate}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
