import './global.css';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="bg-amber-100">{children}</body>
    </html>
  );
};

export default Layout;
