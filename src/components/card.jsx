import React from 'react';
import styled from 'styled-components';
import '../index.css';

const Card = ({ title = "Project Title", description = "Hover Me", backTitle = "Details", backDescription = "Project details go here." }) => {
  return (
    <StyledWrapper>
      <div className="e-card playing">
        <div className="image" />
        
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />

        <div className="infotop">
          <div className="content-front">
             <span className="name">{title}</span>
             <br />
             <span className="function">{description}</span>
          </div>
          
          <div className="content-back">
            <span className="name">{backTitle}</span>
            <br />
            <span className="function">{backDescription}</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .e-card {
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
    position: relative;
    width: 500px;
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
    background-color: #ACBAC4;
    transition: all 0.5s ease;
  }

  .wave {
    position: absolute;
    width: 1000px;
    height: 1000px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -140%; /* Start hidden above or below - tweaking to start from bottom */
    background: linear-gradient(744deg,#30364F,#2a3045 60%,#1e2333);
    border-radius: 40%;
    animation: wave 55s infinite linear;
    transition: all 1.2s ease; /* Smooth rising */
    z-index: 1;
  }
  
  /* Start the wave from the bottom */
  .wave {
    top: 100%;
    margin-top: -20%; /* Offset to ensure it's just below */
  }

  .e-card:hover .wave {
    top: -60%; /* Rise up to cover */
    animation: wave 4s infinite linear; /* Speed up slightly on active */
  }
  
  .wave:nth-child(2) {
    animation-duration: 50s;
    opacity: 0.3;
  }
  .e-card:hover .wave:nth-child(2) {
    animation-duration: 4000ms;
  }
  
  .wave:nth-child(3) {
    animation-duration: 45s;
    opacity: 0.1;
  }
  .e-card:hover .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .infotop {
    text-align: center;
    font-size: 25px;
    position: absolute;
    top: 5.6em;
    left: 0;
    right: 0;
    color: #30364F;
    font-weight: 600;
    z-index: 10; /* Above wave */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    pointer-events: none; /* Let clicks pass through if needed */
    /* Remove default positioning to center properly via Flexbox if preferred, 
       but keeping absolute for now to match 'infotop' structure */
    top: 0; 
  }

  .content-front, .content-back {
    position: absolute;
    width: 80%;
    transition: all 0.8s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Front Content State */
  .content-front {
    opacity: 1;
    transform: translateY(0);
    color: #F0F0DB;
  }
  
  .function {
    font-weight: 400;
    font-size: 0.8em;
  }

  /* Back Content State */
  .content-back {
    opacity: 0;
    transform: translateY(20px);
    color: #F0F0DB; 
  }

  /* Hover Effects */
  .e-card:hover .content-front {
    opacity: 0;
    transform: translateY(-20px);
  }

  .e-card:hover .content-back {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Card;
