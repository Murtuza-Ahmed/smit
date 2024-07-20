import MyButton from "../myButton/MyButton";

function Login({ onLogin }: { onLogin: (a: boolean) => void }) {
  return (
    <>
      <div>
        <div>Please Login...</div>
        <div>
          <MyButton type="button" onClick={() => onLogin(true)}>
            Login
          </MyButton>
        </div>
      </div>
    </>
  );
}

export default Login;
