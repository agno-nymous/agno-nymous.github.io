export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Main gradient background */}
      <div 
        className="absolute left-1/2 -top-1/4 w-[40vmax] h-[40vmax] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-gradient-conic animate-spin" 
        style={{ animationDuration: '55s' }} 
      />
      
      {/* Lava lamp style bubbles - modern GitHub/Discord colors - slow moving */}
      <div 
        className="absolute w-40 h-40 rounded-full blur-xl opacity-70 animate-bounce-custom bubble-1" 
        style={{ 
          background: 'radial-gradient(closest-side, #0969da, #58a6ff 50%, transparent 80%)',
          animationDuration: '25s',
          animationDelay: '0s'
        }} 
      />
      <div 
        className="absolute w-32 h-32 rounded-full blur-lg opacity-75 animate-bounce-custom bubble-2" 
        style={{ 
          background: 'radial-gradient(closest-side, #8250df, #a5a5ff 50%, transparent 80%)',
          animationDuration: '35s',
          animationDelay: '0s'
        }} 
      />
      <div 
        className="absolute w-48 h-48 rounded-full blur-xl opacity-65 animate-bounce-custom bubble-3" 
        style={{ 
          background: 'radial-gradient(closest-side, #fb8500, #d29922 50%, transparent 80%)',
          animationDuration: '40s',
          animationDelay: '0s'
        }} 
      />
      <div 
        className="absolute w-36 h-36 rounded-full blur-lg opacity-80 animate-bounce-custom bubble-4" 
        style={{ 
          background: 'radial-gradient(closest-side, #d1242f, #f85149 50%, transparent 80%)',
          animationDuration: '30s',
          animationDelay: '0s'
        }} 
      />
      <div 
        className="absolute w-44 h-44 rounded-full blur-xl opacity-70 animate-bounce-custom bubble-5" 
        style={{ 
          background: 'radial-gradient(closest-side, #1a7f37, #3fb950 50%, transparent 80%)',
          animationDuration: '45s',
          animationDelay: '0s'
        }} 
      />
      <div 
        className="absolute w-28 h-28 rounded-full blur-lg opacity-85 animate-bounce-custom bubble-6" 
        style={{ 
          background: 'radial-gradient(closest-side, #656d76, #8c959f 50%, transparent 80%)',
          animationDuration: '28s',
          animationDelay: '0s'
        }} 
      />
      <div 
        className="absolute w-52 h-52 rounded-full blur-2xl opacity-60 animate-bounce-custom bubble-7" 
        style={{ 
          background: 'radial-gradient(closest-side, #0969da, #8250df 50%, transparent 80%)',
          animationDuration: '50s',
          animationDelay: '0s'
        }} 
      />
      <div 
        className="absolute w-24 h-24 rounded-full blur-md opacity-90 animate-bounce-custom bubble-8" 
        style={{ 
          background: 'radial-gradient(closest-side, #fb8500, #1a7f37 50%, transparent 80%)',
          animationDuration: '32s',
          animationDelay: '0s'
        }} 
      />
      
      {/* Background ambient gradients - GitHub style */}
      <div 
        className="absolute -right-8 -top-6 w-[32vmax] h-[32vmax] rounded-full blur-3xl opacity-15 animate-pulse" 
        style={{ 
          animationDuration: '20s',
          background: 'radial-gradient(closest-side, #8250df, transparent 70%)'
        }} 
      />
      <div 
        className="absolute -left-6 -bottom-8 w-[34vmax] h-[34vmax] rounded-full blur-3xl opacity-10 animate-pulse" 
        style={{ 
          animationDuration: '25s',
          background: 'radial-gradient(closest-side, #0969da, transparent 70%)'
        }} 
      />
    </div>
  );
}