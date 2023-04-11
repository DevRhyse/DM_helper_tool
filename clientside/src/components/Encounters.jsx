import React from "react";

export function Encounters () {

    const encounterMap = () => {
        encounters.map((ele, index, array) => {
            return (
                <div>
                    <span>{`Creature: ${ele.creature}`}</span>
                    <span>{`Completed: ${ele.completed}`}</span>
                    <span>{`Challenge Rating: ${ele.challengeRating}`}</span>
                </div>
            )
        })
    }

    return (
        <div className="grid col-start-4 row-start-2 row-span-3 border-solid border-2 border-slate-950">
            {encounterMap}
        </div>
    )
}