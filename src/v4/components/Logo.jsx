import designerImage from '../../assets/Designer.png';
import designerImage2 from "../../assets/smiles.svg"

export const Logo = ({className}) => {
    return (

        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 150">
                <path
                    id="circlePath"
                    d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
                    fill="none"
                    stroke="transparent"
                />

                <clipPath id="circleClip">
                    <circle cx="50" cy="50" r="100" />
                </clipPath>

                <image
                    x="10"
                    y="13"
                    width="80"
                    height="80"
                    href={designerImage}
                    clip-path="url(#circleClip)"
                />

                <text>
                    <textPath
                        href="#circlePath"
                        fontSize="12"
                        textLength="251"
                        startOffset="0"
                        fill="#1f2937"
                        font-family="Arial, sans-serif"
                        font-weight="bold"
                        spacing="22"
                    >
                        • MODERN DESIGNS • WEB DEVELOPMENT •
                    </textPath>
                </text>
            </svg>

        </div>
    );
};

export default Logo;