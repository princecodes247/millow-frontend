import propertyImg from "@/assets/property1.webp";

export default function PropertyCard() {
  return (
    <a href="/properties/1" className="shadow-xl max-w-[400px] card bg-base-100">
      <figure>
        <img src={propertyImg.src} className="w-full" alt="Property" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          2 Bed Very Nice Apartment With Private Beach
        </h2>
        <p>📍Pearl Jumeirah - Dubai, United Arab Emirates</p>
        <div className="justify-between mt-4 text-sm card-actions">
          <p>15 of 65 left</p>
          <p>0.14 HBAR</p>
        </div>
      </div>
    </a>
  );
}
