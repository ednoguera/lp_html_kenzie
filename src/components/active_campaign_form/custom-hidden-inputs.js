const CustomHiddenInputs = ({ values }) => {
  const [
    utmSource,
    utmMedium,
    utmCampaign,
    hsaAd,
    hsaGrp,
    hsaCam,
    hsaSrc
  ] = values;

  return (
    <>
      <div className="_form_element _field1 _full_width ">
        <input type="hidden" name="field[1]" defaultValue={utmSource} />
      </div>
      <div className="_form_element _field3 _full_width ">
        <input type="hidden" name="field[3]" defaultValue={utmMedium} />
      </div>
      <div className="_form_element _field4 _full_width ">
        <input type="hidden" name="field[4]" defaultValue={utmCampaign} />
      </div>
      <div className="_form_element _field8 _full_width ">
        <input type="hidden" name="field[8]" defaultValue={hsaAd} />
      </div>
      <div className="_form_element _field9 _full_width ">
        <input type="hidden" name="field[9]" defaultValue={hsaGrp} />
      </div>
      <div className="_form_element _field10 _full_width ">
        <input type="hidden" name="field[10]" defaultValue={hsaCam} />
      </div>
      <div className="_form_element _field11 _full_width ">
        <input type="hidden" name="field[11]" defaultValue={hsaSrc} />
      </div>
    </>
  );
};

export default CustomHiddenInputs;
