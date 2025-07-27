"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Mail, User, MessageSquare, Send, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("🚀 Form submission started")
    console.log("Form data:", formData)

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("❌ Per favore compila tutti i campi richiesti.")
      return
    }

    setIsSubmitting(true)

    try {
      console.log("📤 Sending request to API...")

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      })

      console.log("📥 Response status:", response.status)
      console.log("📥 Response ok:", response.ok)

      const result = await response.json()
      console.log("📥 Response data:", result)

      if (response.ok && result.success) {
        alert("✅ Messaggio inviato con successo! Ti risponderemo entro 24 ore.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        console.error("❌ Server error:", result)
        alert(`❌ Errore: ${result.error || result.message || "Errore sconosciuto"}`)

        // Show additional details in console for debugging
        if (result.details) {
          console.error("Error details:", result.details)
        }
      }
    } catch (networkError: any) {
      console.error("❌ Network error:", networkError)
      alert(`❌ Errore di rete: ${networkError.message}. Controlla la connessione e riprova.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Grid - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Contattaci per
                <span className="text-emerald-600 block">Supporto Gratuito</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hai domande sui caratteri speciali per i tuoi social media? Il nostro team è qui per aiutarti con
                Instagram, Facebook, TikTok e molto altro.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">caratterispeciali93@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tempo di Risposta</h3>
                  <p className="text-gray-600">Entro 24 ore, 7 giorni su 7</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Supporto</h3>
                  <p className="text-gray-600">Team italiano, assistenza in italiano</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Come possiamo aiutarti?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Caratteri speciali per Instagram e Facebook</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Font corsivi e simboli per TikTok</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Caratteri Unicode per WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Lettere stilizzate per YouTube e Twitter</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Supporto tecnico e risoluzione problemi</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-emerald-600">24h</div>
                <div className="text-sm text-gray-600">Risposta</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-emerald-600">🇮🇹</div>
                <div className="text-sm text-gray-600">Italiano</div>
              </div>
            </div>

            {/* Debug Info */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">🔧 Debug Info</h4>
              <p className="text-sm text-yellow-700">
                Se il form non funziona, apri la Console del browser (F12) per vedere i dettagli dell'errore.
              </p>
            </div>
          </div>

          {/* Right Grid - Contact Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4 shadow-lg">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Invia un Messaggio</h2>
                <p className="text-gray-600">Compila il form e ti risponderemo presto</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-600" />
                    Nome Completo
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 text-gray-900 placeholder:text-gray-400 disabled:opacity-50"
                    placeholder="Il tuo nome completo"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    Indirizzo Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 text-gray-900 placeholder:text-gray-400 disabled:opacity-50"
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    Il Tuo Messaggio
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 text-gray-900 placeholder:text-gray-400 resize-none disabled:opacity-50"
                    placeholder="Descrivi il tuo problema o la tua domanda sui caratteri speciali..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Invia Messaggio
                    </>
                  )}
                </Button>
              </form>

              {/* Form Footer */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  Ti risponderemo entro <span className="font-semibold text-emerald-600">24 ore</span> 📧
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
