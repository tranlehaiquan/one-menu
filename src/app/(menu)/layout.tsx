const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
