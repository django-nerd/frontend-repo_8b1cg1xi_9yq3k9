import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter your email and password')
      return
    }

    // Basic email format check
    const emailOk = /.+@.+\..+/.test(email)
    if (!emailOk) {
      setError('Please enter a valid email address')
      return
    }

    // Placeholder action for sign-in
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('This is a demo login template. Hook this form to your backend when ready.')
    }, 800)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_300px_at_80%_-50%,rgba(99,102,241,0.5),transparent),radial-gradient(400px_200px_at_-10%_60%,rgba(34,197,94,0.35),transparent)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_90%_30%,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10 lg:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-300">
                <path d="M3.5 12c0-4.694 3.806-8.5 8.5-8.5S20.5 7.306 20.5 12 16.694 20.5 12 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 14.5c.6-1.8 2.4-3 4.4-3 2.4 0 4.6 1.9 4.6 4.3 0 2.6-2.2 4.7-4.9 4.7-2.2 0-4.1-1.5-4.7-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="7" cy="9" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold leading-tight">Lost & Found</p>
              <p className="text-xs text-indigo-200/80">Sign in to report or claim</p>
            </div>
          </Link>
          <Link to="/" className="text-indigo-200 hover:text-white text-sm">Back to home</Link>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Pitch Panel */}
          <div className="hidden lg:flex relative">
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Welcome back</h2>
                <p className="mt-3 text-indigo-100/90 leading-relaxed">Sign in to track your reports, receive match alerts, and quickly claim items that might be yours.</p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white font-semibold">Smart Matching</p>
                    <p className="text-xs text-indigo-100/80 mt-1">We notify you when found items resemble what you lost.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white font-semibold">Safe Community</p>
                    <p className="text-xs text-indigo-100/80 mt-1">Verified profiles and transparent communication.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white font-semibold">Fast Claims</p>
                    <p className="text-xs text-indigo-100/80 mt-1">Guided steps to prove ownership and recover items.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white font-semibold">Everywhere</p>
                    <p className="text-xs text-indigo-100/80 mt-1">Works across campus, cities, and events.</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-10">
                <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-emerald-400/20 blur-2xl rounded-3xl" />
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20 p-6">
                  <p className="text-sm text-indigo-100">“I found my backpack within hours. The matching alerts were spot on.”</p>
                  <p className="mt-3 text-xs text-indigo-200/80">— A happy user</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="relative">
            <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 sm:p-10">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Sign in</h2>
                <p className="mt-2 text-sm text-indigo-100/90">Access your Lost & Found account</p>
              </div>

              {error && (
                <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 px-4 py-2 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-indigo-100 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-white/15 bg-white/10 text-white placeholder-indigo-200/60 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm text-indigo-100">Password</label>
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="text-xs text-indigo-200 hover:text-white"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full rounded-lg border border-white/15 bg-white/10 text-white placeholder-indigo-200/60 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 text-sm text-indigo-100/90">
                    <input type="checkbox" className="accent-indigo-500/90" />
                    Remember me
                  </label>
                  <button type="button" className="text-sm text-indigo-200 hover:text-white">Forgot password?</button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-semibold py-2.5 transition-colors"
                >
                  {loading ? 'Signing in…' : 'Sign in'}
                </button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-transparent px-2 text-xs text-indigo-200/80">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button type="button" className="rounded-lg border border-white/15 bg-white/5 text-indigo-50 py-2.5 hover:bg-white/10 transition-colors">
                    Google
                  </button>
                  <button type="button" className="rounded-lg border border-white/15 bg-white/5 text-indigo-50 py-2.5 hover:bg-white/10 transition-colors">
                    Apple
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-indigo-200/80">
                New here? <button className="text-white hover:underline">Create an account</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
