import { Textinput } from "../../components/TextInput";
import { BiEnvelope } from "react-icons/bi";
import { Passwordinput } from "../../components/PasswordInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login(props) {
  const { setAppToken } = props;
  const navigate = useNavigate();
  const emailIcon = <BiEnvelope />;
  function submitLogin(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const mail = form.querySelector('input[type="text"]');
    const password = form.querySelector('input[placeholder="Password"]');
    const data = {};
    data.email = mail.value;
    data.password = password.value;
    axios
      .post("http://localhost:3001/login", {
        email: mail.value,
        password: password.value,
      })
      .then((resData) => {
        console.log(resData);
        if (resData.status === 200) {
          localStorage.setItem("token", resData.token);
          localStorage.setItem("userId", resData.userId);
          setAppToken(resData.token);
          navigate("/admin/books", { replace: true });
        } else if (resData.status === 401) {
          console.log("aaaaaaa")
        }
      });
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={submitLogin} action="">
          <h1>Log in</h1>
          <Textinput label="Email:" icon={emailIcon} placeholder="E-mail" />
          <Passwordinput />
          <div className="login-div">
            <button className="login-btn" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
