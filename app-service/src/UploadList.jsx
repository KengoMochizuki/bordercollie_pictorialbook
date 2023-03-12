import React from 'react'
import Infomations from './Informations';
import info from './info';

const UploadList = ({infos}) => {
  return infos.map((infos) => <Info infos={infos}/>);
}

export default UploadList