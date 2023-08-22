import "../components/Heroimagestyle.css";
import React from 'react'
import p7 from "../assets/p7.jpeg"
import { NavLink } from "react-router-dom";
import jsPDF from "jspdf";


const Heroimage = () => {

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Hello, this is your PDF content!', 10, 10);
        doc.save('SUMITS RESUME.pdf');
      };

    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={p7} alt="" />
            </div>
            <div className="content">
                <p>HI I'M SUMIT TALE</p>
                <h1> B-TECH Computer Student</h1>
                <div>
                    <NavLink to="/contact" className="btn ">Contact</NavLink>
                    <button className="download-button" onClick={handleDownloadPDF}>
                  Download Resume
                </button>
                </div>
                
            </div>
        </div>
    )
}
export default Heroimage;

