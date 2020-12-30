import ReactDom from 'react-dom';
import Card from './Card';
import './index.css';


ReactDom.render(

  <>
  <h1 className='heading_style'>Bootcamp Components in React Assignment 3 By Ameer Hamza</h1>
  <Card sname='Dark'
        imgsrc="../images/dark.jpg"
        title='A Netflix Orignial Series'
        links='https://www.netflix.com/pk/title/80100172'/>
  <Card sname="Extra Curricular"
        imgsrc='../images/curricular.jpg'
        title='A Netflix Orignial Series'
        links='https://www.netflix.com/pk/title/80990668?source='/>
  <Card sname='Peaky Blinders'
        imgsrc='../images/peaky.jpg'
        title='A Netflix Orignial Series'
        links='https://www.netflix.com/pk/title/80002479'/>

  <Card sname='The Vampire Diaries'
        imgsrc='../images/vampire.jpg'
        title='A Netflix Orignial Series'
        links='https://www.imdb.com/title/tt1405406/'/>
  <Card  sname='My First First Love'
        imgsrc='../images/love.jpg'
        title='A Netflix Orignial Series'
        links='https://www.netflix.com/pk/title/81026700'/>
  <Card sname='The Crown'
        imgsrc='../images/crown.jpg'
        title='A Netflix Orignial Series'
        links='https://www.netflix.com/pk/title/80025678'/>
  <Card sname='The Queen Gambit'
        imgsrc='../images/queen.jpg'
        title='A Netflix Orignial Series'
        links='https://www.netflix.com/pk/title/80234304'/>
  <Card sname='The Umberella Academy'
        imgsrc='../images/umberalla.jpg'
        title='A Netflix Orignial Series'
        links='https=//www.netflix.com/pk/title/80186863'/>
  <Card sname='Stranger Things'
        imgsrc='../images/stranger.jpg'
        title='A Netflix Orignial Series'
        links='https://www.netflix.com/pk/title/80057281'/>
  
  </>,
  document.getElementById('root')
)