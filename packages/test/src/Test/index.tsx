import React, {
    FC,
    memo,
    Fragment,
  } from 'react';
  
  interface testProps {
    text: string
  }
  
  const CheckBox: FC<testProps> = (props: testProps) => {
    const { text } = props;
  
    return (
      <Fragment>
          {text}
      </Fragment>
    );
  };
  
  export default memo(CheckBox);