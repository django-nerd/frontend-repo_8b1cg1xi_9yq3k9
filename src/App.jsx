import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-50%,rgba(99,102,241,0.25),transparent),radial-gradient(400px_200px_at_-10%_60%,rgba(34,197,94,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-300 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Lost & Found</h1>
          <p className="text-xl text-blue-200 mb-8">A modern community platform to report lost items and match found ones.</p>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-xl mb-8 text-left">
            <ul className="space-y-3 text-blue-200/90">
              <li>• Report what you lost with photos and details</li>
              <li>• Get smart match alerts when similar items are found</li>
              <li>• Chat securely to verify and claim your belongings</li>
            </ul>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
            >
              Sign in
            </Link>
            <a
              href="/test"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-blue-100 border border-white/15 font-semibold transition-colors"
            >
              Backend test
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
