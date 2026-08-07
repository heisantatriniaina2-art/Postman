import { useState, useEffect } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log("Mounted");
    }, []);

    useEffect(() => {
        console.log('Count: ${count}');
        document.title = 'Count: ${count}';
    }, [count]);

    return (
        <div className="counter">
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Count;


/*
 - useState : fonction que retourne un tableau à deux élements
 - State : réafficher le composant (C'est une variable)
 - useEffect: 
 -Afficher la liste des pokémon 1-100 dans le contenu
 - id, image, nom(en anglais), 
*/
