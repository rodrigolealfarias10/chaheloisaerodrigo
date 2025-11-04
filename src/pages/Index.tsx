import { useState } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GiftCard, { GiftItem } from "@/components/GiftCard";
import GiftDialog from "@/components/GiftDialog";
import CustomAmountDialog from "@/components/CustomAmountDialog";
import { Button } from "@/components/ui/button";
import { Heart, Gift } from "lucide-react";
import { gifts, categories } from "@/data/gifts";

const Index = () => {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [showGiftDialog, setShowGiftDialog] = useState(false);
  const [showCustomDialog, setShowCustomDialog] = useState(false);

  const handleSelectGift = (gift: GiftItem) => {
    setSelectedGift(gift);
    setShowGiftDialog(true);
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Nossa Lista de Presentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada presente nos ajudará a construir nosso lar com muito amor ❤️
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Button
              onClick={() => setShowCustomDialog(true)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              size="lg"
            >
              <Gift className="w-5 h-5 mr-2" />
              Contribuir com Qualquer Valor
            </Button>
          </div>

          {categories.map((category) => {
            const categoryGifts = gifts.filter((gift) => gift.category === category);
            
            if (categoryGifts.length === 0) return null;

            return (
              <div key={category} className="mb-16 animate-fade-in">
                <h3 className="text-3xl font-semibold mb-8 text-foreground flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary fill-primary" />
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryGifts.map((gift) => (
                    <GiftCard
                      key={gift.id}
                      gift={gift}
                      onSelectGift={handleSelectGift}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <GiftDialog
        gift={selectedGift}
        open={showGiftDialog}
        onOpenChange={setShowGiftDialog}
      />

      <CustomAmountDialog
        open={showCustomDialog}
        onOpenChange={setShowCustomDialog}
      />

      <Footer />
    </div>
  );
};

export default Index;
