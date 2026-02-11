import "./style.css"

function Button({onButtonClick = ()=>{} ,label=""}){

    function handelOnClick(e){
        onButtonClick(e.target.value);
    }

    return (
    <button onClick={handelOnClick} value={label}>{label}</button>
    )
}

export default Button