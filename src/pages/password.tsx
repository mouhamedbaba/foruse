import React, { useState } from "react";
import { auth } from "@/config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
interface Props {
  email: string;
  password: string;
}

export const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Enregistrement réussi
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Gestion des erreurs
    }
  };

  return (
    <div>
      <h1>S'inscrire avec une adresse e-mail</h1>

      <form onSubmit={createUser}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};
