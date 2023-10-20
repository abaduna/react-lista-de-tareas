import {render } from "@testing-library/react"


import footer from "./footer"


describe("footer",()=>{
    test("probando el footer",()=>{
        const {getByText  } = render(<footer/>)
        getByText (/Author: ABaduna/i)
        getByText (/San lorenzo 1234 pepito/i)

        getByText (/Contacto/i)
        getByText (/Lorem/i)
        getByText (/correo@example.com/i)
        





    })
    
})