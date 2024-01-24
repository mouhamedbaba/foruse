import { Html, Head, Main, NextScript } from "next/document";

import { useToggle } from "@/hooks/useToggle"
import { useState } from "react";
export default function Document() {

  const [dark, setDark] = useState(false)  

  const handleSetDark = () =>{
    setDark(!dark)
    console.log(dark);
    
  }

  return (
    <Html lang="fr" className={useToggle() ? "dark" : "light"}>
      <Head />
      <body className="max-h-screen overflow-hidden dark:bg-slate-900 bg-slate-200 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
