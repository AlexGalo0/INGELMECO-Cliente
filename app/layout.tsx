import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {

  title: "Ingelmeco Distribuidores Oficiales de Siemens",
  description: "Distribuidores oficiales de Siemens INGELMECO",
  icons :{
    icon:[
      "/favicon.ico"
    ]
  },
  keywords: "Distribuidora Ingelmeco, SIEMENS, INGELMECO, Distribuidores oficiales de SIEMENS INGELMECO",
  
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
