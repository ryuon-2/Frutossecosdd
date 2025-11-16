"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products } from '@/lib/data';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.1-.5.0-.7-.2-1.2-.5-1.7-.8-.7-.5-1.2-1-1.7-1.7-.1-.2-.1-.3 0-.4.1-.1.2-.2.4-.3.1 0 .2-.1.3-.2.1 0 .1-.1.2-.2.1 0 .1-.1 0-.2-.1-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6 0-.2 0-.4.1-.6.2-.2.1-.4.2-.5.3-.2.1-.3.2-.4.3-.1.1-.2.2-.3.3-.1.1-.2.2-.3.3s-.2.2-.3.3c-.1.1-.1.2-.2.3s-.1.2-.1.3v.1c0 .1 0 .2.0.3.0.1.0.2.0.3.0.1.1.2.1.3.1.2.2.4.3.5.3.5.6.9 1 1.4.5.5.9.9 1.4 1.2.5.3 1 .6 1.5.8.2.1.4.1.5.1.2 0 .4-.0.6-.1.2-.1.4-.1.5-.2.1-.1.3-.2.4-.3.1-.1.2-.3.3-.4.1-.1.2-.3.2-.4.1-.1.1-.2.1-.3.0-.2.0-.4-.1-.5-.1-.2-.1-.3-.2-.4zm5.1-10.2c-1-1-2.2-1.7-3.5-2.2-1.3-.5-2.6-.7-4-.7-6.9 0-12.5 5.6-12.5 12.5 0 2.4.7 4.7 2 6.7l-2 5.3 5.5-1.9c1.9 1.1 4.1 1.7 6.4 1.7h.1c6.9 0 12.5-5.6 12.5-12.5.0-3.6-1.4-6.8-4-9.3zm-4.1 16.5c-2 0-3.9-.6-5.6-1.8l-.4-.2-4.1 1.4 1.5-4-.3-.4c-1.3-1.8-2-3.8-2-6 0-5.8 4.7-10.5 10.5-10.5 2.8 0 5.4 1.1 7.4 3.1 2 2 3.1 4.6 3.1 7.4-.1 5.8-4.8 10.5-10.6 10.5z" />
    </svg>
  );
}


export function QuickBuy() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);
  const phoneNumber = '51987654321'; // Número de WhatsApp para Perú

  const handleOrder = () => {
    const product = products.find(p => p.id === selectedProduct);
    if (!product) return;

    const message = encodeURIComponent(
      `¡Hola! Me gustaría pedir ${quantity} de ${product.name}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="quick-buy" className="py-16 sm:py-24">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Compra Rápida</CardTitle>
          <CardDescription>
            ¿Listo para ordenar? Selecciona tu producto y cantidad, luego envíanos un mensaje por WhatsApp.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="product-select">Producto</Label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger id="product-select">
                <SelectValue placeholder="Selecciona un producto" />
              </SelectTrigger>
              <SelectContent>
                {products.map((product) => (
                  <SelectItem key={product.id} value={product.id}>{product.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Cantidad</Label>
            <Input 
              id="quantity" 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
            />
          </div>
          <Button className="w-full" size="lg" onClick={handleOrder}>
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Pedir por WhatsApp
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
