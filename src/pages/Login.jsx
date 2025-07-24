import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { QuestionCircleFill } from 'react-bootstrap-icons'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-text-box">
        <strong>Welcome back MVDB</strong>
        <h2>LOGIN</h2>
      </div>
      <Form>
        <Form.Group className="email form-group" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="password form-group" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <a href="#none"><QuestionCircleFill/>Forgotten your account?</a>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

      </Form>
      <div className="login-other-way">
        <strong>Log in with another account</strong>
        <ul>
          <li>
            <button>
              <img src="../../images/sns-icon (6).png" alt="Google" />
            </button>
            <span>Google</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (3).png" alt="Apple" />
            </button>
            <span>Apple</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (4).png" alt="Facebook" />
            </button>
            <span>Facebook</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (2).png" alt="Twitter" />
            </button>
            <span>Twitter</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (1).png" alt="Kakao Talk" />
            </button>
            <span>Kakao</span>
          </li>
          <li>
            <button>
              <img src="../../images/sns-icon (5).png" alt="Naver" />
            </button>
            <span>Naver</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Login