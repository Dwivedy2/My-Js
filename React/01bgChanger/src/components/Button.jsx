function Button({color, handleClick}) {
    let textColor = "white";
    if(color === "lavender" || color === "yellow" || color === "pink" || color === 'white') {
        textColor = "black";
    }

    return (
        <button 
            className="py-2 px-5 rounded-full shadow-xl" 
            onClick={() => handleClick(color)} 
            style={{color: textColor, backgroundColor: color}}
            >{color[0].toUpperCase() + color.substring(1)}
        </button>
    )
}

export default Button;