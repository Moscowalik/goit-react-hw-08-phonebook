import { Container } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { isUserLogin } from '../../redux/auth/authSelectors';
import { loginUser } from '../../redux/auth/authOperation';

import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector(isUserLogin, shallowEqual);

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
    }
  }, [isLogin]);

  const onLoginUser = data => {
    dispatch(loginUser(data));
  };

  return (
    <Container className="w-50 p-3">
      <LoginForm onSubmit={onLoginUser} />
    </Container>
  );
};

export default LoginPage;
