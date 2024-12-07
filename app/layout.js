import './globals.scss';

export const metadata = {
  title: 'Elbrit Website',
  description: 'Responsive landing page for Essential Vitamins',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
