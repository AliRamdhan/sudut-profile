"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/shared/splash-screen";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const sudutProfileSplashTime = localStorage.getItem("sudutProfileSplashTime");
    const currentTime = Date.now();
    const twoMinutes = 2 * 60 * 1000;

    if (sudutProfileSplashTime && currentTime - parseInt(sudutProfileSplashTime) < twoMinutes) {
      setLoading(false);
      router.push("/home");
    } else {
      setLoading(true);
      setSplash(true);
    }
  }, [router]);

  const finishLoading = () => {
    localStorage.setItem("sudutProfileSplashTime", Date.now().toString());
    setLoading(false);
    setSplash(false);
  };

  return (
    <div>
      {loading && splash && <SplashScreen finishLoading={finishLoading} />}
    </div>
  );
}