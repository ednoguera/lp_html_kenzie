import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Form, Input, Button } from "../../styles/styled-components";
import { Terms } from "./styles";

import utm from "@segment/utm-params";

const DeschampsForm = (props) => {
  const { register, handleSubmit } = useForm();
  const params = useParams();

  useEffect(() => {
    const srcs = utm(
      "?utm_source=google&utm_medium=medium&utm_term=keyword&utm_content=some%20content&utm_campaign=some%20campaign&utm_test=other%20value"
    );
    console.log(srcs);
    console.log(params);
  }, []);

  const onSubmit = (data) => {
    try {
      //Need to rename a few fields to get this to work with activecampaign
      let preppedData = { "field[14]": data.custom, ...data };

      //Remove the old custom field (renamed above)
      const { custom, ...cleaned } = preppedData;

      //Convert to FormData
      let form_data = new FormData();
      for (let key in cleaned) {
        form_data.append(key, cleaned[key]);
      }

      fetch("https://kenzie39049.activehosted.com/proc.php", {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        body: form_data
      });
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
        name="custom"
        value={"test"}
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
