import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface CartFormProps {
  total: number;
}
const CartForm = ({ total }: CartFormProps) => {
  const [bankTransferOpen, setBankTransferOpen] = useState(true);
  const [eWalletOpen, setEWalletOpen] = useState(false);

  return (
    <div className="h-full">
      <div className="flex items-center justify-between py-5 px-4 border-b border-zinc-200 dark:border-zinc-800 mb-4">
        <h2 className="text-lg font-medium">Form Pemesanan</h2>
      </div>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">
            Informasi Pemesan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Nama Lengkap*
              </Label>
              <Input id="fullName" placeholder="" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm font-medium">
                Nomor WhatsApp*
              </Label>
              <Input id="whatsapp" placeholder="08123456789" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email*
            </Label>
            <Input id="email" type="email" placeholder="example@mail.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Alamat*
            </Label>
            <Textarea
              id="address"
              placeholder=""
              className="min-h-[80px] resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Payment Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Pembayaran</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Bank Transfer */}
          <div className="border rounded-lg">
            <button
              onClick={() => setBankTransferOpen(!bankTransferOpen)}
              className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50"
            >
              <span className="font-medium">Bank Transfer</span>
              {bankTransferOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {bankTransferOpen && (
              <div className="border-t bg-gray-50">
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <span className="text-sm">Mandiri Bill Payment</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-orange-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">BNI</span>
                    </div>
                    <span className="text-sm">BNI Virtual Account</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">P</span>
                    </div>
                    <span className="text-sm">Permata Virtual Account</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-blue-700 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">BRI</span>
                    </div>
                    <span className="text-sm">BRI Virtual Account</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-blue-800 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">BCA</span>
                    </div>
                    <span className="text-sm">BCA Virtual Account</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <span className="text-sm">CIMB Virtual Account</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* E-Wallet */}
          <div className="border rounded-lg">
            <button
              onClick={() => setEWalletOpen(!eWalletOpen)}
              className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50"
            >
              <span className="font-medium">E-Wallet</span>
              {eWalletOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {eWalletOpen && (
              <div className="border-t bg-gray-50">
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">GO</span>
                    </div>
                    <span className="text-sm">GoPay</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">OVO</span>
                    </div>
                    <span className="text-sm">OVO</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DANA</span>
                    </div>
                    <span className="text-sm">DANA</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-purple-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">LP</span>
                    </div>
                    <span className="text-sm">LinkAja</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer">
                    <div className="w-8 h-6 bg-green-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">SP</span>
                    </div>
                    <span className="text-sm">ShopeePay</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Process Order Button */}

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-between mb-4">
          <span className="text-base">Total</span>
          <span className="text-base font-medium">${total}</span>
        </div>
        <Button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-base font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
          Proses Pesanan
        </Button>
      </div>
    </div>
  );
};

export default CartForm;
