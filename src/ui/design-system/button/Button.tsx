interface Props {
    size? : "sm" | "md" | "lg",
    variant? : "accent" | "secondary" | "desabled" | "icon" | "outline",
    icon? : any,
    iconTheme? : "accent" | "secondary" | "grey",
    iconPosition? : "left" | "right",
    desabled? : boolean,
    isLoading? : boolean,
    children? : React.ReactNode,
}

export const Button = ({size = "md",variant="accent", icon,  iconPosition="right" , iconTheme="accent", desabled, isLoading, children}:Props) =>{
    let variantStyle:string="", sizeStyle:string="", iconSize:number=0

   switch (variant) {
    case "accent": // default
        variantStyle = "bg-secondary hover:bg-primary text-white rounded"
        break;
    case "secondary":
        variantStyle = "bg-primary-300 hover:bg-primary-600/12 text-white rounded"
        break;
    case "outline" :
        variantStyle = "bg-white hover:bg-secondary-200 border border-secondary text-primary rounded"
        break;
    case "desabled" :
        variantStyle = "bg-secondary-400 border boder-secondary-400 text-secondary-600 cursor-not-allowed rounded"
        break;
    case "icon" :
        variantStyle = ""
        break
   }

   switch (size) {
    case "sm": // default
        sizeStyle = "font-regular text-sm px-[30px] py-[8px]"
        break;
    case "md":
        sizeStyle = "text-md font-medium px-[18px] py-[15px]"
        break;
    case "lg" :
        sizeStyle = "font-large text-lg px-[22px] py-[18px]"
        break;
   }
    
    return (
            <button type="button" 
            className={`${variantStyle} ${sizeStyle} font-bold`}
            onClick={() => console.log(this)
            }>
                {children}
            </button>
        )
}