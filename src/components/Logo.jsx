function Logo({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="h-8 w-8 rounded-lg bg-indigo-500/20 border border-indigo-300/30 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
          <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="leading-tight">
        <p className="text-white font-semibold">Lost & Found</p>
        <p className="text-[10px] text-indigo-200/80 -mt-0.5">Community</p>
      </div>
    </div>
  )
}

export default Logo
