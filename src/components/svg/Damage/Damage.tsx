import React from 'react';
import styles from './styles.module.css'

interface IProps {
  value: string;
  isPercent?: boolean;
}

const Damage = (props: IProps) => {
  const {isPercent, value} = props;

  return (
    <div className="mr-1.5">
      <div className="flex justify-center relative">
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.58551 0.842102L0.846191 2.73684V28.7895L2.58551 31.1579H30.1972L32.1539 28.7895V3.21052L30.1972 0.842102H2.58551Z" fill="#13504C" stroke="#302741"/>
          <g filter="url(#filter0_i)">
            <path d="M4.08986 2.52631L2.53857 4.21052V27.3684L4.08986 29.4737H28.7165L30.4617 27.3684V4.63157L28.7165 2.52631H4.08986Z" fill="#32838B"/>
          </g>
          <defs>
            <filter id="filter0_i" x="2.53857" y="2.52631" width="27.9231" height="26.9474" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.263854 0 0 0 0 0.587712 0 0 0 0 0.620833 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
          </defs>
        </svg>
        <div className={styles.text + ' absolute'}>+{value}{isPercent ? '%' : ''}</div>
      </div>
    </div>
  )
}

export default Damage;