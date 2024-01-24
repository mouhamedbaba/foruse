export const useTheme = () =>{
    const theme = localStorage.getItem("theme") || 'light'
    return theme
}