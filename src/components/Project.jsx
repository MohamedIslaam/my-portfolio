import React from 'react'
import './Project.css';


let web = [
    {image:"p1.png",title:"Resturent website",view:'https://my-resturent-website.netlify.app/',git:'https://github.com/MohamedIslaam/Resturent-Website'},
    {image:'p2.png',title:"To-Do-List",view:'https://mohamedislaam.github.io/To-Do-List/',git:'https://github.com/MohamedIslaam/To-Do-List'},
    {image:'p3.png',title:"Tic-Tac-Toe",view:'https://mohamedislaam.github.io/Tic-Tac-Toe/',git:'https://github.com/MohamedIslaam/Tic-Tac-Toe'}
]

let app = [
    {image:'m1.jpg',title:"To Do List Application",git:'https://github.com/MohamedIslaam/To-do-List-App'},
    {image:'m2.png',title:"Expense Tracking App",git:'https://github.com/MohamedIslaam/Expense-Tracking-App'},
    {image:'m3.png',title:"AI integrated Recipe Finder App",git:'https://github.com/MohamedIslaam/recipe-finder-app-with-AI'}
]

function Project() {
  return (
    <div className="procont" id="pro">
        <p className="protitle">Projects by <span>own</span> </p>
        <p className="prosub" id="asweb">As Website</p>
        <div className="proincont"> 
            {
                web.map((itm)=>(
                    <div className="proitm">
                        <div className="imgcont"><img src={itm.image} alt="" /></div>
                        <div className="pronames">
                            <p>{itm.title}</p>
                            <div>
                                <a href={itm.view} rel="noopener noreferrer"><img width="15" src="https://img.icons8.com/ios-filled/50/FFFFFF/link.png" alt="" /> Live Preview</a>
                                <a href={itm.git} rel="noopener noreferrer"><img width="15" src="https://img.icons8.com/material-outlined/50/FFFFFF/github.png" alt="" /> View Code</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <p className="prosub" id="asapp">As Application</p>
        <div className="proincont">
            {
                app.map((itm)=>(
                    <div className="proitm">
                        <div className="imgcont" id="appimg"><img src={itm.image} alt="" /></div>
                        <div className="pronames" id="nmes">
                            <p>{itm.title}</p>
                            <div>
                                <a href={itm.git} rel="noopener noreferrer"><img width="15" src="https://img.icons8.com/material-outlined/50/FFFFFF/github.png" alt="" /> View Code</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Project
