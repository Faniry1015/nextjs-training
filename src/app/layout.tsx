import Header from "./components/Header";

export const metadata = {
  title: "Next training",
  description: "Created by Faniry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <h3>FOOTER</h3>
        </footer>
      </body>
    </html>
  );
}
