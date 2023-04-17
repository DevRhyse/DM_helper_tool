import React from "react";

export function Encounters () {

    const [encounters, setEncounters] = React.useState([]);

    React.useEffect(() => {
      fetchEncounters();
    }, []);

    const fetchEncounters = async () => {
      try {
        const response = await fetch('/encounters');
        // console.log(response)
        const data = await response.json()
        console.log(data)
        setEncounters(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    return (
        <div className="grid col-start-4 row-start-2 row-span-3 border-solid border-2 border-slate-950">
            {/* {encounterMap} */}
            {encounters && encounters.map((item) => (
                <div key={item.id}>
                    <h2>{item.creature}</h2>
                    <p>{item.challengeRating}</p>
                </div>
            ))}

        </div>
    )
}