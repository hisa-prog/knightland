import React from "react";
import styles from "./styles.module.css";

interface IProps {
  className?: string;
  type?: "h1" | 'h2' | 'h3' | 'h4' | 'h5' ;
  onClick?(): void;
  isLink?: boolean;
  isSpan?: boolean;
  font?: "stoke" | "poppins";
}

const Text = (props: React.PropsWithChildren<IProps & React.CSSProperties>) => {
  const {type, className, onClick, isLink, children, font, isSpan, ...rest} = props;

  const classNames = (type ? styles[type] : '') + (className ? ` ${className}` : '') + " " + (font ? styles[font] : '');

  if(isSpan) {
    return (
      <span className={classNames + (isLink ? ` ${styles.link}` : '')} onClick={onClick} style={{...rest}}>
        {children}
      </span>
    )
  }

  return (
    <div className={classNames + (isLink ? ` ${styles.link}` : '')} onClick={onClick} style={{...rest}}>
      {children}
    </div>
  )
}

export default Text;
