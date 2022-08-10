import React from "react";

import github from "../assets/images/github-brands.svg";
import linkedIn from "../assets/images/linkedIn-icon.svg"
import "../styles/BottomInfo.css";

export default function BottomInfo() {
    return (
        <div className="bottom-info">
            <a
                href="https://github.com/ALMA-DEV914"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={github} alt="Github" className="github-logo" />
            </a>
            <a
                href="https://www.linkedin.com/in/alma-braun-1b11731aa/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={linkedIn} alt="LinkedIn" className="linkedIn-logo" />
            </a>
        </div>
    );
}
