import Link from "next/link"

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Water Solutions</h1>
        <p className="text-xl md:text-2xl mb-8">Innovative Water Treatment Solutions for a Sustainable Future</p>
        <Link
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

