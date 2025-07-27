// pages/index.tsx
import ContactForm from "@/src/components/EmailForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <ContactForm />
    </div>
  );
}