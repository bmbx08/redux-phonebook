import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';


//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저를 이름으로 검색할 수 있다.

function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;


//연락처 카드로 출력하기
//M,F 라디오 버튼 넣고 성별벼로로 남자,여자 사진 나오게 하기
//즐겨찾기 버튼 넣고 누르면 즐겨찾기 항목에 추가, 즐겨찾기 누르면 즐겨찾기 아이템만 표시