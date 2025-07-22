import React from 'react';
import './Skills.css';

let items = [
    {title: 'Python',image: 'https://img.icons8.com/color/80/python--v1.png',alt: 'python--v1'},
    {title: 'Java',image: 'https://img.icons8.com/color/80/java-coffee-cup-logo--v1.png',alt: 'java-coffee-cup-logo--v1'},
    {title: 'JavaScript',image: 'https://img.icons8.com/color/80/javascript.png',alt: 'javascript'},
    {title: 'HTML',image: 'https://img.icons8.com/fluency/80/html-5.png',alt: 'html-5'},
    {title: 'CSS',image: 'https://img.icons8.com/color/80/css3.png',alt: 'css3'},
    {title: 'React',image: 'https://img.icons8.com/color/80/react-native.png',alt: 'react'},
    {title: 'React Native',image: 'https://img.icons8.com/color/80/react-native.png',alt: 'react-native'}
];

function Skills() {
  return (
    <div className="skillcont" id="skills">
        <p className="title">Skills</p>
        <div className="skilllist">
            {
                items.map((itm)=>(
                    <div className="skillitm">
                        <div><img src={itm.image} alt={itm.alt} /></div>
                        <p>{itm.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills