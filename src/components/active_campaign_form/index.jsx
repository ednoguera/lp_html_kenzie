import React, { useState, useEffect } from "react";
import { colors } from "../../styles/colors";
import { Terms, Form, Input, Button } from "./styles";

import HiddenInputs from "./hidden-inputs";
import CustomHiddenInputs from "./custom-hidden-inputs";

import querySearch from "stringquery";
import { useLocation } from "react-router-dom";

const ActiveCampForm = (props) => {
  const { formId, label, width } = props;
  const { orange } = colors;
  const location = useLocation();

  const [showError, setShowError] = useState(null);

  const [utmSource, setUtmSource] = useState("no-tracking");
  const [utmMedium, setUtmMedium] = useState("no-tracking");
  const [utmCampaign, setUtmCampaign] = useState("no-tracking");
  const [hsaAd, setHsaAd] = useState("no-tracking");
  const [hsaGrp, setHsaGrp] = useState("no-tracking");
  const [hsaCam, setHsaCam] = useState("no-tracking");
  const [hsaSrc, setHsaSrc] = useState("no-tracking");

  const url = "https://kenzie39049.activehosted.com/proc.php";

  useEffect(() => {
    const urlParams = querySearch(location.search);

    setUtmSource(urlParams.utm_source);
    setUtmMedium(urlParams.utm_medium);
    setUtmCampaign(urlParams.utm_campaign);
    setHsaAd(urlParams.hsa_ad);
    setHsaGrp(urlParams.hsa_grp);
    setHsaCam(urlParams.hsa_cam);
    setHsaSrc(urlParams.hsa_src);
  }, []);

  const onFieldBlank = (e) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <Form
      method="POST"
      action={url}
      id={"_form_" + formId + "_"}
      className={"_form _form_" + formId + " _inline-form  "}
      validate
    >
      <HiddenInputs formId={formId} />

      <label>{label}</label>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        required
        onInvalid={onFieldBlank}
        id="email-input"
      />

      <CustomHiddenInputs
        values={[
          utmSource,
          utmMedium,
          utmCampaign,
          hsaAd,
          hsaGrp,
          hsaCam,
          hsaSrc
        ]}
      />

      <Button
        id="_form_1_submit"
        className="_submit"
        type="submit"
        color={colors.green}
      >
        APERTE PARA ENTRAR
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

      {showError === true ? (
        width >= 650 ? (
          <h3 style={{ color: orange }}>
            Você precisa preencher o campo de email
          </h3>
        ) : (
          <p style={{ color: orange, "font-size": "14px" }}>
            Você precisa preencher o campo de email
          </p>
        )
      ) : null}
    </Form>
  );
};

export default ActiveCampForm;
