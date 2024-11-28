"use client"
import { Circle, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { BiAnalyse, BiHomeCircle } from 'react-icons/bi';

export default function BottomTabs() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', path: '/', icon: <Home/> },
    { name: 'Second', path: '/second', icon: <Circle/> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-screen bg-accent border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <Link key={tab.path} href={tab.path}>
            <div
              className={`flex flex-col items-center justify-center text-sm ${pathname === tab.path
                  ? 'text-primary font-semibold'
                  : 'text-gray-500'
                }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
