import React from "react";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption";

  component?: "h1" | "h2" | "h3" | "h5" | "div" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  weight?: "medium" | "regular" | "bold";
  theme?:
    | "black"
    | "grey"
    | "white"
    | "secondary"
    | "primary"
    | "success"
    | "danger"
    | "warning";
}

export const Typography = ({
  variant = "body-sm",
  component: Component = "div",
  children,
  className,
  weight = "regular",
  theme = "black",
}: Props) => {
  let variantStyle:string ="", weightStle:string ="", colorStyle:string ="";

  switch (variant) {
    case "display":
      variantStyle = "text-6xl";
      break;
    case "h1":
      variantStyle = "text-5xl";
      break;
    case "h2":
      variantStyle = "text-4xl";
      break;
    case "h3":
      variantStyle = "text-3xl";
      break;
    case "h4":
      variantStyle = "text-2xl";
      break;
    case "h5":
      variantStyle = "text-xl";
      break;
    case "body-lg":
      variantStyle = "text-lg";
      break;
    case "body-base":
      variantStyle = "text-base";
      break;
    case "body-sm":
      variantStyle = "text-sm";
      break;
    case "caption":
      variantStyle = "text-xs ";
      break;

    default:
      break;
  }

  switch (theme) {
    case "black":
      colorStyle = "text-black";
      break;
    case "white":
      colorStyle = "text-white";
      break;
    case "primary":
      colorStyle = "text-primary";
      break;
    case "secondary":
      colorStyle = "text-secondary";
      break;
    case "success":
      colorStyle = "text-success";
      break;
    case "danger":
      colorStyle = "text-danger";
      break;
    case "warning":
      colorStyle = "text-warning";
      break;
  }

  return (
    <Component className={`${variantStyle} ${colorStyle} font-${weight} ${className} `}>
      {children}
    </Component>
  );
};
