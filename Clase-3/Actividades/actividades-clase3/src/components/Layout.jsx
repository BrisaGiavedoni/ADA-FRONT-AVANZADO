function Layout({ header, content, footer }) {
  return (
    <div>
      <header>{header}</header>

      <main>{content}</main>

      <footer>{footer}</footer>
    </div>
  );
}

export default Layout;
