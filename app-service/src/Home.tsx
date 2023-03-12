import React from 'react';
import './styles/Home.css';
import Infomations from'./Informations'
import sample1 from './images/sample1.jpg'
import sample2 from './images/sample2.jpg'
import sample3 from './images/sample3.jpg'
import sample4 from './images/sample4.jpg'
import sample5 from './images/sample5.jpg'
import sample6 from './images/sample6.jpg'

const HOME = () => {
  return (
    <>
    <div className="flex-block">
      <Infomations {...dummyInfo1} />
      <Infomations {...dummyInfo2} />
      <Infomations {...dummyInfo3} />
      <Infomations {...dummyInfo4} />
      <Infomations {...dummyInfo5} />
      <Infomations {...dummyInfo6} />
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

const dummyInfo4 ={
  title:"情報①",
  text:"あああああああ",
  subTitle: "",
  img:sample4,
}

const dummyInfo5 ={
  title:"情報①",
  text:"あああああああ",
  subTitle: "",
  img:sample5,
}

const dummyInfo6 ={
  title:"情報①",
  text:"あああああああ",
  subTitle: "",
  img:sample6,
}