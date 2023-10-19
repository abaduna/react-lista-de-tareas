import {render} from "@testing-library/react"
import App from "../App"



describe("App",()=>{
    test("the form should be render properly",()=>{
        const {getByText} = render(<App/>)
    })
})