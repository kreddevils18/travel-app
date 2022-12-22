import Link from 'next/link';
import { useEffect, useState } from 'react';

const menus = [
  { name: 'home', link: '#' },
  { name: 'about', link: '#' },
  { name: 'explore', link: '#' },
  { name: 'pricing', link: '#' },
  { name: 'contact', link: '#' },
];

const Header = () => {
  const [color, setColor] = useState<string>('bg-transparent');

  const listenScrollEvent = (e: any) => {
    if (window.scrollY > 70) {
      setColor('bg-white');
    } else {
      setColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={`fixed top-0 w-full ${color}`}>
      <div className="container mx-auto py-4">
        <div className="flex items-center">
          <div className="w-20 h-10">
            <img src="logo.png" />
          </div>
          <div className="mx-auto">
            <ul className="flex items-center gap-x-6">
              {menus.map((item, key) => {
                return (
                  <li key={key}>
                    <Link href={item.link} className="capitalize">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="bg-green-600 text-white px-4 py-2 rounded-3xl shadow"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
