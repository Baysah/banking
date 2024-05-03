
type LayoutProps = {
  children: React.ReactNode;
};

const Rootlayout = ({children}: LayoutProps) => {
  return (
    <main>
        <aside>Sidebar</aside>
        {children}</main>
  )
}

export default Rootlayout