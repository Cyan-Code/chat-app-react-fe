import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";

export const RegisterPage = () => {

  const {register} = useContext(AuthContext)

  useEffect(() => {
    
  }, [])

  const [form, setForm] = useState({
    name: 'test1',
    email: '',
    password: '123456'
  })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const ok = await register(form.name, form.email, form.password)
    if (!ok) {
      Swal.fire('Error', 'El correo ya existe', 'error')
    }
  }

  const todoOK = () => {
    const {email, password, name} = form
    return (email.length > 0 && password.length > 0 && name.length > 0) ? true : false
  }

  return (
    <>
      <form
        className="login100-form validate-form flex-sb flex-w"
        onSubmit={onSubmit}
      >
        <span className="login100-form-title mb-3">Chat - Registro</span>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="text"
            name="name"
            value={form.name}
            onChange = {onChange}
            placeholder="Nombre"
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="email"
            name="email"
            value={form.email}
            onChange = {onChange}
            placeholder="Email"
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="password"
            name="password"
            value={form.password}
            onChange = {onChange}
            placeholder="Password"
          />
          <span className="focus-input100"></span>
        </div>

        <div className="row mb-3">
          <div className="col text-right">
            <Link to="/auth/login" className="txt1">
              Ya tienes cuenta?
            </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button
            className="login100-form-btn"
            type="submit"
            disabled={!todoOK()}            
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </>
  );
};
