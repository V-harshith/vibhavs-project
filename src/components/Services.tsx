import { Droplet, Factory, Recycle, Cog, HardHat, Settings } from "lucide-react"

const services = [
  {
    icon: Droplet,
    title: "Drinking Water Treatment",
    description: "Ensuring safe and clean drinking water for communities.",
  },
  {
    icon: Factory,
    title: "Industrial Process Water Treatment",
    description: "Optimizing water usage in industrial processes.",
  },
  {
    icon: Recycle,
    title: "Wastewater Treatment",
    description: "Treating municipal and industrial wastewater for safe disposal or reuse.",
  },
  {
    icon: Cog,
    title: "Sludge Treatment",
    description: "Efficient handling and treatment of sludge from water treatment processes.",
  },
  { icon: HardHat, title: "EPCC Services", description: "End-to-end solutions from engineering to commissioning." },
  {
    icon: Settings,
    title: "Operation & Maintenance",
    description: "Ensuring long-term efficiency of water treatment systems.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

