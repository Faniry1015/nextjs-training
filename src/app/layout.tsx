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
        <header>
          <h2>Faniry Blog</h2>
        </header>
        <main>{children}</main>
        <footer>
          <h3>FOOTER</h3>
        </footer>
      </body>
    </html>
  );
}
