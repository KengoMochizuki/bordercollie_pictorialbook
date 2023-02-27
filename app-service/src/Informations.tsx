import React from 'react';
import logo from './logo.svg';
import sample1 from './images/sample1.jpg'
import sample2 from './images/sample2.jpg'
import sample3 from './images/sample3.jpg'
import './styles/Infomations.css';

type InfomationProps = {
  title: string,
  text: string,
  subTitle:string,
  img:string,
};

const Infomations = (props:InfomationProps) => {
  return (
    <>
    <div className="card">
   <img src={props.img} className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Card title</h5>
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" className="btn btn-primary">Go somewhere</a>
   </div>
 </div>
   </>
  );
}

export default Infomations;
