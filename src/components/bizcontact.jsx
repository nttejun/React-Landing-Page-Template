import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const BizContact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  // 법인 상담 폼 =====
  const handleCorpSubmit = (e) => {
    e.preventDefault();
    // 필요 시 기본 검증 추가 가능 (예: 전화번호 포맷)
    emailjs
      .sendForm("YOUR_CORP_SERVICE_ID", "YOUR_CORP_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          // 전송 후 폼 리셋
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="bizcontact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====== [새 섹션 끝] ====== */}
          <div id="corp-consult" className="col-md-12" style={{ marginTop: 40 }}>
            <div className="row">
              <div className="section-title">
                <h2>법인 보험 상담 신청</h2>
                <p>아래 정보를 입력해 주세요. 빠르게 연락드리겠습니다.</p>
              </div>

              <form name="corpConsult" noValidate onSubmit={handleCorpSubmit}>
                {/* hidden: 메일 제목 등 템플릿에서 사용할 값 */}
                <input type="hidden" name="corp_subject" value="[랜딩] 법인 보험 상담 신청" />

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="corp_name">대표자 성함</label>
                      <input
                        type="text"
                        id="corp_name"
                        name="corp_name"
                        className="form-control"
                        placeholder="홍길동"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="corp_phone">연락처</label>
                      <input
                        type="tel"
                        id="corp_phone"
                        name="corp_phone"
                        className="form-control"
                        placeholder="010-1234-5678"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="corp_company">법인명</label>
                      <input
                        type="text"
                        id="corp_company"
                        name="corp_company"
                        className="form-control"
                        placeholder="○○ 주식회사"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="corp_category">상담 항목</label>
                      <select
                        id="corp_category"
                        name="corp_category"
                        className="form-control"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          상담 주제를 선택하세요
                        </option>
                        <option>가지급금 / 가수금 정리</option>
                        <option>대표이사 퇴직금·퇴직연금 설계</option>
                        <option>법인세 / 상속·증여세 절세</option>
                        <option>정책자금 및 정부지원금 상담</option>
                        <option>법인 자금 → 개인 자금 이전 방법</option>
                        <option>법인 신용등급 / 대출 전략</option>
                        <option>임원·대표자 보장성 보험</option>
                        <option>퇴직연금(DB/DC) 및 직원 복리후생</option>
                        <option>키맨(Key-Man) 보험</option>
                        <option>기타 맞춤 상담</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="corp_message">추가 내용</label>
                  <textarea
                    id="corp_message"
                    name="corp_message"
                    className="form-control"
                    rows="4"
                    placeholder="상세한 상담 요청 내용을 작성해주세요"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
          {/* ====== [새 섹션 끝] ====== */}



        </div>
      </div>

      
      
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
