import React from'react';
import ReactDOM from'react-dom';
import './index.css';

function Card(props){
  return(
  <div className="cards">
  <div className="card">
  
  <img src={props.imgsrc}alt="random" className="cards_img" />
  <div className="card_info">
  <span className="card_category">{props.title}</span>
  <h3 className="card_title">{props.sname}</h3>
  <a href={props.link} target="_blank">
    <button>WATCH NOW</button>
  </a>
  
  </div>
   </div>
   </div>);
}

ReactDOM.render(
  <>
  <h1 className="heading_style">LIST OF MY FAVOURITE NETFLIX SERIES</h1>
   <Card
    imgsrc="https://i.pinimg.com/originals/23/f2/10/23f210ee96b9f6a568a710658af3af96.jpg"
    title="A Netflix Original Series"
    sname="Gilmore Girls"
    link="https://www.netflix.com/title/70155618"
   />
   <Card
    imgsrc="https://i.pinimg.com/originals/22/33/d2/2233d2b89d67883524d32e9d44ef0c6f.jpg"
    title="A Netflix Original Series"
    sname="The Office"
    link="https://www.netflix.com/in/title/70136120"
   />
   <Card
    imgsrc="https://i.pinimg.com/originals/5d/1c/78/5d1c7889bcb6e85e79033f7ded702157.jpg"
    title="A Netflix Original Series"
    sname="Friends"
    link="https://www.netflix.com/in/title/70153404"
   />
   <Card
    imgsrc="https://i.pinimg.com/originals/de/49/0e/de490e50ca68c91b9a4e3109a5969ca8.jpg"
    title="A Netflix Original Series"
    sname="Gossip Girl"
    link="https://www.netflix.com/fr-en/title/70143811"
   />
   <Card
    imgsrc="https://i.pinimg.com/originals/30/03/72/300372ea9702fbe13b85bc3d01fffb01.png"
    title="A Netflix Original Series"
    sname="Brooklyn 99"
    link="https://www.netflix.com/title/70281562"
   />
   
  </>,

  document.getElementById('root')
);
