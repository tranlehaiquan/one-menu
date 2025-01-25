import AppSideBar from '@/components/app-sidebar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-screen">
      <AppSideBar />

      {children}
    </div>
  );
};

export default Layout;
