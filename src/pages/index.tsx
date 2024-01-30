import React, { useState } from "react";
import { auth, provider, githubProvider, db } from "@/config/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useRouter } from 'next/navigation'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
interface Props {
  email: string;
  password: string;
}

const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        uid:res.user.uid,
        email : email,
      });
      await setDoc(doc(db, "userChats", res.user.uid), {});
      router.push('/chat', { scroll: false })
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Gestion des erreurs
    }
  };



  const GoogleSign = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        alert("ok");
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        alert("error");
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const GitHubSign = async () => {
    await signInWithPopup(auth, githubProvider)
      .then((result) => {
        alert("ok");
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        alert("error");
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <Seo title="Accueil" description="page d'accueil" />
      <div className="md:container mx-auto">
        <div className="md:flex md:justif-center">
          <div className="w-10/12 md:w-8/12 lg:w-6/12 xxl:w-5/12">y
            <div className="max-w-lg mx-auto my-10 p-6 bg-slate-800 rounded-md shadow-md text-white">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Connexion
              </h1>

              <form onSubmit={createUser}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent  border border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold mb-1"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full  bg-transparent border border-secondary rounded-md py-2 px-3 focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-secondary font-bold w-full  py-2 px-4 rounded-md  hover:bg-primary"
                >
                  Sinscrire
                </button>
              </form>
              <hr className="my-6" />
              <p className="text-center ">Ou se connecter avec </p>
              <div className="my-4 flex justify-between gap-4 w-full">
                <button
                  type="button"
                  onClick={GoogleSign}
                  className="mt-2 w-full bg-red-500 hover:bg-red-600 font-semibold text-white py-2 px-4 rounded-md"
                >
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                  Google
                </button>

                <button
                  type="button"
                  onClick={GitHubSign}
                  className="mt-2 w-full bg-slate-900 hover:bg-slate-950  text-white py-2 px-4 rounded-md"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
