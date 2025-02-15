export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                At Water Solutions, we are committed to providing innovative and sustainable water treatment solutions to
                meet the growing global demand for clean water.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                We envision a world where every individual has access to clean, safe water, and industries operate with
                minimal environmental impact through efficient water management.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  