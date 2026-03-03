const JsxExpression = () => {

//! how to use js functions || how to call js functions

//! if a function is returing a jsx element then only we called as a component , if it's not returing any jsx element thrn it is a normal javascript function

//! inside the jsx expression if we want to use conditional statement then we need to use ternary operator .If we  want to use loop then map method

    let username = "Amit"
    let demo=()=>{
        console.log("demo function")
    }

    let is_active = true
    if(is_active===true){
        console.log("true block")
    }
    else{
        console.log("false block")
    }

    let arr = ["amit","ankit","krish","babul"]
    return (
        <div>
           {/* <h1>{username}</h1>
           {username = "ankit"}
           <br />
           {username} */}

           {/* {
            let val =20
           } */}
           
           <button onClick={demo}>Click</button>

           {
            is_active?<h1>I am safe</h1> : <h1>I am dead </h1>
            }

            <h1>{arr[0]}</h1>
            <h1>{arr[1]}</h1>
            <h1>{arr[2]}</h1>
            <h1>{arr[3]}</h1>

            <hr />

            {
                arr.map((ele)=>{
                    return <h1>{ele}</h1>
                })
            }

        </div>
    )
}
export default JsxExpression
