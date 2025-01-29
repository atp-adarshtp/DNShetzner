import { useState } from 'react';
import Dashboard from './dashboard/Dashboard';

function App() {
  console.log("App component rendered");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hetzner DNS Dashboard</h1>
      <Dashboard />
    </div>
  );
}

export default App;
