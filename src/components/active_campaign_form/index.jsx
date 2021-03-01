import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import { Form, Input, Button } from '../../styles/styled-components'
import {colors} from "../../styles/colors";

const ActiveCampForm = (props) => {
    const [defaultMsg, setDefaultMsg] = useState(null)
    const [utmSource, setUtmSource] = useState("local")
    const [utmMedium, setUtmMedium] = useState("local")
    const [utmCampaign, setUtmCampaign] = useState("local")

    const url = "https://kenzie39049.activehosted.com/proc.php"

    // const pathname = "https://startsuacarreira.kenzie.com.br/?utm_source=teste&utm_medium=utmbuilder&utm_campaign=daniel"
    const pathname = window.location.href

    let paramsUrl = false
    let params = false

    const getUrlParams = () => {
        if (pathname.length > 39) {
                paramsUrl = pathname.split("?")[1]
                params = paramsUrl.split("&")

                setUtmSource(params[0].split("=")[1])
                setUtmMedium(params[1].split("=")[1])
                setUtmCampaign(params[2].split("=")[1])
            }
    }



    const {orange} = colors

    const error = <p style={{"color": orange, "font-size": "14px"}}>Você precisa preencher todos os campos</p>

    const onFieldBlank = e => {
        e.preventDefault()


        if (e.target.placeholder === "Email") {
            setDefaultMsg(true)
        }

    }


    useEffect(() => {
        getUrlParams()
    })

    return (
        <Form method="POST" action={url}  id="_form_1_" className="_form _form_1 _inline-form  " validate>
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />



            <label>{props.label}</label>
            {/*<Input type="text" name="fullname" placeholder="Nome" required onInvalid={onFieldBlank} />*/}
            <Input type="text" name="email" placeholder="Email" required onInvalid={onFieldBlank}/>
            {/*<Input type="text" name="phone" placeholder="Telefone" required onInvalid={onFieldBlank}/>*/}
            <div className="_form_element _field1 _full_width " >
                <input type="hidden" name="field[1]" value={utmSource} />
            </div>
            <div className="_form_element _field3 _full_width " >
                <input type="hidden" name="field[3]" value={utmMedium} />
            </div>
            <div className="_form_element _field4 _full_width " >
                <input type="hidden" name="field[4]" value={utmCampaign} />
            </div>
            <Button id="_form_1_submit" class="_submit" type="submit">
                Fazer meu cadastro
            </Button>
            {defaultMsg === true ? props.width >= 650 ? <h3 style={{"color": orange}}>Você precisa preencher todos os campos </h3> :
               error  : null}


        </Form>
    )
}

export default ActiveCampForm