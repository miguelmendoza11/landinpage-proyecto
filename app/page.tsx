import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] p-4 md:p-6 lg:p-8">
      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <Header />
        
        {/* Hero Section */}
        <main className="relative bg-gradient-to-bl from-[#8b2e2e] via-[#b85555] to-[#d4938a] overflow-hidden">
          {/* Decorative bubbles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Blurred glow bubbles */}
            <div className="absolute top-10 left-16 w-32 h-32 bg-[#a03030] rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute top-32 right-32 w-48 h-48 bg-[#7a1e1e] rounded-full opacity-35 blur-3xl"></div>
            <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-[#c06060] rounded-full opacity-30 blur-2xl"></div>
            {/* Small crisp bubbles */}
            <div className="absolute top-6 left-1/2 w-5 h-5 bg-white/15 rounded-full border border-white/20"></div>
            <div className="absolute top-14 left-[60%] w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="absolute top-4 right-20 w-7 h-7 bg-white/10 rounded-full border border-white/20"></div>
            <div className="absolute top-24 right-10 w-4 h-4 bg-white/15 rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-6 h-6 bg-white/10 rounded-full border border-white/20"></div>
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-8 right-1/4 w-8 h-8 bg-white/10 rounded-full border border-white/15"></div>
            <div className="absolute bottom-16 left-12 w-4 h-4 bg-white/15 rounded-full"></div>
            <div className="absolute bottom-4 right-12 w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="absolute top-8 left-[35%] w-2 h-2 bg-white/25 rounded-full"></div>
            <div className="absolute bottom-12 left-[55%] w-5 h-5 bg-white/10 rounded-full border border-white/20"></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/20 rounded-full"></div>
            {/* Medium bubbles */}
            <div className="absolute top-16 right-1/2 w-10 h-10 bg-white/8 rounded-full border border-white/15"></div>
            <div className="absolute bottom-20 right-16 w-12 h-12 bg-[#a03030]/40 rounded-full border border-white/10"></div>
            <div className="absolute top-1/3 right-8 w-9 h-9 bg-white/8 rounded-full border border-white/15"></div>
          </div>

          <div className="relative container mx-auto px-4 md:px-8 py-10 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Left side - Large cake image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white p-2 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torta%20principal-WzGSlcy63JMAbjQuQX2xh0ThYqrMXv.jpg"
                        alt="Chocolate cake with berries"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Center - Text content */}
              <div className="flex flex-col items-center lg:items-start space-y-6">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                    DECADENT
                  </h1>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                    CHOCOLATE
                  </h1>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    BLISS!
                  </h1>
                  <p className="text-xl md:text-2xl text-white font-light mb-6">
                    Satify Your Sweetest Cravings
                  </p>

                  {/* Special Offer Badge */}
                  <div className="inline-block bg-[#8b2e2e] px-6 py-3 rounded-full">
                    <p className="text-sm text-white font-semibold">Special Offer!</p>
                    <p className="text-2xl md:text-3xl text-white font-bold">SAVE 20%</p>
                  </div>
                </div>
              </div>

              {/* Right side - Small cake images stacked vertically */}
              <div className="hidden lg:flex flex-col gap-4 items-center">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white p-2 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torta%20principal3-jqa5p0jtiks7H7WSo6FNudItXWcZZk.jpg"
                      alt="Chocolate cake with decorations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white p-2 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torta%20principal%202-2EF6gTreCKQiqdNjUnw956RjAYTOTK.jpg"
                      alt="Chocolate bundt cake"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Menu & Content Container */}
        <div className="bg-[#fdf8f4] rounded-t-[3rem] -mt-12 relative z-10 px-6 md:px-12 py-12">
          {/* Menu Section */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row items-start justify-start gap-6">
              {/* Left Side - Menu Title and Icons */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#8b2e2e] mb-2">Menu</h2>
                <p className="text-lg text-[#8b2e2e] mb-6">What will you wish for?</p>
                
                {/* Small Pink Icons */}
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#fceeed] border-2 border-[#8b2e2e] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#8b2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-[#fceeed] border-2 border-[#8b2e2e] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#8b2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-[#fceeed] border-2 border-[#8b2e2e] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#8b2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Side - Category Cards */}
              <div className="w-full md:ml-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-3 bg-[#8b2e2e] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8" />
                      <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
                      <path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#8b2e2e] uppercase">Classic</h3>
                </div>
                
                <div className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-3 bg-[#8b2e2e] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 15c-4.97 0 -9 -2.462 -9 -5.5s4.03 -5.5 9 -5.5s9 2.462 9 5.5s-4.03 5.5 -9 5.5" />
                      <path d="M12 6.97c3 0 4 1.036 4 1.979c0 2.805 -8 2.969 -8 -.99c0 -2.11 1.5 -3.959 4 -3.959" />
                      <path d="M21 9.333v5.334c0 2.945 -4.03 5.333 -9 5.333c-4.97 0 -9 -2.388 -9 -5.333v-5.334" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#8b2e2e] uppercase">Gourmet</h3>
                </div>
                
                <div className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-3 bg-[#8b2e2e] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 11l8 2c1.361 -.545 2 -1.248 2 -2v-3.8c0 -1.765 -4.479 -3.2 -10.002 -3.2c-5.522 0 -9.998 1.435 -9.998 3.2v2.8c0 1.766 4.478 4 10 4v-3" />
                      <path d="M12 14v3l8 2c1.362 -.547 2 -1.246 2 -2v-3c0 .754 -.638 1.453 -2 2l-8 -2" />
                      <path d="M2 17c0 1.766 4.476 3 9.998 3l.002 -3c-5.522 0 -10 -1.734 -10 -3.5v3.5" />
                      <path d="M2 10v4" />
                      <path d="M22 10v4" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#8b2e2e] uppercase">Desserts</h3>
                </div>
                
                <div className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-3 bg-[#8b2e2e] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 13v.01" />
                      <path d="M12 17v.01" />
                      <path d="M12 12v.01" />
                      <path d="M16 14v.01" />
                      <path d="M11 8v.01" />
                      <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296q -.745 1.18 -1.024 1.852q -.283 .684 -.66 2.216a3 3 0 0 1 -1.624 1.623q -1.572 .394 -2.216 .661q -.712 .295 -1.852 1.024a3 3 0 0 1 -2.296 0q -1.203 -.754 -1.852 -1.024q -.707 -.292 -2.216 -.66a3 3 0 0 1 -1.623 -1.624q -.397 -1.577 -.661 -2.216q -.298 -.718 -1.024 -1.852a3 3 0 0 1 0 -2.296q .719 -1.116 1.024 -1.852q .257 -.62 .66 -2.216a3 3 0 0 1 1.624 -1.623q 1.547 -.384 2.216 -.661q .687 -.285 1.852 -1.024a3 3 0 0 1 2.296 0" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#8b2e2e] uppercase">Cookies</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Bestsellers Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8b2e2e] mb-8">Bestsellers from Across the Country</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Cake Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-4">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torta%201-SfN9w0oYZzF2cEeKzJsfPrNNm9dQnP.jpg"
                    alt="Rich Chocolate Truffle Cake"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[#8b2e2e] mb-2">Rich Chocolate Truffle Cake</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-[#8b2e2e]">₹500</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-500">(145)</span>
                  </div>
                </div>
                <button className="w-8 h-8 bg-[#8b2e2e] text-white rounded-full flex items-center justify-center ml-auto hover:bg-[#6b1e1e] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Cake Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-4">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torta%202-7wyNH3bnGkz9Odr83vFqweaCZDYzbA.jpg"
                    alt="Choco Chip Truffle Cake"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[#8b2e2e] mb-2">Choco Chip Truffle Cake</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-[#8b2e2e]">₹599</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-500">(98)</span>
                  </div>
                </div>
                <button className="w-8 h-8 bg-[#8b2e2e] text-white rounded-full flex items-center justify-center ml-auto hover:bg-[#6b1e1e] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Cake Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-4">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torta%203-w3a1sE2sq1YlVCBLDQk236qFH4GGw0.jpg"
                    alt="Tropical Fruit N Almond Cake"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[#8b2e2e] mb-2">Tropical Fruit N Almond Cake</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-[#8b2e2e]">₹699</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-500">(156)</span>
                  </div>
                </div>
                <button className="w-8 h-8 bg-[#8b2e2e] text-white rounded-full flex items-center justify-center ml-auto hover:bg-[#6b1e1e] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Cake Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-4">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torta%204-zO56HNB5UxyHKYRh2c1o0xm3JWOf8l.jpg"
                    alt="Rich Butterscotch Crunch Cake"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[#8b2e2e] mb-2">Rich Butterscotch Crunch Cake</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-[#8b2e2e]">₹549</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-500">(203)</span>
                  </div>
                </div>
                <button className="w-8 h-8 bg-[#8b2e2e] text-white rounded-full flex items-center justify-center ml-auto hover:bg-[#6b1e1e] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-right">
              <button className="bg-[#8b2e2e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6b1e1e] transition-colors">
                VIEW ALL
              </button>
            </div>
          </section>

          {/* Our Promise Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#8b2e2e] mb-2">Our Promise</h2>
            <p className="text-lg text-[#8b2e2e] mb-8">Therts no secret spell - only honest the wark!</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Promise Features */}
              <div className="space-y-6">
                <div className="bg-[#fceeed] rounded-2xl p-6 md:p-8 pb-10 md:pb-50">
                  <p className="text-[#8b2e2e] font-medium text-center mb-8 text-2xl">A glimpse roa secret spell - only hacial world!</p>

                  <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-6 mb-8 mt-6 md:mt-40">
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 border-2 border-[#8b2e2e] rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 md:w-16 md:h-16 text-[#8b2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-[#8b2e2e] uppercase">On-Time<br/>Delivery</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 border-2 border-[#8b2e2e] rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 md:w-16 md:h-16 text-[#8b2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-[#8b2e2e] uppercase">999+<br/>Designs</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 border-2 border-[#8b2e2e] rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 md:w-16 md:h-16 text-[#8b2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-[#8b2e2e] uppercase">2 CR+<br/>Orders</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 border-2 border-[#8b2e2e] rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 md:w-16 md:h-16 text-[#8b2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-[#8b2e2e] uppercase">Baked<br/>Fresh</p>
                    </div>
                  </div>
                </div>

                {/* Magical Ticket */}
                <div className="bg-[#fceeed] rounded-2xl p-6 md:p-8 py-8 md:py-40 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="/ticket.jpeg"
                      alt="Magical Ticket"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#8b2e2e] mb-2">THE MAGICAL TICKET</h3>
                    <p className="text-sm text-[#8b2e2e] mb-3">Add 3 reminders in your account.<br/>Win offers worth Rs. 750</p>
                    <button className="bg-[#8b2e2e] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#6b1e1e] transition-colors">
                      UNLOCK NOW
                    </button>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="bg-[#fceeed] rounded-2xl p-6 py-6 md:py-15 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <img src="/maluma.jpg" alt="maluma" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/james.jpg" alt="james" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/padre.jpg" alt="padre" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/epaColombia.jpg" alt="epaColombia" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/cuentaHuesos.jpg" alt="cuentaHuesos" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  </div>
                  <p className="text-[#8b2e2e] font-semibold">Follow us on social!</p>
                </div>
              </div>

              {/* Right Column - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tortaAmarilla.png-h7GiurQLhblzXJx233c8mHzF9pDTO1.jpeg"
                    alt="Birthday celebration cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whiteWoman.png-MdtRmJO4fkGosJ8k3Myeyh6SXix9zI.jpeg"
                    alt="Woman with cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cakeWoman.png-XcCHXxrJrVRGRIH2dn4Qln5QGpIYvU.jpeg"
                    alt="Celebration cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menCake.png-cgxCEOA1qqniihcJ5P2nPGUcGZtwk6.jpeg"
                    alt="Men with cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brotherCake.png-qBQavniYGjlRIjB02gJEuZeHcGRB9x.jpeg"
                    alt="Brothers with wedding cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cutieCake.png-CnWLF6QkO3buhxiRloHeB8Zq33VxvC.jpeg"
                    alt="Elegant decorative cake"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Banner FSSAI */}
          <div className="bg-[#8b2e2e] rounded-2xl px-8 py-6 mb-0">
            <p className="text-white text-center text-xl font-bold">
              Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white px-4 md:px-12 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-black text-[#8b2e2e] mb-3">Dakingo</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Our Story</li>
                <li>Contact Us</li>
                <li>Loyalra Molas</li>
                <li>Woalla</li>
                <li>Conenp</li>
              </ul>
            </div>

            {/* Know Us */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Know Us</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Need Help */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Need Help</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Cancellation And Refund</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* More Info 1 */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">More Info</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Terms And Gificy</li>
                <li>Customs Greinrame</li>
              </ul>
            </div>

            {/* More Info 2 */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">More Info</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Coupons & Offers</li>
                <li>Download App</li>
              </ul>
            </div>

          </div>

          {/* Subscribe + Help row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 mt-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-[#8b2e2e] w-full sm:w-56"
            />
            <button className="bg-[#8b2e2e] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#6b1e1e] transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
            <button className="flex items-center gap-2 bg-[#fceeed] border border-[#8b2e2e] text-[#8b2e2e] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#f5d5d5] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Hey, need any help?
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
