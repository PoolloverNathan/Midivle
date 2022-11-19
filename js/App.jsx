function App() {
  const [showSettings, setShowSettings] = React.useState(false)
  return <Boundary>
    <div id="reactroot">
      <div className="area"><canvas>Your browser does not support canvas :(</canvas></div>
      <div className="area-image"></div>
      <div className="options">
        
      </div>
    </div>
    <div id="settings" open={showSettings}>
      Settings
    </div>
  </Boundary>
}