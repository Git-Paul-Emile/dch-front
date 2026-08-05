import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import { company, services } from '../lib/siteData.js'
import { sendContactRequest, ApiError } from '../lib/api.js'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  service: '',
  message: '',
  // honeypot anti-spam : champ invisible pour les humains, souvent rempli par les bots
  website: '',
}

function validateField(field, value) {
  switch (field) {
    case 'name':
      if (!value.trim()) return 'Votre nom est requis.'
      if (value.trim().length < 2) return 'Le nom doit contenir au moins 2 caractères.'
      return ''
    case 'email':
      if (!value.trim()) return 'Votre email est requis.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Format d\'email invalide (ex : nom@domaine.fr).'
      return ''
    case 'phone':
      if (!value.trim()) return 'Votre téléphone est requis.'
      if (!/^[0-9+\s().-]{8,20}$/.test(value)) return 'Numéro de téléphone invalide.'
      return ''
    case 'service':
      if (!value) return 'Merci de sélectionner une prestation.'
      return ''
    case 'message':
      if (!value.trim()) return 'Merci de décrire votre besoin.'
      if (value.trim().length < 10) return 'Merci de préciser un peu plus votre demande (10 caractères minimum).'
      return ''
    default:
      return ''
  }
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fields = ['name', 'email', 'phone', 'service', 'message']
    const nextErrors = {}
    fields.forEach((f) => {
      nextErrors[f] = validateField(f, form[f])
    })
    setErrors(nextErrors)
    setTouched(Object.fromEntries(fields.map((f) => [f, true])))

    const hasErrors = Object.values(nextErrors).some(Boolean)
    if (hasErrors) return

    // Honeypot : si rempli, on simule un succès sans rien envoyer (piège à bots)
    if (form.website) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setServerError('')
    try {
      await sendContactRequest({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        companyName: form.companyName.trim(),
        service: form.service,
        message: form.message.trim(),
      })
      setStatus('success')
      setForm(initialForm)
      setTouched({})
    } catch (err) {
      setStatus('error')
      if (err instanceof ApiError) {
        setServerError(err.message)
      } else {
        setServerError("Impossible d'envoyer votre demande pour le moment. Merci de réessayer ou de nous appeler directement.")
      }
    }
  }

  if (status === 'success') {
    return (
      <section className="section bg-surface">
        <div className="container-content max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-3">Demande envoyée avec succès</h1>
          <p className="text-ink/70">
            Merci pour votre message. Notre équipe revient vers vous sous 24h ouvrées pour établir votre devis.
          </p>
          <button type="button" className="btn-outline mt-8" onClick={() => setStatus('idle')}>
            Envoyer une nouvelle demande
          </button>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title="Contact & devis nettoyage Paris | DCH Nettoyage Multiservices"
        description="Demandez un devis gratuit pour votre nettoyage de bureaux, nettoyage de locaux professionnels, désinfection, débarras ou jardinage à Paris et en Île-de-France. Réponse sous 24h."
        keywords="devis nettoyage Paris, devis gratuit nettoyage, tarif nettoyage entreprise, nettoyage urgent Paris, intervention rapide nettoyage, nettoyage 7j/7, nettoyage 24h/24"
        path="/contact"
      />

      <section className="bg-primary">
        <div className="container-content py-16 sm:py-20">
          <span className="eyebrow text-accent">Contact</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white max-w-2xl">
            Demandez votre devis gratuit
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">Réponse sous 24h ouvrées, sans engagement.</p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby={serverError ? 'form-error' : undefined}>
              {serverError && (
                <div id="form-error" role="alert" className="rounded-lg border border-danger/30 bg-danger/5 p-4 text-sm text-danger flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.007M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z" />
                  </svg>
                  <span>{serverError}</span>
                </div>
              )}

              {/* Honeypot anti-spam, invisible pour les humains */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Ne pas remplir</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="name" className="label">Nom complet *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={`input ${errors.name && touched.name ? 'input-error' : ''}`}
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.name && touched.name)}
                  aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                />
                {errors.name && touched.name && (
                  <p id="name-error" className="error-text">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="label">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className={`input ${errors.email && touched.email ? 'input-error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.email && touched.email)}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="error-text">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="label">Téléphone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className={`input ${errors.phone && touched.phone ? 'input-error' : ''}`}
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.phone && touched.phone)}
                    aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && touched.phone && (
                    <p id="phone-error" className="error-text">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="label">Entreprise (optionnel)</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  autoComplete="organization"
                  className="input"
                  value={form.companyName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="service" className="label">Prestation souhaitée *</label>
                <select
                  id="service"
                  name="service"
                  className={`input ${errors.service && touched.service ? 'input-error' : ''}`}
                  value={form.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.service && touched.service)}
                  aria-describedby={errors.service && touched.service ? 'service-error' : undefined}
                >
                  <option value="">Sélectionnez une prestation</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                  <option value="autre">Autre demande</option>
                </select>
                {errors.service && touched.service && (
                  <p id="service-error" className="error-text">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="label">Votre besoin *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`input ${errors.message && touched.message ? 'input-error' : ''}`}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.message && touched.message)}
                  aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  placeholder="Type de locaux, surface, fréquence souhaitée, date d'intervention…"
                />
                {errors.message && touched.message && (
                  <p id="message-error" className="error-text">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Envoi en cours…
                  </>
                ) : (
                  'Envoyer ma demande'
                )}
              </button>
              <p className="text-xs text-ink/50">* Champs obligatoires. Vos données ne sont utilisées que pour traiter votre demande.</p>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="card p-6">
              <h2 className="font-heading font-semibold text-primary mb-4">Nos coordonnées</h2>
              <ul className="space-y-3 text-sm text-ink/70">
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>
                    <a href={company.phoneHref} className="hover:text-accent-600">{company.phone}</a>
                    {' · '}
                    <a href={company.phone2Href} className="hover:text-accent-600">{company.phone2}</a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${company.email}`} className="hover:text-accent-600 break-all">{company.email}</a>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{company.address}</span>
                </li>
                <li className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{company.hours}</span>
                </li>
              </ul>
            </div>
            <div className="card p-6 bg-primary text-white">
              <h2 className="font-heading font-semibold mb-2">Besoin urgent ?</h2>
              <p className="text-sm text-white/80 mb-4">Appelez-nous directement, nous vous répondons rapidement.</p>
              <a href={company.phoneHref} className="btn-primary w-full">{company.phone}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
