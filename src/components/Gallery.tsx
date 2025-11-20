import { useState, useEffect } from "react";

const Gallery = () => {
  const files = [
    "bathroomff.jpg",
    "bathroomff2.jpg",
    "bathroomff3.jpg",
    "bathroomff4.jpg",
    "bathroomffnice.jpg",
    "bathroomgf.jpg",
    "emptyroom2pf.jpg",
    "emptyroomgf.jpg",
    "ffkitchen.jpg",
    "gfroom2bed.jpg",
    "gfroombeg.jpg",
    "hallffroom.jpg",
    "hallfirstfloor.jpg",
    "hallgroundfloor.jpg",
    "houseimage.jpg",
    "parking.jpg",
    "room1gf.jpg",
    "room2gf.jpg",
    "roomff.jpg",
    "roomffnicepic.jpg",
    "roomfirstfloor.jpg",
    "roomgf.jpg",
    "roomgfbed.jpg",
    "roomgfnice.jpg",
    "roomgfonebed.jpg",
  ];

  const images = files.map((file) => ({
    src: `/gallery/${file}`,
    file,
    alt: file.replace(/\.(jpg|jpeg|png)$/i, "").replace(/-/g, " "),
  }));

  const roomsBathrooms = images.filter(
    (i) =>
      i.file.includes("room") ||
      i.file.includes("empty") ||
      i.file.includes("bathroom")
  );

  const hallKitchen = images.filter(
    (i) => i.file.includes("hall") || i.file.includes("kitchen")
  );

  const houseParking = images.filter(
    (i) => i.file.includes("house") || i.file.includes("parking")
  );

  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [idx3, setIdx3] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => {
      setIdx1((p) => (p + 1) % roomsBathrooms.length);
    }, 4000);

    const t2 = setInterval(() => {
      setIdx2((p) => (p + 1) % hallKitchen.length);
    }, 4000);

    const t3 = setInterval(() => {
      setIdx3((p) => (p + 1) % houseParking.length);
    }, 4000);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  }, []);

  // REUSABLE SLIDER COMPONENT WITH ARROWS + GRADIENT
  const Slider = ({ title, group, index, setIndex }) => {
    const next = () => setIndex((prev) => (prev + 1) % group.length);
    const prev = () =>
      setIndex((prev) => (prev - 1 + group.length) % group.length);

    const img = group[index];

    return (
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        <div className="relative max-w-3xl mx-auto h-80 rounded-2xl overflow-hidden shadow-lg">
          {/* IMAGE */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-all duration-[1500ms] ease-in-out"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/70 p-3 rounded-full"
          >
            ❮
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/70 p-3 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 space-y-16">

        <Slider
          title="Rooms & Bathrooms"
          group={roomsBathrooms}
          index={idx1}
          setIndex={setIdx1}
        />

        <Slider
          title="Hall & Kitchen"
          group={hallKitchen}
          index={idx2}
          setIndex={setIdx2}
        />

        <Slider
          title="House & Parking"
          group={houseParking}
          index={idx3}
          setIndex={setIdx3}
        />

      </div>
    </section>
  );
};

export default Gallery;
