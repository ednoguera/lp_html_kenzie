import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "../../styles/styled-components";
import { colors } from "../../styles/colors";
import { Terms } from "./styles";
import querySearch from "stringquery";
import { useLocation } from "react-router-dom";

const ActiveCampForm = (props) => {
  const { orange } = colors;
  const location = useLocation();

  const [defaultMsg, setDefaultMsg] = useState(null);
  const [utmSource, setUtmSource] = useState("no-tracking");
  const [utmMedium, setUtmMedium] = useState("no-tracking");
  const [utmCampaign, setUtmCampaign] = useState("no-tracking");
  const [hsaAd, setHsaAd] = useState("no-tracking");
  const [hsaGrp, setHsaGrp] = useState("no-tracking");
  const [hsaCam, setHsaCam] = useState("no-tracking");
  const [hsaSrc, setHsaSrc] = useState("no-tracking");

  const url = "https://kenzie39049.activehosted.com/proc.php";

  const getUrlParams = () => {
    const urlParams = querySearch(location.search);

    setUtmSource(urlParams.utm_source);
    setUtmMedium(urlParams.utm_medium);
    setUtmCampaign(urlParams.utm_campaign);
    setHsaAd(urlParams.hsa_ad);
    setHsaGrp(urlParams.hsa_grp);
    setHsaCam(urlParams.hsa_cam);
    setHsaSrc(urlParams.hsa_src);
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
      id={"_form_" + props.formId + "_"}
      className={"_form _form_" + props.formId + " _inline-form  "}
      validate
    >
      <input type="hidden" name="u" value={props.formId} />
      <input type="hidden" name="f" value={props.formId} />
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
      <div className="_form_element _field8 _full_width ">
        <input type="hidden" name="field[8]" value={hsaAd} />
      </div>
      <div className="_form_element _field9 _full_width ">
        <input type="hidden" name="field[9]" value={hsaGrp} />
      </div>
      <div className="_form_element _field10 _full_width ">
        <input type="hidden" name="field[10]" value={hsaCam} />
      </div>
      <div className="_form_element _field11 _full_width ">
        <input type="hidden" name="field[11]" value={hsaSrc} />
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

export default ActiveCampForm;
