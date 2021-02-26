import React, {useState} from 'react'
import { Form, Input, Button } from '../../styles/styled-components'
import {colors} from "../../styles/colors";

const ActiveCampForm = (props) => {
    const [defaultMsg, setDefaultMsg] = useState(null)
    const url = "https://kenzie39049.activehosted.com/proc.php"
    console.log(defaultMsg)

    const {orange} = colors

    const onFieldBlank = e => {
        e.preventDefault()

        if (e.target.placeholder === "Nome") {
            setDefaultMsg(true)
        } else if (e.target.placeholder === "Email") {
            setDefaultMsg(true)
        } else if (e.target.placeholder === "Telefone") {
            setDefaultMsg(true)
        }
    }

    return (
        <Form method="POST" action={url}  validate>
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />


            <label>{props.label}</label>
            <Input type="text" name="fullname" placeholder="Nome" required onInvalid={onFieldBlank} />
            <Input type="text" name="email" placeholder="Email" required onInvalid={onFieldBlank}/>
            <Input type="text" name="phone" placeholder="Telefone" required onInvalid={onFieldBlank}/>

            <Button id="_form_1_submit" class="_submit" type="submit">
                Fazer meu cadastro
            </Button>

            {defaultMsg === true ? props.width >= 650 ? <h3 style={{"color": orange}}>Você precisa preencher todos os campos </h3> :
                <p style={{"color": orange, "font-size": "14px"}}>Você precisa preencher todos os campos</p> : null}
        </Form>
    )
}

export default ActiveCampForm