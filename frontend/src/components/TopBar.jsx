import { useState, useRef } from 'react';
import { Menu, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import useClickOutside from '../hooks/useClickOutside';
import ProfileDropdown from './ProfileDropdown';

const TopBar = () => {
    const { user, logout } = useAuth();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef(null);

    useClickOutside(dropdownRef, () => setIsProfileOpen(false));

    return (
        <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left */}
                <div className="flex items-center gap-4">
                    <button className="lg:hidden text-gray-500 hover:text-gray-700">
                        <Menu className="h-6 w-6" />
                    </button>

                    <h1 className="text-xl font-bold text-teal-600">
                        PrimeTrade
                    </h1>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">


                    <ProfileDropdown
                        user={user}
                        isOpen={isProfileOpen}
                        onToggle={() => setIsProfileOpen((p) => !p)}
                        onLogout={logout}
                        dropdownRef={dropdownRef}
                    />
                </div>

            </div>
        </header>
    );
};

export default TopBar;
