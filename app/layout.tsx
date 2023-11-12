import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {

  title: "Distribuidora Ingelmeco",
  description: "Distribuidores oficiales de SIEMENS INGELMECO",
  icons :{
    icon:[
      "/favicon.ico"
    ]
  },

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
