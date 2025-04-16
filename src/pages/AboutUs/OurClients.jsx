const clients = [
  { name: "Abzena", logo: "https://logo.clearbit.com/abzena.com" },
  { name: "Actelion", logo: "https://logo.clearbit.com/actelion.com" },
  { name: "Alcon", logo: "https://logo.clearbit.com/alcon.com" },
  { name: "Althea", logo: "https://logo.clearbit.com/ajinomoto.com" },
  { name: "Pfizer", logo: "https://logo.clearbit.com/pfizer.com" },
  { name: "Moderna", logo: "https://logo.clearbit.com/modernatx.com" },
  { name: "Genentech", logo: "https://logo.clearbit.com/genentech.com" },
  { name: "Roche", logo: "https://logo.clearbit.com/roche.com" },
  { name: "Amgen", logo: "https://logo.clearbit.com/amgen.com" },
  { name: "Thermo Fisher", logo: "https://logo.clearbit.com/thermofisher.com" },
];

export default function OurClients() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
        <p className="text-center text-gray-600 text-2xl max-w-3xl mx-auto leading-relaxed mb-2">750+ firms globally trust capabilities of Roots Analysis for relevant, comprehensive and smart insights.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 mx-auto object-contain"
              />
              <p className="mt-2 text-sm font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
