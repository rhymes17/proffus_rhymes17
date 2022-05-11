import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";


const useFirestore = (col) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const docRef = collection(db, 'category')
        const q = query(docRef);
    
       const unsub = onSnapshot(q, querySnapshot => {
            let category = []
            querySnapshot.forEach(doc => {
                category.push({...doc.data(), id: doc.id});
            })
            setDocs(category);
        });

        return () => unsub();

    }, [col, docs])

    return { docs }
}

export default useFirestore