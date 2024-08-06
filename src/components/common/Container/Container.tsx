import React from 'react';
import styles from './styles.module.css'

interface IProps {
  disableVerticalPadding?: boolean;
}

const Container = ({ disableVerticalPadding, children, ...rest }: React.PropsWithChildren<IProps>) => {
  const paddings = disableVerticalPadding ? { paddingTop: 0, paddingBottom: 0 } : {};
  return (
    <div
      {...rest}
      style={{ ...paddings }}
      className={" flex w-full relative flex-col bg-main z-10"}
    >
      <div className={`max-w-7xl xxl:max-w-8xl mx-auto w-full px-4 md:px-12 lg:px-16`}>
        {children}
      </div>
    </div>
  )
}

export default Container;