import React from "react";
import Link from "next/dist/client/link";

export default function Footer() {
  return (
    <footer className="py-4 container border-t mt-20">
      <p className="text-sm text-gray-400 text-center">
        Copyright ©
        <Link href="https://x.com/vanshsutariya" className="ml-1 text-primary">
          Vansh Sutariya
        </Link>
      </p>
    </footer>
  );
}
