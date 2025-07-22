import React from 'react';
import './Education.css';

let edu = [
    {image: 'https://lh5.googleusercontent.com/proxy/_sqcbt9MfzNV60eSHfbPc_9iwlzDx9W0xymcvEIZByTTkj0xNYSvu7PbgU6szRnjrzIoQawk9m4K9hIkPVRrgICD5BUc_4ti6WSBpnpwN67igDtkyeiwnCokcTKFaYQyWPsETg',title:'Ramco Institute Of Technology',deg:'B.Tech-Inforamtion Technology',year:'2022-2026'},
    {image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVOI9EHWZnhcNyLouqxlQ4zlHSqj84GTWKk-XR79m3tUF9PTKDHxTGeZ8IMQCGXe2idRKhGKaFVRS5uyZtE6wyfYtHAoozmx573JTCXSLx__9zNh5njyMUIhObLz1ZXxCuizu7XfBoxPBU/w1200-h630-p-k-no-nu/kadayanallur+wisdom+matric+school.jpg',title:'Wisdom Metric Hr. Sec. School',deg:'Higher Secondary Education',year:'2021-2022'}
]
function Education() {
    return (
        <div className="educont" id="edu">
            <p className="edutitle">My Educatons</p>
            <div className="eduinnercont">
                {
                    edu.map((itm)=>(
                        <div className="eduitm">
                            <div className="eduleft">
                                <div><img src={itm.image} alt={itm.title} /></div>
                            </div>
                            <div className="eduright">
                                <p className="title">{itm.title}</p>
                                <p>{itm.deg}</p>
                                <p>{itm.year}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Education