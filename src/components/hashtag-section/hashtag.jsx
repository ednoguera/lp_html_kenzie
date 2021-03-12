import { HashStyle } from "./styles";

const Hashtag = (props) => {
    return (
        <HashStyle>
            <h2>
                <strong style={{ color: props.color }}>#</strong>
                {props.tag}
            </h2>
        </HashStyle>
    );
};

export default Hashtag;
