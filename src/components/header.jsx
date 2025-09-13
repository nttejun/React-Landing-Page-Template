// Header.jsx
import React from "react";

export const Header = (props) => {
  return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                {/* 모바일에선 100%, md 이상에서 8칸 중앙 정렬 느낌 유지 */}
                <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a href="#features" className="btn btn-custom btn-lg page-scroll">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};
