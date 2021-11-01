import * as React from 'react';
import { ImgCardComponent } from './Card/Card';
import { ImgCardComponentM } from './Card/CardM';



export const ImgCard = (props) => {
  return (
      props.isMobile 
      ? <ImgCardComponentM props={props} /> 
      : <ImgCardComponent props={props}/>
  );
}