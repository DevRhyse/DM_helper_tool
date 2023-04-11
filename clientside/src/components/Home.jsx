import React from "react";

export function Home (prop) {

    return (
        <div className='grid grid-cols-5 grid-rows-5'>
            <div className="grid col-start-2 row-start-1 gap-3 col-span-3">

                <h1 
                    className="grid col-start-2 row-start-2 col-span-2 justify-center">
                    Welcome to the DM encounter helper tool
                </h1>

                <p 
                    className="col-start-2 row-start-3 gap-3 col-span-2 justify-self-center">
                    For the best experience and to save your encounters for later to access on any device, create a free account    quickly with only an email.
                </p>

                <button 
                    className="col-start-2 row-start-4 gap-3 col-span-1" 
                    onClick={prop.handleClick}>
                    Click Me to Create an account
                </button>

                <button
                    className="col-start-3 row-start-4 gap-3 col-span-1">
                    Click Me to Continue as a guest
                </button>

            </div>
        </div>
    )
}