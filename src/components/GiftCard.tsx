import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Copy } from "lucide-react";
import { toast } from "sonner";

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
  const pixCode = "00020126580014BR.GOV.BCB.PIX01369862d398-7b43-45dc-adac-655c4b88bc015204000053039865802BR5925Rodrigo Leal de Melo Fari6009SAO PAULO62140510WhvgCfKr476304A3B9";
  
  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    toast.success("Código PIX copiado!");
  };
  
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
      
      <CardFooter className="flex flex-col gap-3 pt-0 pb-5">
        <div className="w-full space-y-2">
          <p className="text-xs text-muted-foreground text-center">PIX Copia e Cola:</p>
          <div className="flex gap-2">
            <Input 
              value={pixCode} 
              readOnly 
              className="flex-1 text-xs bg-secondary/50 h-9"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyPix}
              className="hover:bg-secondary h-9 w-9"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
