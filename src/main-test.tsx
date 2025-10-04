import { createRoot } from "react-dom/client";
import React from "react";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>UX Designer Portfolio</h1>
      <p>Welcome to Alex Chen's Portfolio</p>
      <p>This is a test to see if React is working.</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
