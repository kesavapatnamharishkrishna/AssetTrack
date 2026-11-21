import React, { useState } from 'react';
import './App.css';
import AddAssetForm from './components/AddAssetForm';
import AssetList from './components/AssetList';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleAssetAdded = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AssetTrack</h1>
        <p>Asset Management System</p>
      </header>

      <main className="app-main">
        <AddAssetForm onAssetAdded={handleAssetAdded} />
        <AssetList refreshTrigger={refreshTrigger} />
      </main>
    </div>
  );
}

export default App;
