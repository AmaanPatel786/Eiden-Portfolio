import "./globals.css";

export const metadata = {
  title: "EIDEN // Portfolio - Illustrator & Streetwear Designer",
  description: "Eiden Portfolio - Streetwear, Pixel Art, and Graphic Design Showcase. Bold neo-brutalist layouts, premium illustrations, and custom apparel design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Retro Grain/Noise Overlay */}
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
