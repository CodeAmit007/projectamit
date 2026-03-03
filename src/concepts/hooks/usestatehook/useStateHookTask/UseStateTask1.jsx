import { useState } from "react"
import { GoHeartFill } from "react-icons/go"
import { IoIosHeartEmpty } from "react-icons/io"
import { MdHeartBroken } from "react-icons/md"


const UseStateTask1=()=>{
    const [proposal,setproposal]=useState(null)
    // const [proposal,setproposal]=useState(<IoIosHeartEmpty size={100} />)

    const acceptProposal=()=>{
        setproposal(true)
        // setproposal(<GoHeartFill size={100} fill="red"/>)
    }
    const rejectProposal=()=>{
        setproposal(false)
        // setproposal(<MdHeartBroken size={100} fill="red" />)
    }
    const reset=()=>{
        setproposal(null)
        // setproposal(<IoIosHeartEmpty size={100}/>)
    }

    return(
        <div className="mainbox">
            <div className="box">
                {
                    proposal===null?<IoIosHeartEmpty size={100} />:(proposal===true)?<GoHeartFill size={100} fill="red" />:<MdHeartBroken size={100} fill="red" />
                } 

                
                <div className="btn">
                    <button onClick={acceptProposal}>Accept😍</button>
                    <button onClick={rejectProposal}>Reject😩😭</button>
                    <button onClick={reset}>Change your mind</button>
                </div>
            </div>

        </div>
    )
}
export default UseStateTask1