import Link from 'next/link';

export default function NavLink({ children, href, ...props }) {
  return (
    <Link
      href={href}
      {...props}
      className={`py-2.5 px-4 text-center rounded-lg duration-150 ${
        props?.className || ''
      }`}
    >
      {children}
    </Link>
  );
}
