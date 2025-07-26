import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold font-sans flex items-center gap-1"
    >
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      caratteri speciali
    </Link>
  );
};

export default Logo;
