import Link from "next/link";
import propertyImg from "@/assets/property1.webp";

export default function WishCard() {
  return (
    <Link href="/properties/1" className="max-w-[400px] bg-base-100">
      <figure>
        <img src={propertyImg.src} className="rounded w-full" alt="Property" />
      </figure>
      <div className="">
        <h2 className="card-title">
          Lagoon
        </h2>
       
      </div>
    </Link>
  );
}
