// Client API minimal pour communiquer avec le backend Node/Express.
// En développement, Vite proxy /api vers http://localhost:4000 (voir vite.config.js).
// En production, définir VITE_API_URL (ex: https://api.dch-nettoyage.fr) dans un fichier .env.

const API_BASE = import.meta.env.VITE_API_URL || '/api/v1'

class ApiError extends Error {
  constructor(message, status, details) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}

export async function sendContactRequest(payload) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let body = null
  try {
    body = await response.json()
  } catch {
    // réponse non-JSON : on garde body à null
  }

  if (!response.ok) {
    throw new ApiError(
      body?.message || "Une erreur est survenue lors de l'envoi de votre demande.",
      response.status,
      body?.errors,
    )
  }

  return body
}

export { ApiError }
