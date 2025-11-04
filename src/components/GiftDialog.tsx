import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { GiftItem } from "./GiftCard";

interface GiftDialogProps {
  gift: GiftItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GiftDialog = ({ gift, open, onOpenChange }: GiftDialogProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  const pixKey = "81997473813";
  
  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    toast.success("Chave PIX copiada!");
  };
  
  const handleConfirm = () => {
    if (!name.trim()) {
      toast.error("Por favor, preencha seu nome");
      return;
    }
    
    toast.success(
      `Obrigado, ${name}! Aguardamos sua contribuição de R$ ${gift?.price.toFixed(2)} 💕`,
      { duration: 5000 }
    );
    
    // Reset form
    setName("");
    setMessage("");
    onOpenChange(false);
  };

  if (!gift) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            {gift.name}
          </DialogTitle>
          <DialogDescription>
            Valor: R$ {gift.price.toFixed(2)}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Seu Nome *</Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea
              id="message"
              placeholder="Deixe uma mensagem carinhosa para o casal..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>
          
          <div className="bg-secondary p-4 rounded-lg">
            <Label className="text-sm font-semibold mb-2 block">Chave PIX:</Label>
            <div className="flex gap-2">
              <Input value={pixKey} readOnly className="flex-1" />
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopyPix}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Button onClick={handleConfirm} className="w-full bg-primary hover:bg-primary/90">
            Confirmar Presente
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GiftDialog;
