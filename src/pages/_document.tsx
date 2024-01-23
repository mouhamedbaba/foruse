import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="min-h-screen max-h-screen overflow-hidden bg-slate-300 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
