import TestinomialCard, { TestinomialCardProps } from "./TestinomialCard";

const Testonomials_Content: TestinomialCardProps[] = [
  {
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4gTf3rPL53ihJ4QdiP8FzwHaJ4%26pid%3DApi&f=1&ipt=c85ea0c086e1184b36a761852463de89ad6cf7acb5522e14192ea14cc8cd3721&ipo=images",
    name: "Emma Thompson",
    symbol: "💬",
    text: "PlayPal has changed the way I book turf for soccer games! So easy and convenient.",
  },
  {
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xr8yYZjDusfVwACwPfLo9QHaJh%26pid%3DApi&f=1&ipt=0ed1f0996a1e6639e50d4e9fe1d16c27b9b354a11cbde48a85212c9a16fc7908&ipo=images",
    name: "Jake Davis",
    symbol: "⭐️",
    text: "Finding players to join our weekly games has never been this hassle-free. Thanks, PlayPal!",
  },
  {
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y-nGyqT5AwES8oqp344z4gAAAA%26pid%3DApi&f=1&ipt=f6172ba7c0050a59c5000889cef716d8abf914ac69fc800d27b1d501df32d7b7&ipo=images",
    name: "Aaron Patel",
    symbol: "⭐️",
    text: "Booking premium turf venues and competing with like-minded players is pure joy with PlayPal.",
  },
];

export default function Testinomials() {
  return (
    <div className="flex h-min w-full flex-1 flex-col items-center justify-start p-5 md:p-[100px]">
      <div className="flex h-min w-full max-w-[1000px] flex-1 flex-col items-center justify-center gap-[20px] md:flex-row">
        {Testonomials_Content.map((testonomial) => (
          <TestinomialCard key={testonomial.imageUrl} {...testonomial} />
        ))}
      </div>
    </div>
  );
}
