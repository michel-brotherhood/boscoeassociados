import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Image {
  id: string;
  image_url: string;
  caption?: string;
  display_order: number;
}

interface ImageGalleryProps {
  images: Image[];
  projectTitle: string;
}

const ImageGallery = ({ images, projectTitle }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12 text-white/60">
        <p>Nenhuma imagem disponível para este projeto.</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid de Imagens */}
      <div className={`grid gap-4 ${
        images.length === 1 
          ? "grid-cols-1 max-w-4xl mx-auto"
          : images.length === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg aspect-video bg-secondary/20"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.image_url}
              alt={`${projectTitle} - Imagem ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                {image.caption && (
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            {selectedImageIndex !== null && selectedImageIndex > 0 && (
              <Button
                onClick={goToPrevious}
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {selectedImageIndex !== null && selectedImageIndex < images.length - 1 && (
              <Button
                onClick={goToNext}
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 text-white hover:bg-white/10"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}

            {/* Image */}
            {selectedImageIndex !== null && (
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <img
                  src={images[selectedImageIndex].image_url}
                  alt={`${projectTitle} - Imagem ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain"
                />
                {images[selectedImageIndex].caption && (
                  <p className="text-white text-center mt-4 max-w-2xl">
                    {images[selectedImageIndex].caption}
                  </p>
                )}
                <p className="text-white/60 text-sm mt-2">
                  {selectedImageIndex + 1} / {images.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
