import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SUDUT PROFILE",
    short_name: "SUDUT PROFILE",
    description: "Showcase your brand with style.",
    start_url: "/",
    display: "standalone",
    background_color: "#101E33",
    theme_color: "#101E33",
    icons: [
      {
        src: "/images/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}