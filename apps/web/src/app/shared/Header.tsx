import { SunMedium } from "lucide-react";
import Link from "next/link";

const Header = () => (
  <header className="w-full px-6 py-6 bg-[var(--background)] shadow-md flex justify-center items-center">
    <Link href="/">
      <SunMedium size={40} className="text-[var(--accent)] hover:scale-105 transition" />
    </Link>
  </header>
);

export default Header;
