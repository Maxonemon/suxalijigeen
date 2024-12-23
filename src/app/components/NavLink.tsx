import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  const baseClasses = "text-white hover:text-orange-200 transition-colors duration-200 font-semibold";
  const mobileClasses = mobile ? "block py-2 text-orange-100" : "";
  
  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  );
}