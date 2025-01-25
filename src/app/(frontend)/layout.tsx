import { Toaster } from '@/components/ui/sonner';
import './global.css';
import Providers from '@/components/Providers';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <head>
        <title>One Menu</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
};

export default Layout;
