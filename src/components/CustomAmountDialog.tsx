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
import pixQRCode from "@/assets/pix-qrcode.jpeg";

interface CustomAmountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomAmountDialog = ({ open, onOpenChange }: CustomAmountDialogProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
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
    
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Por favor, informe um valor válido");
      return;
    }
    
    toast.success(
      `Obrigado, ${name}! Aguardamos sua contribuição de R$ ${parseFloat(amount).toFixed(2)} 💕`,
      { duration: 5000 }
    );
    
    setName("");
    setAmount("");
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Contribuição Personalizada
          </DialogTitle>
          <DialogDescription>
            Escolha o valor que deseja presentear
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="custom-name">Seu Nome *</Label>
            <Input
              id="custom-name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="amount">Valor *</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
              step="0.01"
            />
          </div>
          
          <div>
            <Label htmlFor="custom-message">Mensagem (opcional)</Label>
            <Textarea
              id="custom-message"
              placeholder="Deixe uma mensagem carinhosa para o casal..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>
          
          <div className="bg-white border border-border rounded-lg p-6 space-y-4">
            <Label className="text-sm font-medium block text-foreground">Pagamento via PIX:</Label>
            
            {/* QR Code */}
            <div className="flex justify-center bg-white p-4 rounded-lg">
              <img 
                src={pixQRCode} 
                alt="QR Code PIX" 
                className="w-52 h-52 object-contain"
              />
            </div>
            
            {/* PIX Key */}
            <div>
              <Label className="text-xs text-muted-foreground mb-2 block">Ou copie a chave PIX:</Label>
              <div className="flex gap-2">
                <Input value={pixKey} readOnly className="flex-1 text-sm bg-secondary/50" />
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
          
          <Button onClick={handleConfirm} className="w-full bg-primary hover:bg-primary/90">
            Confirmar Presente
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomAmountDialog;
