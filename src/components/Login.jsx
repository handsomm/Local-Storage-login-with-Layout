import React, { useEffect, useRef, useState } from 'react'
import { Form} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Sign_img from './Sign_img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const EMAIL_REGEX = /^\D([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
    const navigate = useNavigate()

    const emailRef = useRef()

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)


    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        // console.log(result)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(password)
        // console.log(result)
        setValidPassword(result)
    }, [password])



    const handleSubmit = async (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem('userHyscaler');

        // console.log(email)
        // console.log(password)

        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(password);

        if (!v1 || !v2) {
            alert('Invalid entry')
        } else {
            // console.log(getUserArr)
            if (getUserArr) {
                const userData = JSON.parse(getUserArr);
                // console.log(userData)
                if (userData.email === email) {
                    if (userData.password === password) {
                        localStorage.setItem('user_login', JSON.stringify(userData))
                        setEmail('')
                        setPassword('')
                        navigate('/details')
                    } else {
                        console.log('Invalid Password');
                        alert('Invalid Password')
                    }
                } else {
                    console.log('Invalid Email');
                    alert('Invalid Email');
                }

            } else {
                console.log('You are not registered');
                alert('You are not registered');
                setEmail('')
                setPassword('')
            }
        }

    }


    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data p-3 mt-3" style={{ width: '100%' }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <input
                                    className={`form-control mb-2 col-lg-6 ${email && validEmail ? 'border-success' : 'border-danger'}`}
                                    type="email"
                                    id="email"
                                    name='email'
                                    ref={emailRef}
                                    placeholder="Enter Your Email"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    aria-invalid={validEmail ? "false" : "true"}
                                    aria-describedby="emailnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                                <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    For example, example@mail.com<br />
                                    Must begin with a letter.<br />
                                    Must include @ symbol.<br />
                                    Letters, numbers, hyphens allowed.
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <input
                                    className={`form-control mb-2 col-lg-6 ${password && validPassword ? 'border-success' : 'border-danger'}`}
                                    type="password"
                                    name='password'
                                    id="password"
                                    autoComplete='off'
                                    placeholder='Enter Your Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    aria-invalid={validPassword ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                />
                                <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                            </Form.Group>

                            <button className='col-lg-6 btn btn-success' disabled={!validEmail || !validPassword ? true : false}>Login</button>
                        </Form>
                        <p className='mt-3'>Don't have an account <span><NavLink to='/register' >Sign Up</NavLink></span></p>
                    </div>
                    <div className="right_data mt-5" style={{ width: '100%' }}>
                        <Sign_img />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login;