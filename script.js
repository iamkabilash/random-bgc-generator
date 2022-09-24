const button = document.getElementById("button");

const randomColor = () =>{
    let numbers = "0123456789ABCDEF";
    let hex = "#";
    for (let i=0; i<6; i++){
        hex = hex + numbers[Math.floor(Math.random() * 16)]
    }
    return hex;
}

const changeColor = () =>{
    // document.body.style.backgroundColor = randomColor();
    document.body.style.backgroundImage = "linear-gradient(to right, " +randomColor()+ ", "+ randomColor() + ")";
}


button.addEventListener("click", changeColor);