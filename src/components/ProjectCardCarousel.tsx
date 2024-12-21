"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const [cards, setCards] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const baseImageUrl = "https://templet-backend-server.onrender.com";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://templet-backend-server.onrender.com/api/services");
        const data = await response.json();
        const dynamicCards = data.map((service) => ({
          category: service.name,
          title: service.description,
          src: `${baseImageUrl}${service.images[0].image}`,
          images: service.images,
          description: service.description,
          id: service.id,
        }));
        setCards(dynamicCards);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const renderedCards = cards.map((card, index) => (
    <Card
      key={index}
      card={card}
      index={index}
      onClick={() => handleCardClick(card)}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Dynamic Apple Cards Carousel
      </h2>
      <Carousel items={renderedCards} />

      {selectedService && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-xl font-bold text-white bg-red-500 p-2 rounded-full"
            >
              X
            </button>
            <h3 className="text-xl font-bold mb-4">{selectedService.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {selectedService.images.map((image, index) => (
                <Image
                  key={index}
                  src={`${baseImageUrl}/api/services/id/image/${image.image}`}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-contain rounded-lg shadow-lg"
                />
              ))}
            </div>
            <p className="mt-4 text-gray-600">{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
