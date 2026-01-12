"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { BirthdayConfig } from "@/lib/content"

export function BirthdayGallery({ photos }: { photos: BirthdayConfig["photos"] }) {
    const [selectedYear, setSelectedYear] = useState<number | null>(null)

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {photos.map((photo) => (
                    <Card
                        key={photo.year}
                        className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedYear(photo.year)}
                    >
                        <div className="relative aspect-square">
                            <img
                                src={photo.image || "/placeholder.svg"}
                                alt={`Year ${photo.year}`}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white font-bold text-sm text-center mb-0.5">{photo.year}</p>
                                <p className="text-white/80 font-medium text-xs text-center line-clamp-1">{photo.caption}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-sm text-muted-foreground">
                    Click any photo to view it larger.
                </p>
            </div>

            {selectedYear && (
                <div
                    className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center p-4 sm:p-12 animate-in fade-in duration-300"
                    onClick={() => setSelectedYear(null)}
                >
                    <button
                        className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedYear(null);
                        }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Close</span>
                    </button>

                    <div
                        className="relative w-full h-full flex flex-col items-center justify-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex-1 w-full flex items-center justify-center">
                            <img
                                src={photos.find((p) => p.year === selectedYear)?.image || "/placeholder.svg"}
                                alt={`Year ${selectedYear}`}
                                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                            />
                        </div>

                        <div className="text-center max-w-2xl px-4 pb-4">
                            <div className="text-white/60 text-sm font-bold tracking-widest uppercase mb-2">Year {selectedYear}</div>
                            <p className="text-white text-xl sm:text-2xl font-serif italic leading-relaxed">
                                {photos.find((p) => p.year === selectedYear)?.caption}
                            </p>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}
