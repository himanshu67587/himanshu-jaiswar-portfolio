const photos = [
  {
    id: "personal",
    src: "/assets/uploads/whatsapp_image_2025-12-19_at_9.39.00_am-019d1f7e-901d-708e-9cc8-51b853bca493-2.jpeg",
    caption: "Adventures in the wild",
    location: "India",
    ocid: "gallery.item.1",
  },
  {
    id: "mountains",
    src: "/assets/generated/travel-mountains.dim_800x600.jpg",
    caption: "Lost in the mountains",
    location: "Himalayas, India",
    ocid: "gallery.item.2",
  },
  {
    id: "waterfall",
    src: "/assets/generated/travel-waterfall.dim_800x600.jpg",
    caption: "Nature is my inspiration",
    location: "Tropical Paradise",
    ocid: "gallery.item.3",
  },
  {
    id: "sunset",
    src: "/assets/generated/travel-sunset.dim_800x600.jpg",
    caption: "Chasing sunsets",
    location: "Coastal India",
    ocid: "gallery.item.4",
  },
];

export default function TravelGallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-4"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(46,125,50,0.06) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="section-title text-foreground"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Travel Gallery
        </h2>
        <p className="section-subtitle text-foreground/50">
          Moments captured beyond the screen
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-glass hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              data-ocid={photo.ocid}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  &ldquo;{photo.caption}&rdquo;
                </p>
                <p className="text-[#4CAF50] text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  📍 {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
