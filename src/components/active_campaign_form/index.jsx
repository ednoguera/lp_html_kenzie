import React from 'react'
import { Form, Input, Button } from '../../styles/styled-components'

const ActiveCampForm = () => {
    return (
        <Form method="POST" action="https://kenzie80793.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form  _dark" novalidate>
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />

            <Input type="text" name="email" placeholder="Insira aqui seu melhor e-mail" required />

            <Button id="_form_1_submit" class="_submit" type="submit">
                Fazer meu cadastro
            </Button>
        </Form>
    )
}

export default ActiveCampForm

