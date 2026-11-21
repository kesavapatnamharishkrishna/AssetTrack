import React, { useState } from 'react';
import { addAssetItem } from '../services/assetService';

const INITIAL_FORM = {
  assetCode: '',
  assetName: '',
  category: '',
  assignedTo: '',
  status: '',
};

function AddAssetForm({ onAssetAdded }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.assetCode.trim() || !formData.assetName.trim()) {
      setError('Asset Code and Asset Name are required.');
      return;
    }

    setLoading(true);
    try {
      const saved = await addAssetItem(formData);
      setSuccess(`Asset "${saved.assetName}" added successfully.`);
      setFormData(INITIAL_FORM);
      if (onAssetAdded) onAssetAdded(saved);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Add New Asset</h2>
      <form onSubmit={handleSubmit} className="asset-form">
        <div className="form-group">
          <label htmlFor="assetCode">Asset Code *</label>
          <input
            id="assetCode"
            name="assetCode"
            type="text"
            value={formData.assetCode}
            onChange={handleChange}
            placeholder="e.g. ASSET-001"
          />
        </div>

        <div className="form-group">
          <label htmlFor="assetName">Asset Name *</label>
          <input
            id="assetName"
            name="assetName"
            type="text"
            value={formData.assetName}
            onChange={handleChange}
            placeholder="e.g. Dell Laptop"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Hardware"
          />
        </div>

        <div className="form-group">
          <label htmlFor="assignedTo">Assigned To</label>
          <input
            id="assignedTo"
            name="assignedTo"
            type="text"
            value={formData.assignedTo}
            onChange={handleChange}
            placeholder="e.g. John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">-- Select Status --</option>
            <option value="Available">Available</option>
            <option value="Assigned">Assigned</option>
            <option value="Under Maintenance">Under Maintenance</option>
            <option value="Retired">Retired</option>
          </select>
        </div>

        {error && <p className="message error">{error}</p>}
        {success && <p className="message success">{success}</p>}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Add Asset'}
        </button>
      </form>
    </div>
  );
}

export default AddAssetForm;
