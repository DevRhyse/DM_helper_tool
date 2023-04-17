import React from "react";
import { Encounters } from "./Encounters";


export function MainContent () {

    const [creature, setCreature] = React.useState('');
    const [completed, setCompleted] = React.useState('');
    const [challengeRating, setChallengeRating] = React.useState('');

   

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(JSON.stringify({ creature, completed, challengeRating }));
          await fetch('/createEncounter', { creature, completed, challengeRating });
          console.log('Data submitted successfully');
        } catch (error) {
          console.error('Error submitting data', error);
        }
    };

    return (
        <div className='grid grid-cols-5 grid-rows-5'>
            <div className="grid border-solid border-2 border-slate-950 row-start-2 col-start-2">
                <form 
                    action="/encounters"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="grid grid-flow-row gap-1">
                        <label
                            htmlFor="creature">
                            Creature
                        </label>
                        <input
                            name="creature"
                            type="text"
                            value={creature}
                            onChange={(event) => setCreature(event.target.value)}
                            />

                        <label
                            htmlFor="completed">
                            Completed
                        </label>
                        <input
                            name="completed"
                            type="text"
                            value={completed}
                            onChange={(event) => setCompleted(event.target.value)}
                            />
                        <label
                            htmlFor="challengeRating">
                            Challenge Rating
                        </label>
                        <input
                            name="challengeRating"
                            type="number"
                            value={challengeRating}
                            onChange={(event) => setChallengeRating(event.target.value)}
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