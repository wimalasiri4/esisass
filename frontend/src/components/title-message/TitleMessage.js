import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.22em;
  }
  div {
    color: #fff;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 800;
    letter-spacing: 7px;
    .main {
      font-size: 45px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 768px) {
    margin-top: -260px;
    strong {
      font-size: 1em;
    }
    div {
      letter-spacing: 2px;
      .main {
        font-size: 30px;
      }
      .sub {
        font-size: 14px;
        letter-spacing: 2px;
      }
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Animalify
          <br />
          <span>
            <strong>Animal Recognition Platform</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Detect Animals", "Animal Details"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
