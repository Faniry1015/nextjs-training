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
          <h1>HEADER</h1>
        </header>
        <main>{children}</main>
        <footer>
          <h1>FOOTER</h1>
        </footer>
      </body>
    </html>
  );
}
