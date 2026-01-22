import { Mail, Lock } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';
import AuthForm from '../../components/auth/AuthForm';
import useAuthForm from '../../hooks/useAuthForm';
import { validateLogin } from '../../components/auth/validators';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard';

    const { values, errors, loading, handleChange, handleSubmit } =
        useAuthForm(
            { email: '', password: '' },
            validateLogin,
            async (data, setErrors) => {
                const res = await login(data.email, data.password);
                res.success
                    ? navigate(from, { replace: true })
                    : setErrors({ form: res.error });
            }
        );

    const fields = [
        { id: 'email', label: 'Email', type: 'email', icon: Mail, placeholder: 'Enter your email' },
        { id: 'password', label: 'Password', type: 'password', icon: Lock, hasToggle: true, placeholder: 'Enter your password' }
    ];

    return (
        <AuthLayout title="Login">
            <AuthForm
                fields={fields}
                values={values}
                errors={errors}
                loading={loading}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitText="Log In"
            />
            <p className="mt-6 text-center text-sm text-gray-600">
                Don’t have an account?{' '}
                <Link
                    to="/register"
                    className="font-medium text-teal-600 hover:text-teal-500 hover:underline"
                >
                    Sign up
                </Link>
            </p>


        </AuthLayout>
    );
};

export default Login;
