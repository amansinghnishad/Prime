import { User, LogOut, ChevronDown } from 'lucide-react';

const ProfileDropdown = ({
    user,
    isOpen,
    onToggle,
    onLogout,
    dropdownRef,
}) => {
    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={onToggle}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 ring-2 ring-white">
                    <User className="h-4 w-4" />
                </div>

                <span className="hidden sm:block text-sm font-medium text-gray-700">
                    {user?.fullName || user?.name || 'User'}
                </span>

                <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {isOpen && (
                <div
                    role="menu"
                    className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5"
                >
                    <div className="border-b border-gray-100 px-4 py-3">
                        <p className="text-sm text-gray-500">Signed in as</p>
                        <p className="truncate text-sm font-medium text-gray-900">
                            {user?.email}
                        </p>
                    </div>

                    <button
                        onClick={onLogout}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                        <LogOut className="h-4 w-4" />
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
