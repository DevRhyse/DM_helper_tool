import React from "react";

export function SignUp(prop){
    
    return (
        <div className='grid grid-cols-5 grid-rows-5'>
            <div className="grid border-solid border-2 border-slate-950 row-start-2 col-start-3">
                <form
                    action="/signup" 
                    method="POST" 
                    className="grid grid-flow-row gap-1">

                        <label htmlFor="user">
                            User
                        </label>
                        <input 
                            type="text"
                            name="user"
                            />

                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text" 
                            name="email"
                            />

                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            />

                        <button
                            type="submit"
                            onClick={prop.handleClick}
                            className="mt-1 border-solid border-2 border-green-500">
                            Submit
                        </button>        
                </form>
                    <button
                        type="button"
                        onClick={prop.handleClick}
                        className="mt-1 border-solid border-2 border-green-500">
                        Cancel
                    </button>       
            </div>
        </div>
    )
}