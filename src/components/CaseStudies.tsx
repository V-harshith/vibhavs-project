const caseStudies = [
    {
      title: "Municipal Water Treatment Upgrade",
      challenge: "Aging infrastructure leading to water quality issues",
      solution: "Implementation of advanced filtration and disinfection systems",
      outcome: "Improved water quality and reduced operational costs",
    },
    {
      title: "Industrial Wastewater Recycling",
      challenge: "High water consumption in manufacturing processes",
      solution: "Custom-designed wastewater recycling system",
      outcome: "70% reduction in freshwater usage and compliance with environmental regulations",
    },
  ]
  
  export default function CaseStudies() {
    return (
      <section id="case-studies" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Case Studies & Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <div className="mb-2">
                  <span className="font-semibold">Challenge:</span> {study.challenge}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Solution:</span> {study.solution}
                </div>
                <div>
                  <span className="font-semibold">Outcome:</span> {study.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  