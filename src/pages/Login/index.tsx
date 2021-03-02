import React, { useContext } from 'react';
import Avatar from '../../components/Avatar';
import { FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import './style.css';
import { UserContext } from '../../contexts/UserContext';

const schemaRegister = yup.object().shape({
  name: yup.string().required('Digite um nome'),
});

const Login = () => {
  const { setUser } = useContext(UserContext);

  const initialValues = {
    name: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schemaRegister,
    onSubmit: async (values) => {
      console.log(values);
      setUser({ userName: values.name });
      console.log(!formik.isValid);
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
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
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
