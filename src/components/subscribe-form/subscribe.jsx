import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FormContainer, Form, Input, Button } from '../../styles/styled-components'
import { FetchData } from '../../services/api'


const Subscribe = () => {
    const [email, setEmail] = useState()
    const history = useHistory()



    const url = "https://kenzie80793.api-us1.com/api/3/contacts"

    const handleSubmit = e => {
        e.preventDefault()

        FetchData(url, JSON.stringify(
            {
                "contact": {
                    "email": email
                }
            }
        ))
    }

    const dispatchEmail = e => {
        setEmail(e.target.value)
        console.log(email)
    }

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Input type="text" value={email} onChange={dispatchEmail} placeholder="Insira aqui o seu melhor e-mail" />
                <Button>Fazer meu cadastro</Button>
            </Form>
        </FormContainer>
    )
}

export default Subscribe


//NWE SUBSCRIBER TO HUBSPOT
//Create the new request
        // const xhr = new XMLHttpRequest()
        // const url = "https://api.hsforms.com/submissions/v3/integration/submit/6600573/e975bc32-753f-492b-b9c6-d5d45545e106"

        // //JSON Request
        // const data = {
        //     "fields": [
        //         {
        //             "name": "email",
        //             "value": email
        //         }
        //     ],
        //     "context": {
        //         "pageUri": "https://ninguemmesegura.kenzie.com.br/",
        //         "pageName": "Cadastre-se | Kenzie.com.br"
        //     }
        // }

        // const final_data = JSON.stringify(data)

        // xhr.open('POST', url)
        // xhr.setRequestHeader('Content-Type', 'application/json')

        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4 && xhr.status === 200) {
        //         history.push('/obrigado'); // Returns a 200 response if the submission is successful.
        //     } else if (xhr.readyState === 4 && xhr.status === 400) {
        //         console.error(xhr.responseText); // Returns a 400 error the submission is rejected.          
        //     } else if (xhr.readyState === 4 && xhr.status === 403) {
        //         console.error(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
        //     } else if (xhr.readyState === 4 && xhr.status === 404) {
        //         console.error(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
        //     }
        // }

        // //Sends the request
        // xhr.send(final_data)