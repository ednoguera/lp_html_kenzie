import React from 'react'
import { Form, Input, Button } from '../../styles/styled-components'

const ActiveCampForm = (props) => {
    return (
        <Form method="POST" action="https://kenzie39049.activehosted.com/proc.php" id="_form_1_" className="_form _form_1 _inline-form  _dark" noValidate>
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />


            <label>{props.label}</label>
            <Input type="text" name="nome" placeholder="Nome" required />
            <Input type="text" name="email" placeholder="Email" required />
            <Input type="text" name="telefone" placeholder="Telefone" required />

            <Button id="_form_1_submit" class="_submit" type="submit">
                Fazer meu cadastro
            </Button>
        </Form>
    )
}

export default ActiveCampForm

// <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Roboto&display=swap" rel="stylesheet">
// <form method="POST" action="https://kenzie39049.activehosted.com/proc.php" id="_form_1_" className="_form _form_1 _inline-form  _dark" noValidate>
// <input type="hidden" name="u" value="1" />
// <input type="hidden" name="f" value="1" />
// <input type="hidden" name="s" />
// <input type="hidden" name="c" value="0" />
// <input type="hidden" name="m" value="0" />
// <input type="hidden" name="act" value="sub" />
// <input type="hidden" name="v" value="2" />
// <div className="_form-content">
// <div className="_form_element _x34930459 _full_width _clear" >
// <div className="_html-code">
// <p>
// Adicione uma mensagem descritiva dizendo o que seu visitante pode esperar aqui.
// </p>
// </div>
// </div>
// <div className="_form_element _x49145981 _full_width " >
// <label className="_form-label">
// Nome completo
// </label>
// <div className="_field-wrapper">
// <input type="text" name="fullname" placeholder="Digite seu nome" />
// </div>
// </div>
// <div className="_form_element _x94312672 _full_width " >
// <label className="_form-label">
// Telefone*
// </label>
// <div className="_field-wrapper">
// <input type="text" name="phone" placeholder="Digite seu telefone" required/>
// </div>
// </div>
// <div className="_form_element _x88027164 _full_width " >
// <label className="_form-label">
// E-mail*
// </label>
// <div className="_field-wrapper">
// <input type="text" name="email" placeholder="Digite seu e-mail" required/>
// </div>
// </div>
// <div className="_form_element _field1 _full_width " >
// <input type="hidden" name="field[1]" value="" />
// </div>
// <div className="_button-wrapper _full_width">
// <button id="_form_1_submit" className="_submit" type="submit">
// Enviar
// </button>
// </div>
// <div className="_clear-element">
// </div>
// </div>
// <div className="_form-thank-you" style="display:none;">
// </div>
// }
// if (typeof window._form_callback !== 'undefined') window._form_callback(id);
// };
// window._show_error = function(id, message, html) {
// var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
// if (old_error) old_error.parentNode.removeChild(old_error);
// err.innerHTML = message;
// err.className = '_error-inner _form_error _no_arrow';
// var wrapper = document.createElement('div');
// wrapper.className = '_form-inner';
// wrapper.appendChild(err);
// button.parentNode.insertBefore(wrapper, button);
// document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
// if (html) {
// var div = document.createElement('div');
// div.className = '_error-html';
// div.innerHTML = html;
// err.appendChild(div);
// }
// };
// window._load_script = function(url, callback) {
// var head = document.querySelector('head'), script = document.createElement('script'), r = false;
// script.type = 'text/javascript';
// script.charset = 'utf-8';
// script.src = url;
// </form>