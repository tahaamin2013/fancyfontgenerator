import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold font-sans flex items-center gap-1"
    >
      <Image src="/Logo.png" alt="Logo" width={52} height={52} />
    </Link>
  );
};

export default Logo;
