function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Chai aur React | Abhi</h1>
      
      <h2>Installed Node & npm packages</h2>
      <ul>
        <li>npx create-react-app 01basicreact → created React app</li>
        <li>npm install → installed dependencies</li>
        <li>npm start → ran dev server</li>
        <li>npm run build → created production build</li>
      </ul>

      <h2>Default React files used</h2>
      <ul>
        <li>src/App.js → main React component</li>
        <li>src/App.css → styles for App component</li>
        <li>src/index.js → entry point, renders App</li>
        <li>src/index.css → global styles</li>
        <li>public/index.html → HTML page React mounts into</li>
      </ul>
    </div>
  );
}

export default App;
