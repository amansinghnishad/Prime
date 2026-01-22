export const validateRegister = (data) => {
    const errors = {};

    if (!data.fullName?.trim()) errors.fullName = 'Full name is required';
    if (!data.username?.trim()) errors.username = 'Username is required';

    if (!data.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email address';
    }

    if (!data.password || data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return errors;
};

export const validateLogin = (data) => {
    const errors = {};

    if (!data.email) errors.email = 'Email is required';
    if (!data.password) errors.password = 'Password is required';

    return errors;
};
