const TernaryRender=()=>{
    let value = false
    let per = 24
    let theme = "dark"
    return(
        <div>
            {value ? <h1>Hello</h1>: <h1>Bye</h1>}
            {per>70?<p>A grade</p> : (per>50 && per<70) ? <p>B grade</p> : (per>35 && per<50) ? <p>C grade</p> : <p>fail</p>}

            <h1 style={theme==="dark"?{backgroundColor:"aqua"} : {backgroundColor:"hotpink",color:"white"}}>Amit</h1>

            <div className={`box ${theme==="dark"?"dark":"light"}`}></div>
        </div>
    )
}
export default TernaryRender