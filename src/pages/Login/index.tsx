import React, { useContext } from 'react';
import Avatar from '../../components/Avatar';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import './style.css';
import { UserContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import Avartar1 from '../../assets/avatares/avatar1.png';
import Avartar2 from '../../assets/avatares/avatar2.png';
import Avartar3 from '../../assets/avatares/avatar3.png';
import Avartar4 from '../../assets/avatares/avatar4.png';
import Avartar5 from '../../assets/avatares/avatar5.png';
import Avartar6 from '../../assets/avatares/avatar6.png';
import Avartar7 from '../../assets/avatares/avatar7.png';
import Avartar8 from '../../assets/avatares/avatar8.png';

const schemaRegister = yup.object().shape({
  name: yup.string().required('Digite um nome'),
});

const Login = () => {
  const { signInSuccess } = useContext(UserContext);
  const history = useHistory();

  const initialValues = {
    name: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schemaRegister,
    onSubmit: async (values) => {
      signInSuccess(values.name);
      console.log(history);

      history.push('/home');
    },
  });

  return (
    <div className="ContainerLogin">
      <div className="Login">
        <span>
          <h1> Bem-Vindo ao My Quiz!</h1>
        </span>
        <p>
          Inicialmente escolha um <strong>Avatar</strong> e um
          <strong> NickName</strong> para começarmos.
        </p>
        <div className="divAvatar">
          <Avatar srcAvatar={Avartar1} />
          <Avatar srcAvatar={Avartar2} />
          <Avatar srcAvatar={Avartar3} />
          <Avatar srcAvatar={Avartar4} />
          <Avatar srcAvatar={Avartar5} />
          <Avatar srcAvatar={Avartar6} />
          <Avatar srcAvatar={Avartar7} />
          <Avatar srcAvatar={Avartar8} />
        </div>

        <FormikProvider value={formik}>
          <form className="formName" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="NickName..."
            />
            <button type="submit">
              <i className="fa fa-angle-right"></i>
            </button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Login;
