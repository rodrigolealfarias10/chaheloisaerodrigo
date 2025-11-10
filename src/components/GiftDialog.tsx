import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import type { GiftItem } from "./GiftCard";
import pixQRCode from "@/assets/pix-qrcode.png";

interface GiftDialogProps {
  gift: GiftItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GiftDialog = ({ gift, open, onOpenChange }: GiftDialogProps) => {
  // Fixed PIX code without dynamic value
  const pixCode = "00020126580014BR.GOV.BCB.PIX01369862d398-7b43-45dc-adac-655c4b88bc015204000053039865802BR5925Rodrigo Leal de Melo Fari6009SAO PAULO5406280.0062140510WhvgCfKr476304A3B9";
  
  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    toast.success("Código PIX copiado!");
  };

  if (!gift) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-script text-3xl text-center">Pagamento via PIX</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">{gift.name}</p>
            <p className="text-3xl font-light">R$ {gift.price.toFixed(2)}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center p-4 bg-secondary/30 rounded-lg">
              <img 
                src={pixQRCode}
                alt="QR Code PIX"
                className="w-[220px] h-[220px]"
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground text-center">
                Ou copie o código PIX:
              </p>
              <div className="flex gap-2">
                <Input 
                  value={pixCode} 
                  readOnly 
                  className="flex-1 text-xs bg-secondary/50"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopyPix}
                  className="hover:bg-secondary"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="w-full"
            size="lg"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GiftDialog;
