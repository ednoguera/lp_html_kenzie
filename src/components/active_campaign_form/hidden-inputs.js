const HiddenInputs = ({ formId }) => {
    return (
        <>
            <input type="hidden" name="u" value={formId} />
            <input type="hidden" name="f" value={formId} />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
        </>
    );
};

export default HiddenInputs;
