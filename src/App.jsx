import { ToastContainer } from "react-toastify"
import ConditionalRendering from "./concepts/conditionalRendering/ConditionalRendering"
import TernaryRender from "./concepts/conditionalRendering/TernaryRender"
import FromHandling from "./concepts/formhandling/FromHandling"
import Reactfragment from "./concepts/fragments/Reactfragment"
import HooksHome from "./concepts/hooks/HooksHome"
import Icons_implimentation from "./concepts/iconsimplimentation/Icons_implimentation"
import JsxExpression from "./concepts/jsxexpression/JsxExpression"
import ListAndKeys from "./concepts/listandkeys/ListAndKeys"
import PropsHome from "./concepts/props/PropsHome"
import AxiosConcept from "./concepts/axiosconcept/AxiosConcept"
import Tailwindcssconcept from "./concepts/tailwindcssconcept/Tailwindcssconcept"
import RouterLayout from "./concepts/reactrouting/RouterLayout"
import PropsDrilling from "./concepts/propsdrilling/PropsDrilling"
import ContextApiConcept from "./concepts/contextapi/ContextApiConcept"
import Hoc1 from "./concepts/hoc/Hoc1"
import ReactOptimization from "./concepts/optimization/ReactOptimization"
import CrudOperationHome from "./concepts/crudoperation/CrudOperationHome"

const App = () => {
    return (
        <div id="app">
            {/* <JsxExpression /> */}
            {/* <ConditionalRendering/> */}
            {/* <TernaryRender/> */}
            {/* <PropsHome/> */}
            {/* <Icons_implimentation/> */}
            {/* <HooksHome/> */}
            {/* <Reactfragment/> */}
            {/* <ListAndKeys/> */}
            {/* <FromHandling /> */}
            {/* <AxiosConcept/> */}
            {/* <Tailwindcssconcept/> */}
            {/* <RouterLayout /> */}
            {/* <PropsDrilling/> */}
            {/* <ContextApiConcept/> */}
            {/* <Hoc1/> */}
            {/* <ReactOptimization/> */}
            <ToastContainer />
            <CrudOperationHome/> 
        </div>
    )
}

export default App