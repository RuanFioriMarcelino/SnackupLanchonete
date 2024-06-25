import { auth, collection, database } from "@/config/firebaseconfig";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Usuario {
  idUser: string;
  nome: string;
}

export function useGetUser() {
  const [usuario, setUsuario] = useState<Usuario[]>([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;
    const productCollection = collection(database, "Usuario");
    const unsubscribe = onSnapshot(productCollection, (querySnapshot) => {
      const list: Usuario[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Usuario;
        if (data.idUser === user.uid) {
          list.push({ ...data, idUser: doc.id });
        }
      });
      setUsuario(list);
    });

    return () => unsubscribe();
  }, [user]);

  return usuario;
}