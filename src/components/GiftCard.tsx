import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export interface GiftItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface GiftCardProps {
  gift: GiftItem;
  onSelectGift: (gift: GiftItem) => void;
}

const GiftCard = ({ gift, onSelectGift }: GiftCardProps) => {
  console.log("GiftCard renderizado:", gift.name);
  
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-2 border-border/50">
      <div className="aspect-square overflow-hidden bg-secondary/30">
        <img 
          src={gift.image} 
          alt={gift.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <CardContent className="pt-5 pb-3">
        <h3 className="font-medium text-base mb-3 text-foreground line-clamp-2 min-h-[3rem]">
          {gift.name}
        </h3>
        <p className="text-xl font-light text-foreground/80 tracking-wide">
          R$ {gift.price.toFixed(2)}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-5">
        <Button
          onClick={() => onSelectGift(gift)}
          className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-md h-12"
        >
          <Gift className="w-4 h-4 mr-2" />
          Pagar com PIX - R$ {gift.price.toFixed(2)}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
