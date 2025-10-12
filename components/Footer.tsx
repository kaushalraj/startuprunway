// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Policy Link */}
        <div>
          <Link
            href="/trust-policy"
            className="text-sm md:text-base hover:text-white underline"
          >
            StartupRunway Trust, Data Protection & Transparency Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm md:text-base text-gray-400">
          © {new Date().getFullYear()} StartupRunway. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

