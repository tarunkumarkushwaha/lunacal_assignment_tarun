import "./globals.css";

export const metadata = {
  title: "Assignment Lunacal",
  description: "Assignment Lunacal created by tarun kushwaha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
