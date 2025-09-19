const Navbar: React.FC = () => {
  return (
    <nav className="offset-border flex justify-between py-6 bg-[var(--secondary-bg-color)]">
      <div id="nav-left" className="ml-6">
        Logo
      </div>
      <div id="nav-right" className="flex flex-row gap-12 mr-6">
        <a>Link</a>
        <div>Dropdown</div>
      </div>
    </nav>
  );
};

export default Navbar;
