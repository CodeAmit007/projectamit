import UseCallbackHook from "./usecallbackhook/UseCallbackHook"
import UseEffectHookHome from "./useeffecthook/UseEffectHookHome"
import UseEffectTask1 from "./useeffecthook/useeffecttask/UseEffectTask1"
import UseMemoHook from "./usememohook/UseMemoHook"
import UseRefHookHome from "./userefhook/UseRefHookHome"
import UseRefHookTask1 from "./userefhook/userefhooktask/UseRefHookTask1"
import StateWithProps from "./usestatehook/statewithprops/StateWithProps"
import UseStateHook from "./usestatehook/UseStateHook"
import UseStateCase1 from "./usestatehook/useStateHookTask/UseStateCase1"
import UseStateTask1 from "./usestatehook/useStateHookTask/UseStateTask1"

const HooksHome=()=>{
    return(
        <div>
            {/* <UseStateHook/> */}
            {/* <UseStateTask1/> */}
            {/* <UseStateCase1/> */}
            {/* <StateWithProps/> */}
            {/* <UseRefHookHome/> */}
            {/* <UseRefHookTask1/> */}
            {/* <UseEffectHookHome/> */}
            {/* <UseEffectTask1/> */}
            {/* <UseMemoHook/> */}
            <UseCallbackHook/>
        </div>
    )
}
export default HooksHome