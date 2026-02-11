
function Button(obj:any){
    console.log("inside different component");
    return <button onClick={()=> obj.onClickHandler(obj.count -1)}>{obj.text}</button>
}

export default Button