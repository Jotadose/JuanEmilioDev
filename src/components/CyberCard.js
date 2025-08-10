"use client";

import React from "react";
import styled from "styled-components";

// Este componente envuelve toda la lógica y los estilos de la tarjeta.
const StyledWrapper = styled.div`
  /* --- ESTILOS GENERALES DE LA TARJETA --- */
  .container {
    position: relative;
    width: 100%;
    max-width: 280px;
    height: 380px; /* Altura aumentada para dar espacio al contenido */
    transition: 200ms;
    margin: auto;
  }

  .container:active {
    width: 270px;
    height: 370px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    transition: 125ms ease-in-out;
    background: linear-gradient(45deg, #1a1a1a, #262626);
    border: 2px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    /* --- CAMBIOS PARA CENTRAR --- */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* --- FIN DE CAMBIOS --- */
  }

  #prompt {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    transition: 300ms ease-in-out;
    position: absolute;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  /* --- ESTILOS PARA EL CONTENIDO DINÁMICO --- */
  .title {
    opacity: 0;
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #00ffaa;
    filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
    text-shadow: 0 0 10px rgba(92, 103, 255, 0.5),
      0 0 20px rgba(92, 103, 255, 0.3);
    margin-bottom: 20px; /* Espacio entre título y skills */
    position: absolute; /* Lo hacemos absoluto para sacarlo del flow inicial */
    width: 100%;
    top: 20px; /* Posición inicial */
    left: 0;
  }

  .skills-list {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    z-index: 5;
    position: absolute; /* También lo hacemos absoluto */
  }

  .skills-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills-list li {
    display: flex;
    align-items: center;
    color: #e2e8f0;
    margin-bottom: 12px;
    font-size: 14px;
    text-align: left;
  }

  .skills-list .icon-wrapper {
    margin-right: 12px;
    color: #818cf8; /* Tono índigo más claro */
    width: 20px;
    height: 20px;
    flex-shrink: 0; /* Evita que el ícono se encoja */
  }

  /* --- EFECTOS DE HOVER --- */
  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
    transform: translateY(0);
    position: static; /* Vuelve al flow normal para ser centrado por flexbox */
  }

  .tracker:hover ~ #card .skills-list {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 100ms;
    position: static; /* Vuelve al flow normal para ser centrado por flexbox */
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  /* --- RESTO DE ESTILOS DE LA TARJETA (EFECTOS VISUALES) --- */
  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .tracker {
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  /* --- ASIGNACIÓN DE ÁREAS DE GRID PARA LOS TRACKERS --- */
  .tr-1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .tr-2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .tr-3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .tr-4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .tr-5 {
    grid-area: 1 / 5 / 2 / 6;
  }
  .tr-6 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .tr-7 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .tr-8 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .tr-9 {
    grid-area: 2 / 4 / 3 / 5;
  }
  .tr-10 {
    grid-area: 2 / 5 / 3 / 6;
  }
  .tr-11 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .tr-12 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .tr-13 {
    grid-area: 3 / 3 / 4 / 4;
  }
  .tr-14 {
    grid-area: 3 / 4 / 4 / 5;
  }
  .tr-15 {
    grid-area: 3 / 5 / 4 / 6;
  }
  .tr-16 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .tr-17 {
    grid-area: 4 / 2 / 5 / 3;
  }
  .tr-18 {
    grid-area: 4 / 3 / 5 / 4;
  }
  .tr-19 {
    grid-area: 4 / 4 / 5 / 5;
  }
  .tr-20 {
    grid-area: 4 / 5 / 5 / 6;
  }
  .tr-21 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .tr-22 {
    grid-area: 5 / 2 / 6 / 3;
  }
  .tr-23 {
    grid-area: 5 / 3 / 6 / 4;
  }
  .tr-24 {
    grid-area: 5 / 4 / 6 / 5;
  }
  .tr-25 {
    grid-area: 5 / 5 / 6 / 6;
  }

  #card {
    grid-area: 1 / 1 / 6 / 6;
  }

  /* --- EFECTO 3D CON LOS TRACKERS --- */
  .tr-1:hover ~ #card {
    transform: rotateX(20deg) rotateY(-10deg);
  }
  .tr-2:hover ~ #card {
    transform: rotateX(20deg) rotateY(-5deg);
  }
  .tr-3:hover ~ #card {
    transform: rotateX(20deg) rotateY(0deg);
  }
  .tr-4:hover ~ #card {
    transform: rotateX(20deg) rotateY(5deg);
  }
  .tr-5:hover ~ #card {
    transform: rotateX(20deg) rotateY(10deg);
  }
  .tr-6:hover ~ #card {
    transform: rotateX(10deg) rotateY(-10deg);
  }
  .tr-7:hover ~ #card {
    transform: rotateX(10deg) rotateY(-5deg);
  }
  .tr-8:hover ~ #card {
    transform: rotateX(10deg) rotateY(0deg);
  }
  .tr-9:hover ~ #card {
    transform: rotateX(10deg) rotateY(5deg);
  }
  .tr-10:hover ~ #card {
    transform: rotateX(10deg) rotateY(10deg);
  }
  .tr-11:hover ~ #card {
    transform: rotateX(0deg) rotateY(-10deg);
  }
  .tr-12:hover ~ #card {
    transform: rotateX(0deg) rotateY(-5deg);
  }
  .tr-13:hover ~ #card {
    transform: rotateX(0deg) rotateY(0deg);
  }
  .tr-14:hover ~ #card {
    transform: rotateX(0deg) rotateY(5deg);
  }
  .tr-15:hover ~ #card {
    transform: rotateX(0deg) rotateY(10deg);
  }
  .tr-16:hover ~ #card {
    transform: rotateX(-10deg) rotateY(-10deg);
  }
  .tr-17:hover ~ #card {
    transform: rotateX(-10deg) rotateY(-5deg);
  }
  .tr-18:hover ~ #card {
    transform: rotateX(-10deg) rotateY(0deg);
  }
  .tr-19:hover ~ #card {
    transform: rotateX(-10deg) rotateY(5deg);
  }
  .tr-20:hover ~ #card {
    transform: rotateX(-10deg) rotateY(10deg);
  }
  .tr-21:hover ~ #card {
    transform: rotateX(-20deg) rotateY(-10deg);
  }
  .tr-22:hover ~ #card {
    transform: rotateX(-20deg) rotateY(-5deg);
  }
  .tr-23:hover ~ #card {
    transform: rotateX(-20deg) rotateY(0deg);
  }
  .tr-24:hover ~ #card {
    transform: rotateX(-20deg) rotateY(5deg);
  }
  .tr-25:hover ~ #card {
    transform: rotateX(-20deg) rotateY(10deg);
  }

  /* --- ELEMENTOS DECORATIVOS --- */
  .card-glare {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 55%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 300ms;
  }

  .tracker:hover ~ #card .card-glare {
    opacity: 1;
  }

  .cyber-lines span {
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(92, 103, 255, 0.2),
      transparent
    );
    animation: lineGrow 3s linear infinite;
  }
  .cyber-lines span:nth-child(1) {
    top: 20%;
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: left;
  }
  .cyber-lines span:nth-child(2) {
    top: 40%;
    right: 0;
    width: 100%;
    height: 1px;
    transform-origin: right;
    animation-delay: 1s;
  }
  .cyber-lines span:nth-child(3) {
    top: 60%;
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: left;
    animation-delay: 2s;
  }
  .cyber-lines span:nth-child(4) {
    top: 80%;
    right: 0;
    width: 100%;
    height: 1px;
    transform-origin: right;
    animation-delay: 1.5s;
  }

  .corner-elements span {
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(92, 103, 255, 0.3);
    transition: all 0.3s ease;
  }
  .corner-elements span:nth-child(1) {
    top: 10px;
    left: 10px;
    border-right: 0;
    border-bottom: 0;
  }
  .corner-elements span:nth-child(2) {
    top: 10px;
    right: 10px;
    border-left: 0;
    border-bottom: 0;
  }
  .corner-elements span:nth-child(3) {
    bottom: 10px;
    left: 10px;
    border-right: 0;
    border-top: 0;
  }
  .corner-elements span:nth-child(4) {
    bottom: 10px;
    right: 10px;
    border-left: 0;
    border-top: 0;
  }

  .tracker:hover ~ #card .corner-elements span {
    border-color: rgba(92, 103, 255, 0.8);
    box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
  }

  .scan-line {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(92, 103, 255, 0.1),
      transparent
    );
    transform: translateY(-100%);
    animation: scanMove 2s linear infinite;
  }

  @keyframes lineGrow {
    0%,
    100% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes scanMove {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

// El componente de React que usa los estilos de arriba.
const CyberCard = ({ title, skills }) => {
  return (
    <StyledWrapper>
      <div className="container noselect">
        <div className="canvas">
          {/* Los trackers y la tarjeta ahora son hermanos DENTRO del canvas */}
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`} />
          ))}

          <div id="card">
            <div className="card-content">
              {/* El prompt se muestra u oculta con JS/CSS, no necesita estar en el flow */}
              <p id="prompt">VER DETALLES</p>

              {/* Contenido dinámico que se centrará con flexbox */}
              <div className="title">{title}</div>
              <div className="skills-list">
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <span className="icon-wrapper">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Elementos decorativos estáticos */}
              <div className="card-glare" />
              <div className="cyber-lines">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="corner-elements">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="scan-line" />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default CyberCard;
