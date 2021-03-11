import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { Form, Input, Button } from "../../styles/styled-components";
import { Terms } from "./styles";

import querySearch from "stringquery";
import axios from "axios";

const DeschampsForm = (props) => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const [params, setParams] = useState({
    utm_source: "no-tracking",
    utm_campaign: "no-tracking",
    utm_medium: "no-tracking",
    hsa_ad: "no-tracking",
    hsa_grp: "no-tracking",
    hsa_cam: "no-tracking",
    hsa_src: "no-tracking"
  });

  useEffect(() => {
    const urlParams = querySearch(location.search);

    const trackedParams = {};
    for (let param in params) {
      if (urlParams[param]) {
        trackedParams[param] = urlParams[param];
      }
    }

    setParams({ ...params, ...trackedParams });
  }, []);

  const onSubmit = (data) => {
    try {
      //Need to rename a few fields to get this to work with activecampaign
      let preppedData = {
        "field[1]": data.utm_source,
        "field[3]": data.utm_campaign,
        "field[4]": data.utm_medium,
        "field[8]": data.hsa_ad,
        "field[9]": data.hsa_grp,
        "field[10]": data.hsa_cam,
        "field[11]": data.hsa_src,
        ...data
      };

      //Remove the old custom field (renamed above)
      const {
        utm_source,
        utm_campaign,
        utm_medium,
        hsa_ad,
        hsa_grp,
        hsa_cam,
        hsa_src,
        ...cleaned
      } = preppedData;

      //Convert to FormData
      let form_data = new FormData();
      for (let key in cleaned) {
        form_data.append(key, cleaned[key]);
      }

      console.log("ok");

      axios.post(
        "https://kenzie39049.activehosted.com/proc.php",
        { "Access-Control-Allow-Headers": "no-cors" },
        form_data
      );
    } catch (error) {
      // handle server errors
      console.log("Request failed", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} method="post">
      <input
        type="hidden"
        name="u"
        value="7"
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="f"
        value="7"
        ref={register({ required: true })}
      />
      <input type="hidden" name="s" ref={register({})} />
      <input
        type="hidden"
        name="c"
        value="0"
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="m"
        value="0"
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="act"
        value="sub"
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="v"
        value="2"
        ref={register({ required: true })}
      />

      <input
        type="hidden"
        name="utm_source"
        value={params.utm_source}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="utm_campaign"
        value={params.utm_campaign}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="utm_medium"
        value={params.utm_medium}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="hsa_ad"
        value={params.hsa_ad}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="hsa_grp"
        value={params.hsa_grp}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="hsa_cam"
        value={params.hsa_cam}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="hsa_src"
        value={params.hsa_src}
        ref={register({ required: true })}
      />

      <label>{props.label}</label>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        required
        id="email-input"
      />

      <Button className="_submit" type="submit">
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
    </Form>
  );
};

export default DeschampsForm;
