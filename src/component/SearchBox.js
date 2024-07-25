import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactList);

  const search = (event) => {
    setKeyword(event.target.value);
    let key=event.target.value;
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { key } });
  };

  return (
    <div className="search-box">
      <Form onSubmit={search}>
        <Row>
          <Col lg={7}>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={search}
            />
          </Col>
          <Col lg={2}>
            <Button type="submit">찾기</Button>
          </Col>
        </Row>
        <div className="keyword-section">
          검색 결과:<span className="keyword-style">{keyword}</span>
        </div>
      </Form>
    </div>
  );
};

export default SearchBox;

//input으로 정보 받아오는 방법
//input onChange로 입력값을 state로 지정 이후 버튼 함수로 state값을 reducer로 보내서 배열안 객체중 검색
//이거 되면 onChange로 실시간 검색하게 설정해보기
