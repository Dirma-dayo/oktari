import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{ backgroundColor: "#1e90ff", color: "#ffffff" }}
      className="p-4 flex items-center justify-between"
    >
      {/* logo */}
      <Link href="/" className="flex items-center cursor-pointer">
        <img src="/logo small.png" alt="logo" className="h-10 w-10 mr-2" />
        <h1 className="text-xl font-bold"></h1>
      </Link>

      {/* navbar */}
      <nav className="flex items-center space-x-4">
        <Link href="/" className="px-3 py-2 rounded hover:bg-white hover:text-blue-600">
          Home
        </Link>
        <Link href="/showcase" className="px-3 py-2 rounded hover:bg-white hover:text-blue-600">
          Showcase
        </Link>
        <Link href="/course" className="px-3 py-2 rounded hover:bg-white hover:text-blue-600">
          Course
        </Link>
        <Link href="/information" className="px-3 py-2 rounded hover:bg-white hover:text-blue-600">
          Information
        </Link>
      </nav>
    </header>
  );
}
