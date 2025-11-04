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
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-romantic)] transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img 
          src={gift.image} 
          alt={gift.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-2">
          {gift.name}
        </h3>
        <p className="text-2xl font-bold text-primary">
          R$ {gift.price.toFixed(2)}
        </p>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-2 pt-0">
        <Button 
          onClick={() => onSelectGift(gift)}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <Gift className="w-4 h-4 mr-2" />
          Presentear com PIX
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
