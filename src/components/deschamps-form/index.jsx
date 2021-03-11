import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "../../styles/styled-components";
import { colors } from "../../styles/colors";
import { Terms } from "./styles";

const DeschampsForm = (props) => {
  const { orange } = colors;

  const [defaultMsg, setDefaultMsg] = useState(null);
  const [utmSource, setUtmSource] = useState("no-tracking");
  const [utmMedium, setUtmMedium] = useState("no-tracking");
  const [utmCampaign, setUtmCampaign] = useState("no-tracking");

  const url = "https://kenzie39049.activehosted.com/proc.php?id=7";
  const pathname = window.location.href;
  let paramsUrl = false;
  let params = false;

  const getUrlParams = () => {
    if (pathname.length > 39) {
      paramsUrl = pathname.split("?")[1];
      params = paramsUrl.split("&");
      setUtmSource(params[0].split("=")[1]);
      setUtmMedium(params[1].split("=")[1]);
      setUtmCampaign(params[2].split("=")[1]);
    }
  };

  const error = (
    <p style={{ color: orange, "font-size": "14px" }}>
      Você precisa preencher todos os campos
    </p>
  );

  const onFieldBlank = (e) => {
    e.preventDefault();
    if (e.target.placeholder === "Email") {
      setDefaultMsg(true);
    }
  };

  useEffect(() => {
    getUrlParams();
  });

  return (
    <Form
      method="POST"
      action={url}
      id="_form_1_"
      className="_form _form_1 _inline-form  "
      validate
    >
      <input type="hidden" name="u" value="1" />
      <input type="hidden" name="f" value="1" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />

      <label>{props.label}</label>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        required
        onInvalid={onFieldBlank}
        id="email-input"
      />

      <div className="_form_element _field1 _full_width ">
        <input type="hidden" name="field[1]" value={utmSource} />
      </div>
      <div className="_form_element _field3 _full_width ">
        <input type="hidden" name="field[3]" value={utmMedium} />
      </div>
      <div className="_form_element _field4 _full_width ">
        <input type="hidden" name="field[4]" value={utmCampaign} />
      </div>

      <Button id="_form_1_submit" className="_submit" type="submit">
        ENTRAR NO GRUPO AGORA
      </Button>

      <Terms>
        Ao se cadastrar, você concorda com os{" "}
        <a
          href="https://formulario.kenzie.com.br/termos-condicoes"
          target="_blank"
          rel="noreferrer"
        >
          termos de uso
        </a>{" "}
        e privacidade da Kenzie Academy Brasil
      </Terms>

      {defaultMsg === true ? (
        props.width >= 650 ? (
          <h3 style={{ color: orange }}>
            Você precisa preencher o campo de email{" "}
          </h3>
        ) : (
          error
        )
      ) : null}
    </Form>
  );
};

export default DeschampsForm;
