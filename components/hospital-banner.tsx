"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Hospital = {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  bannerUrl: string;
};

const hospitals: Hospital[] = [
  {
    id: 1,
    name: "Layanan Gawat Darurat",
    description:
      "Pelayanan 24 jam untuk kondisi medis darurat dengan tim dokter spesialis",
    logoUrl: "/placeholder.svg?height=60&width=120",
    bannerUrl: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 2,
    name: "Poli Spesialis",
    description:
      "Konsultasi dengan dokter spesialis terbaik untuk berbagai kondisi kesehatan",
    logoUrl: "/placeholder.svg?height=60&width=120",
    bannerUrl: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 3,
    name: "Laboratorium & Radiologi",
    description:
      "Fasilitas pemeriksaan laboratorium dan radiologi dengan teknologi terkini",
    logoUrl: "/placeholder.svg?height=60&width=120",
    bannerUrl: "/placeholder.svg?height=200&width=600",
  },
  {
    id: 4,
    name: "Vaksinasi & Imunisasi",
    description:
      "Program vaksinasi dan imunisasi untuk segala usia dengan standar WHO",
    logoUrl: "/placeholder.svg?height=60&width=120",
    bannerUrl: "/placeholder.svg?height=200&width=600",
  },
];

export default function HospitalBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hospitals.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + hospitals.length) % hospitals.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hospitals.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Banner Slider */}
      <div
        className="flex transition-transform duration-500 ease-out h-[180px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="min-w-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent z-10" />
            <Image
              src={hospital.bannerUrl || "/placeholder.svg"}
              alt={hospital.name}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 p-3 z-20 flex items-end">
              <div className="bg-white p-1.5 rounded-lg shadow-md mr-2">
                <Image
                  src={hospital.logoUrl || "/placeholder.svg"}
                  alt={`${hospital.name} logo`}
                  width={50}
                  height={25}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base">
                  {hospital.name}
                </h3>
                <p className="text-white/90 text-xs line-clamp-2">
                  {hospital.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1 rounded-full z-30 hover:bg-white/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1 rounded-full z-30 hover:bg-white/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {hospitals.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index ? "bg-white w-4" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
