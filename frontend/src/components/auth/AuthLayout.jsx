import React from 'react';

const AuthLayout = ({ title, subtitle, children }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-teal-200 via-teal-100 to-emerald-100 p-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                    {subtitle && (
                        <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
                    )}
                </div>

                {/* Body */}
                <div className="px-8 py-10">
                    {children}
                </div>

            </div>
        </div>
    );
};

export default AuthLayout;
