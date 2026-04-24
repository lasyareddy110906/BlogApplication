import { Link } from "react-router";
import { pageWrapper, primaryBtn, secondaryBtn, bodyText } from "../styles/common";

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Gradient Background */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
          {/* Badge */}
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-transparent bg-clip-text px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-purple-500/30 shadow-lg backdrop-blur-sm">
            ✨ The Future of Content
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8 max-w-5xl drop-shadow-2xl">
            Write Stories That <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">Matter</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed font-light">
            Join thousands of creators sharing authentic voices, powerful ideas, and inspiring narratives with a global community of readers who crave real stories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-20">
            <Link to="/register" className="group relative px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              Start Creating
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/login" className="px-8 py-4 text-lg font-bold text-white border-2 border-gray-400 rounded-full hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
              Explore Stories
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 text-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">10K+</div>
              <p className="text-sm text-gray-400">Active Writers</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text mb-2">50K+</div>
              <p className="text-sm text-gray-400">Published Stories</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text mb-2">100K+</div>
              <p className="text-sm text-gray-400">Monthly Readers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative w-full bg-gradient-to-b from-slate-900 to-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Why Writers Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create, share, and grow your audience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                  ✨
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Premium Editor</h3>
                <p className="text-gray-600 leading-relaxed">A beautiful, distraction-free writing environment with rich text formatting and real-time preview.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-300 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart Analytics</h3>
                <p className="text-gray-600 leading-relaxed">Track reader engagement, growth metrics, and performance trends with beautiful analytics dashboard.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                  🌍
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Global Community</h3>
                <p className="text-gray-600 leading-relaxed">Connect with millions of readers worldwide and build a loyal following around your unique voice.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                  🔐
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Your Content, Your Rights</h3>
                <p className="text-gray-600 leading-relaxed">Full control over your work with privacy settings, copyright protection, and flexible monetization options.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-300 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                  💬
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Reader Engagement</h3>
                <p className="text-gray-600 leading-relaxed">Build relationships through comments, direct messages, and meaningful conversations with your audience.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">Optimized for speed and performance, ensuring your stories load instantly on any device.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full bg-gradient-to-r from-purple-900 via-slate-900 to-purple-900 py-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Ready to Share Your Voice?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join a vibrant community of creators and start publishing your stories today. It only takes 30 seconds to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link to="/register" className="group relative px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              Start Free Today
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/login" className="px-10 py-4 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;