export default function CvLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="fr">
        <body>
          <header>
            <h1>CECI EST LE HEADER SPECIAL DU CV</h1>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }