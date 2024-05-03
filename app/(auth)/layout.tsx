type LayoutProps = {
  children: React.ReactNode;
};

const Authlayout = ({ children }: LayoutProps) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Authlayout;
