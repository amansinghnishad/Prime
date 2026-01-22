import React, { useState } from 'react';
import AuthInput from './AuthInput';

const AuthForm = ({
    fields,
    values,
    errors,
    loading,
    onChange,
    onSubmit,
    submitText
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            {fields.map((field) => (
                <AuthInput
                    key={field.id}
                    {...field}
                    type={field.hasToggle && showPassword ? 'text' : field.type}
                    value={values[field.id]}
                    onChange={onChange}
                    error={errors[field.id]}
                    showPassword={showPassword}
                    onToggle={() => setShowPassword((prev) => !prev)}
                />
            ))}

            {errors.form && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-500">
                    {errors.form}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 disabled:opacity-50"
            >
                {loading ? 'Please wait...' : submitText}
            </button>
        </form>
    );
};

export default AuthForm;
