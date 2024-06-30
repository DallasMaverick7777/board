import DeviceRow from "@/app/components/DeviceRow";
import type {Offer} from "@/models/Offer";

export default function Offers({header,offers}:{header:string,offers:Offer[]}) {
  return (
    <div className="bg-slate-200 py-6 rounded-3xl">
      <div className="container">
        <h2 className="font-bold mb-4">{header || 'Recent offers'}</h2>

        <div className="flex flex-col gap-4">
          {!offers?.length && (
            <div>No offer found</div>
          )}
          {offers && offers.map(offer => (
            <DeviceRow  />
          ))}
        </div>

      </div>
    </div>
  );
}