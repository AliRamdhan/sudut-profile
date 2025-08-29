/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Lock, ShoppingCart } from "lucide-react";

interface LockedContentProps {
  course: any;
}
export function LockedContent({ course }: LockedContentProps) {
  return (
    <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <Lock className="w-8 h-8" />
        </div>
        <p className="text-gray-700 mb-6">
          Suka dengan trailer di atas? Yuk langsung beli dengan klik tombol di
          bawah.
        </p>
        <Button className="px-6 py-3 rounded-lg font-medium">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Beli {course.price}
        </Button>
        <p className="text-sm mt-3">Akses 14 hari • Dapat diunduh</p>
      </div>
    </div>
  );
}
