import Navbar from "../components/navbar"; // client component

export const metadata = {
  title: "Rajan Portfolio",
  description: "Full Stack Developer - MERN Stack",
  icons: {
    icon: "/profileLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Navbar />   {/* client component */}
        <div >{children}</div>
      </body>
    </html>
  );
}
