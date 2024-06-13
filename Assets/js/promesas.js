
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
import { db } from "./firebase.js";
export const registrarJugador = async(jugador)=>{
    const docRef = await addDoc(collection(db, "jugadores"), jugador);
};

export const obtenerJugadores = async()=>{
    const ref = collection(db, "jugadores");
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc) => {
        console.log(doc.id);
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado);
    return listado;
}
export const actualizarJugador = async(jugador,id)=>{
    const ref = doc(db,"jugadores",id);
    await updateDoc(ref,jugador)
}
export const eliminarJugador = async(id)=>{
    const ref = doc(db,"jugadores",id);
    await deleteDoc(ref);
}