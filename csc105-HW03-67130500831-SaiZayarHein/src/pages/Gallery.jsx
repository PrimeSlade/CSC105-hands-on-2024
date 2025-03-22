import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold my-12">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <img
            src="https://cdn.dribbble.com/userupload/2952377/file/original-4209c1c0a2ee2db159499c3fe9bdf27b.png?resize=2048x1536&vertical=center"
            alt="Artwork 1"
            className="rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.30)] object-cover w-full h-64 
            hover:scale-102 hover:shadow-[0_8px_12px_rgba(0,0,0,0.50)]"
          />

          <img
            src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709859570/catalog/1400320195934711808/pmg5rg5tlursjxuxn29e.webp"
            alt="Artwork 2"
            className="rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.30)] object-cover w-full h-64 
            hover:scale-102 hover:shadow-[0_8px_12px_rgba(0,0,0,0.50)]"
          />

          <img
            src="https://www.vitalcare.com.au/wp-content/uploads/2024/02/web2@288x-1030x579.png"
            alt="Artwork 3"
            className="rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.30)] object-cover w-full h-64 
            hover:scale-102 hover:shadow-[0_8px_12px_rgba(0,0,0,0.50)]"
          />

          <img
            src="https://pbs.twimg.com/media/FPHCH0KWYAcpBY9.jpg"
            alt="Artwork 4"
            className="rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.30)] object-cover w-full h-64 
            hover:scale-102 hover:shadow-[0_8px_12px_rgba(0,0,0,0.50)]"
          />

          <img
            src="https://cdn.dribbble.com/users/90631/screenshots/16085148/media/6f2ba333cb3086e320e45e9b6b4e16bd.png"
            alt="Artwork 5"
            className="rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.30)] object-cover w-full h-64 
            hover:scale-102 hover:shadow-[0_8px_12px_rgba(0,0,0,0.50)]"
          />

          <img
            src="https://cdn.dribbble.com/users/1673170/screenshots/6855703/1606x1204_wa-chat.png"
            alt="Artwork 6"
            className="rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.30)] object-cover w-full h-64 
            hover:scale-102 hover:shadow-[0_8px_12px_rgba(0,0,0,0.50)]"
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
