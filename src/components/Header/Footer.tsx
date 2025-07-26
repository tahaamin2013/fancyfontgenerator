import Link from "next/link"
import Logo from "./Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 ">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
              Generatore di font e caratteri speciali per personalizzare testi, nomi e messaggi sui social. Scopri strumenti creativi per rendere unici i tuoi contenuti online.
            </p>
   
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Strumenti Testo
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/carratteri-speciali"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Caratteri Speciali
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nomi-speciale"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Nomi Speciali
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/generatore-testo-corsivo"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Testo Corsivo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/font-corsivo"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Font Corsivo
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Simboli & Codici
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/lista-de-atalhos-do-teclado-para"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Scorciatoie Alt Code
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/special-character-table-in-html"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Tabella HTML
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Emoticons & Emoji
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/text-characters-emoticons"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Emoticons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emojis"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Emojis
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Mezzi Sociali
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/social/generatore-di-caratteri-per-whatsapp"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      WhatsApp
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/social/generatore-di-caratteri-per-twitter"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/social/generatore-di-caratteri-per-tumblr"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Tumblr
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/social/generatore-di-caratteri-per-instagram"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/social/generatore-di-caratteri-per-facebook"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/social/generatore-di-caratteri-per-nickname"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      Nickname
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
