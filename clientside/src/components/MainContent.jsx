import React from "react";
import { Encounters } from "./Encounters";


export function MainContent () {

    return (
        <div className='grid grid-cols-5 grid-rows-5'>
            <div className="grid border-solid border-2 border-slate-950 row-start-2 col-start-2">
                <form 
                    action="/encounters"
                    method="POST"
                    className="grid grid-flow-row gap-1">
                        <label
                            htmlFor="creature">
                            Creature
                        </label>
                        <input
                            name="creature"
                            type="text"
                            />

                        <label
                            htmlFor="completed">
                            Completed
                        </label>
                        <input
                            name="completed"
                            type="text"
                            />
                        <label
                            htmlFor="challenge">
                            Challenge Rating
                        </label>
                        <input
                            name="challenge"
                            type="number"
                            />

                        <button
                            type="submit"
                            name="create"
                            className="mt-1 border-solid border-2 border-green-500">
                            Create
                        </button>
                </form>
            </div>
            <Encounters/>
        </div>
        
    )
}