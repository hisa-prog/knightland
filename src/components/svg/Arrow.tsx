import React from "react";

const ArrowSVG = ({ width = 32, height = 32, className = "", ...props }) => {
    return (
        <svg {...props} width={width} height={height} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#97A3B9" strokeWidth="2" strokeMiterlimit="10" />
                <path d="M16.7578 20.2426L21.0004 15.9999L16.7578 11.7573" stroke="#97A3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 16H21" stroke="#97A3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>

    )
}

export default ArrowSVG