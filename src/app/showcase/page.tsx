import { showcase } from "@/data/showcase";

export default function Showcase() {
  return (
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {showcase.map((item, i) => (
    <div key={i} className="bg-white p-4 rounded shadow">
      <a href={item.href ?? "#"} target="_blank" rel="noopener noreferrer">
        <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded" />
      </a>
      <h3 className="mt-2 font-bold text-center">{item.name}</h3>
      {item.description && <p className="text-sm text-gray-500 text-center">{item.description}</p>}
    </div>
  ))}
</div>

  )}