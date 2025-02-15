import Image from "next/image"

const products = [
  {
    name: "Resins",
    image: "/placeholder.svg?height=300&width=400",
    description: "High-quality ion exchange resins for various water treatment applications.",
  },
  {
    name: "Membranes and Filters",
    image: "/placeholder.svg?height=300&width=400",
    description: "Advanced filtration solutions for removing contaminants and impurities.",
  },
  {
    name: "Specialty Chemicals",
    image: "/placeholder.svg?height=300&width=400",
    description: "Tailored chemical solutions for specific water treatment needs.",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

