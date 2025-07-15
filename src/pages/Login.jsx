import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { QuestionCircleFill } from 'react-bootstrap-icons'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-text-box">
        <strong>다시 오신 것을 환영합니다.</strong>
        <h2>LOGIN</h2>
      </div>
      <Form>
        <Form.Group className="email form-group" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="이메일" />
        </Form.Group>

        <Form.Group className="password form-group" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>

        <a href="#none"><QuestionCircleFill/>계정을 잊으셨나요?</a>

        <Button variant="primary" type="submit">
          로그인
        </Button>

        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 유지" />
        </Form.Group>

      </Form>
      <div className="login-other-way">
        <strong>다른 방법으로 로그인</strong>
        <ul>
          <li>
            <button>
              <img src="../../images/sns-icon (6).png" alt="Google" />
            </button>
            <span>구글</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (3).png" alt="Apple" />
            </button>
            <span>애플</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (4).png" alt="Facebook" />
            </button>
            <span>페이스북</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (2).png" alt="Twitter" />
            </button>
            <span>트위터</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (1).png" alt="Kakao Talk" />
            </button>
            <span>카카오</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (5).png" alt="Naver" />
            </button>
            <span>네이버</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Login