function TerminalHeader() {
  return (
    <header className="terminal-header">
      <div className="window-buttons" aria-hidden="true">
        <span className="btn close" />
        <span className="btn min" />
        <span className="btn max" />
      </div>
      <p className="terminal-title">just-fair@portfolio:~</p>
    </header>
  );
}

export default TerminalHeader;
