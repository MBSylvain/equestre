import React from "react";

export default function NavigationLink({ href, children }) {
  return (
    <a
      href={href}
      className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      {children}
    </a>
  );
}
