import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { authApi } from '../api/auth.api';
import { extractApiData } from '../api/api.utils';


const initialState = {
    user: null,
    loading: true,
    isAuthenticated: false,
};


const authReducer = (state, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false,
            };

        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loading: false,
            };

        case 'STOP_LOADING':
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);


    //  Check authentication

    useEffect(() => {
        const bootstrapAuth = async () => {
            try {
                const res = await authApi.getCurrentUser();
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: extractApiData(res),
                });
            } catch {
                dispatch({ type: 'STOP_LOADING' });
            }
        };

        bootstrapAuth();
    }, []);

    /* ------------------ ACTIONS ------------------ */

    const login = async (email, password) => {
        try {
            const res = await authApi.login({ email, password });
            dispatch({
                type: 'AUTH_SUCCESS',
                payload: extractApiData(res).user,
            });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const register = async (data) => {
        try {
            const res = await authApi.register(data);
            dispatch({
                type: 'AUTH_SUCCESS',
                payload: extractApiData(res).user,
            });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        try {
            await authApi.logout();
        } finally {
            dispatch({ type: 'LOGOUT' });
        }
    };

    /* ------------------ CONTEXT VALUE ------------------ */

    const value = {
        user: state.user,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!state.loading && children}
        </AuthContext.Provider>
    );
};

/* ------------------ HOOK ------------------ */

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return context;
};
