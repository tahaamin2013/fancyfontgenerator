import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Heart } from "lucide-react"
import Logo from "./Logo"
import { BsPinterest, BsSubstack } from "react-icons/bs"
import Script from "next/script"

/**
 * Componente React che rappresenta il footer moderno del sito.
 *
 * @remarks
 * Il footer include la sezione del brand con logo e social, link rapidi a strumenti e risorse,
 * e una sezione inferiore con copyright, policy e credits.
 * Lo stile è responsive e supporta modalità chiara/scura.
 *
 * @returns {JSX.Element} Il footer del sito web.
 */
export default function ModernFooter() {
  const currentYear = new Date().getFullYear()


  return (
 <>
  <div className="my-4 flex justify-center">
      <div id="ad-container-728x90"></div>

      <Script
        id="adsterra-banner"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions = {
              'key' : '8fcc3f83c250f7ce7879dbd892cfc63b',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
            var container = document.getElementById("ad-container-728x90");
            if (container) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.src = "//www.highperformanceformat.com/8fcc3f83c250f7ce7879dbd892cfc63b/invoke.js";
              container.appendChild(script);
            }
          `,
        }}
      />
    </div>
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t">
      <div className="  mx-auto pt-12">
        {/* Main Footer Content */}
        <div className="grid px-7 grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
                  Crea e copia caratteri speciali e lettere in corsivo per i tuoi social media. Facile da usare, veloce e gratuito. Copia e incolla con un click.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61578756212680"
                target="_blank"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/CaratteriSpe"
                                target="_blank"

                className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.pinterest.com/caratterispeciali/"
                target="_blank"
                className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                aria-label="Pinterest"
              >
                <BsPinterest className="h-5 w-5" />
              </Link>
              <Link
                href="https://substack.com/@caratterispeciali"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                aria-label="Substack Newsletter"
              >
            <BsSubstack className="h-5 w-5" />
              </Link>
              <Link
                href="/contattaci"
                className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>

            </div>
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
                      href="/caratteri-speciali"
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


        {/* Bottom Footer */}
        <div className="flex  bg-stone-200 px-6  py-5 flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} carratteri speciali. Tutti i diritti riservati.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/termini-e-condizioni"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Termini e Condizioni
              </Link>
              <Link
                href="/disclaimer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Disclaimer
              </Link>
              <Link
              href="/contattaci"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
              Contattaci
              </Link>
              <Link
                href="/chi-siamo"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Chi siamo
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Fatto con </span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in Italia</span>
          </div>
        </div>
      </div>
    </footer></>
  )
}
