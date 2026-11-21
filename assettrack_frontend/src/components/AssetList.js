import React, { useEffect, useState } from 'react';
import { getAllAssetItems } from '../services/assetService';

function AssetList({ refreshTrigger }) {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAssets = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getAllAssetItems();
      setAssets(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, [refreshTrigger]);

  return (
    <div className="card">
      <div className="list-header">
        <h2>Asset List</h2>
        <button className="btn-secondary" onClick={fetchAssets} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {error && <p className="message error">{error}</p>}

      {!loading && assets.length === 0 && !error && (
        <p className="empty-state">No assets found. Add one above.</p>
      )}

      {assets.length > 0 && (
        <div className="table-wrapper">
          <table className="asset-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Asset Code</th>
                <th>Asset Name</th>
                <th>Category</th>
                <th>Assigned To</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id}>
                  <td>{asset.id}</td>
                  <td>{asset.assetCode}</td>
                  <td>{asset.assetName}</td>
                  <td>{asset.category}</td>
                  <td>{asset.assignedTo}</td>
                  <td>
                    <span className={`badge badge-${(asset.status || '').toLowerCase().replace(/\s+/g, '-')}`}>
                      {asset.status || '-'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AssetList;
