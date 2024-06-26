import Head from 'next/head';

export const Header = ()=>{return(
  <header className="w-full py-4 bg-white shadow-md">
    <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      {/* Logo and navigation */}
      <div className="flex items-center gap-8">
        <img src="https://quickjobs.app/img/en-logo-beta.svg" alt="Quickjobs Logo" className="h-10" />
        <div className="flex gap-4">
          <a href="/careers" className="text-gray-800 hover:text-orange-500 font-medium">Careers</a>
          <a href="/contact" className="text-gray-800 hover:text-orange-500 font-medium">Contact</a>
          <a href="/privacy" className="text-gray-800 hover:text-orange-500 font-medium">Privacy</a>
          <a href="/faq" className="text-gray-800 hover:text-orange-500 font-medium">FAQ</a>
          <a href="/blog" className="text-gray-800 hover:text-orange-500 font-medium">Blog</a>
        </div>
      </div>
      {/* Login and registration */}
      <div className="flex gap-2">
        <a href="/login" className="bg-transparent text-gray-800 hover:text-orange-500 font-medium px-4 py-2 border border-transparent hover:border-gray-800 rounded transition duration-300 ease-in-out">Log In</a>
        <a href="/register" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ease-in-out font-medium">Get started</a>
      </div>
    </nav>
  </header>)}
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-700">
      <Head>
        <title>Upgrade to Quickjobs Plus</title>
      </Head>

      <Header/>

      {/* Main content area with cards */}
      <main className="flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mt-14 text-center">Upgrade to Quickjobs Plus</h1>
      <p className="text-xl text-gray-800  text-center">Get priority and 10x more visibility</p>


        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-8 py-12">
            {/* Free Subscription Card */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col">
              <h2 className="text-lg font-bold text-orange-500 mb-4">Free subscription</h2>
              <p>1 Quick job per day</p>
              <p>Quick job expires in 1 day</p>
              <p>30-day free trial with 3 transactions where the commission fee is waived</p>
              <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Start for Free
              </button>
            </div>

            {/* Plus Subscription Card */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col">
              <h2 className="text-lg font-bold text-orange-500 mb-4">Plus subscription</h2>
              <p>30 credits per month ($0.33 per credit)</p>
              <p>15+15 free credits</p>
              <p>Quick jobs expire in 1 week</p>
              <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Buy subscription for $5
              </button>
            </div>

            {/* Credits Package Card */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col">
              <h2 className="text-lg font-bold text-orange-500 mb-4">Credits Package</h2>
              <p>Credits $0.71 per credit</p>
              <p>7 Credits for $4.99</p>
              <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </main>


      
      <footer className="bg-white text-center border-t border-orange-500">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo and Text Section */}
    <div className="flex items-center">
      <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-8" />
      <div className="flex flex-col text-left">
        <div className="flex space-x-4 mb-2">
          <a href="/about" className="text-gray-800 hover:text-orange-500 font-medium">About</a>
          <a href="/blog" className="text-gray-800 hover:text-orange-500 font-medium">Blog</a>
          <a href="/contact" className="text-gray-800 hover:text-orange-500 font-medium">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="/terms" className="text-gray-800 hover:text-orange-500 font-medium">Terms</a>
          <a href="/privacy" className="text-gray-800 hover:text-orange-500 font-medium">Privacy</a>
          <a href="/faq" className="text-gray-800 hover:text-orange-500 font-medium">FAQ</a>
        </div>
      </div>
    </div>
    {/* Social Media Section */}
    <div className="flex items-center space-x-4">
      <span className="text-gray-800 font-medium">Follow us</span>
      <a href="https://twitter.com/yourusername" className="text-gray-800 hover:text-orange-500 font-medium">
        <img src="/path-to-twitter-icon.png" alt="Twitter" className="h-6" />
      </a>
      <a href="https://instagram.com/yourusername" className="text-gray-800 hover:text-orange-500 font-medium">
        <img src="/path-to-instagram-icon.png" alt="Instagram" className="h-6" />
      </a>
    </div>
  </div>
</footer>





    </div>
  );
}
