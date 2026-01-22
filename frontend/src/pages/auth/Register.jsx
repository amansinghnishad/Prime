import { User, AtSign, Mail, Lock } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';
import AuthForm from '../../components/auth/AuthForm';
import useAuthForm from '../../hooks/useAuthForm';
import { validateRegister } from '../../components/auth/validators';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const { values, errors, loading, handleChange, handleSubmit } =
        useAuthForm(
            { fullName: '', username: '', email: '', password: '' },
            validateRegister,
            async (data, setErrors) => {
                const res = await register(data);
                res.success ? navigate('/dashboard') : setErrors({ form: res.error });
            }
        );

    const fields = [
        { id: 'fullName', label: 'Full Name', icon: User, placeholder: 'Enter your full name' },
        { id: 'username', label: 'Username', icon: AtSign, placeholder: 'Enter your username' },
        { id: 'email', label: 'Email', type: 'email', icon: Mail, placeholder: 'Enter your email' },
        { id: 'password', label: 'Password', type: 'password', icon: Lock, hasToggle: true, placeholder: 'Enter your password' }
    ];

    return (
        <AuthLayout title="Create Account" subtitle="Join us to start your journey">
            <AuthForm
                fields={fields}
                values={values}
                errors={errors}
                loading={loading}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitText="Sign Up"
            />
            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                    to="/login"
                    className="font-medium text-teal-600 hover:text-teal-500 hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </AuthLayout>
    );
};

export default Register;
