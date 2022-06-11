
import { useDispatch } from 'react-redux'
import { Form } from '../ui/formAuthorization/authForm'
import { setUser } from '../../store/auth/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { Link } from 'react-router-dom';
import '../ui/formCard/FormCard.scss'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
        navigate('/')
      })
      .catch(() => alert("invalid user!"))
  }
  return (
    <div>
      <Form
        title="Log in"
        handleClick={handleLogin}
      />
      <p className='textbuttom'> <Link to="/registration">Register</Link></p>
    </div>

  )
}

export default Login