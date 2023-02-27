import React from 'react';
import './styles/Home.css';
import Infomations from'./Informations'
import sample1 from './images/sample1.jpg'
import sample2 from './images/sample2.jpg'
import sample3 from './images/sample3.jpg'

const HOME = () => {
  return (
    <>
    <div className="home-main">
     
    </div>
    <div className="flex-block">
      <Infomations {...dummyInfo1} />
      <Infomations {...dummyInfo2} />
      <Infomations {...dummyInfo3} />
    </div>
    </>
  );
}

export default HOME;

const dummyInfo1 ={
  title:"情報①",
  text:"あああああああ",
  subTitle: "",
  img:sample1,
}

const dummyInfo2 ={
  title:"情報①",
  text:"あああああああ",
  subTitle: "",
  img:sample2,
}

const dummyInfo3 ={
  title:"情報①",
  text:"あああああああ",
  subTitle: "",
  img:sample3,
}
