import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'fas fa-home', label: 'Home' },
    { path: '/tournament/1', icon: 'fas fa-trophy', label: 'Tournament' },
    { path: '/profile', icon: 'fas fa-user', label: 'Profile' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/tournament/1') return location.pathname.startsWith('/tournament');
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2 shadow-lg">
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center gap-1 py-2 px-4 transition-all ${
            isActive(item.path) ? 'text-purple-600' : 'text-gray-500 hover:text-purple-600'
          }`}
        >
          <i className={`${item.icon} text-xl`}></i>
          <span className="text-xs font-semibold">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}