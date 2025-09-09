"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLanguage = (locale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    // Add the new locale to the pathname
    const newPath = `/${locale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        onClick={() => switchLanguage("en")}
        variant={`outline`}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLocale === "en"
            ? "text-white underline"
            : "text-gray-500"
        }`}
      >
        EN
      </Button>
      <Button
        onClick={() => switchLanguage("id")}
        variant={`outline`}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLocale === "id"
            ? "text-white underline"
            : "text-gray-500"
        }`}
      >
        ID
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
