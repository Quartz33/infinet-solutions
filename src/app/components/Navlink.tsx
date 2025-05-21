import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href} className={`text-white font-bold hover:text-gray-100 transition ${className || ""}`}>
      {children}
    </Link>
  );
}