import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const AuthInput = ({
    id,
    label,
    type = 'text',
    placeholder,
    icon: Icon,
    value,
    onChange,
    error,
    hasToggle = false,
    showPassword,
    onToggle
}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Icon className="h-5 w-5 text-gray-400" />
                </div>

                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`block w-full rounded-2xl py-3 pl-10 pr-10 bg-gray-50 outline-none transition-all focus:ring-2 sm:text-sm
            ${error
                            ? 'border border-red-500 focus:ring-red-500/20'
                            : 'border border-gray-200 focus:ring-teal-500/20 focus:border-teal-500'
                        }`}
                />

                {hasToggle && (
                    <button
                        type="button"
                        onClick={onToggle}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>

            {error && (
                <p className="mt-1 text-xs text-red-500">{error}</p>
            )}
        </div>
    );
};

export default AuthInput;
