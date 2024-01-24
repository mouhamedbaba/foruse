import  Head  from "next/head"

interface Props{
    title : string,
    description : string,
}

export const Seo = ({title, description}:Props) =>{

    
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content={description} />
            {/* <link rel="icon" href="/favicon.ico"  /> */}
            {/* <link rel="stylesheet" href="/assets/Overlayscrollbars/Overlayscrollbars.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" defer></script>
            <script src="/assets/overlayscrollbars/OverlayScrollbars.min.js" defer></script> */}
        </Head>
    )
}