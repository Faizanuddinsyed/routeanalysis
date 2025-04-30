import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { path: '/reports/aerospace', label: 'Aerospace' },
    { path: '/reports/automobile', label: 'Automobile' },
    { path: '/reports/bio', label: 'Biotechnology' },
    { path: '/reports/chemical', label: 'Chemical' },
    { path: '/reports/consumer', label: 'Consumer' },
    { path: '/reports/energy', label: 'Energy' },
    { path: '/reports/food', label: 'Food' },
    { path: '/reports/health', label: 'Healthcare' },
    { path: '/reports/manufacturing', label: 'Manufacturing' },
    { path: '/reports/pharma', label: 'Pharma' },
    { path: '/reports/electronics', label: 'Electronics' },
    { path: '/reports/medical', label: 'Medical' },
    { path: '/reports/communication', label: 'Communication' },
    { path: '/reportpage', label: 'Report Page' },
    { path: '/allreports', label: 'All Reports' },
  ];

  return (
    <div className="w-64 h-screen fixed bg-gray-900 text-white p-5 space-y-2 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Reports</h2>
      {links.map(link => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-700 ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
