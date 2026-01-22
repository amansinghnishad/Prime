import { useState } from 'react';

const useAuthForm = (initialValues, validate, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            await onSubmit(values, setErrors);
        } finally {
            setLoading(false);
        }
    };

    return {
        values,
        errors,
        loading,
        handleChange,
        handleSubmit
    };
};

export default useAuthForm;
