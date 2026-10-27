import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deluve",
    short_name: "Deluve",
    description: "Software development, automation and digital strategy.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/favicons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicons/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
