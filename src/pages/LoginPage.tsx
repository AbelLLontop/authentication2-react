import { login } from "@/store/features/auth";
import { useAppDispatch } from "@/hooks/useStore";
import { useLocation, useNavigate } from "react-router-dom";

const userCredentials = {};

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login(userCredentials));
    const from = location.state?.from;
    if (from) navigate(from, { replace: true });
  };
  
  return (
    <div>
      <div>LoginPage</div>
      <button onClick={handleLogin}> Iniciar Sesion</button>
    </div>
  );
};

export default LoginPage;
