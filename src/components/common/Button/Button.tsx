import React from 'react';
import styles from './styles.module.css'

export enum ButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY'
}

const mapButtonTypeToStyle: Record<ButtonType, string> = {
  [ButtonType.PRIMARY]: styles.primary,
  [ButtonType.SECONDARY]: styles.secondary,
  [ButtonType.TERTIARY]: styles.tertiary
}

interface IProps {
  type?: ButtonType;
}

type AllProps = IProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Button = (props: AllProps) => {
  const {type = ButtonType.PRIMARY, ...rest} = props;

  return (
    <div
      {...rest}
      className={`${styles.root} ${mapButtonTypeToStyle[type]} ${rest.className}`}
    />
  )
}

export default Button;