import Hashtag from "./hashtag";
import { HashSection } from "./styles";
import { colors } from "../../styles/colors";

const HashtagSection = () => {
    const { blue } = colors;
    const { orange } = colors;

    return (
        <HashSection>
            <Hashtag tag="KENZIEMADE" color={orange} />
            <Hashtag tag="SOUKENZIE" color={blue} />
            <Hashtag tag="NINGUEMMESEGURA" color={orange} />
        </HashSection>
    );
};

export default HashtagSection;
