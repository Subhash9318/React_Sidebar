import React, { useState } from 'react';
import { DialogContent, TextField, Button, FormGroup } from '@mui/material';
import './FormStyles.css'; // Import the CSS file

function CorporateInfoForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    businessDescription: '',
    corporatePhilosophy: '',
    companyName: '',
    industry: '',
    mailID: '',
    phoneNo: '',
    location: '',
    workingHours: '',
    establishmentDate: '',
    initialCapital: '',
    representative: '',
    branch: '',
    numEmployees: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <DialogContent className="form-container">
      <form>
        <FormGroup>
          <TextField
            className="form-field"
            label="Business Description"
            value={formData.businessDescription}
            onChange={(e) => handleChange('businessDescription', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Corporate Philosophy"
            value={formData.corporatePhilosophy}
            onChange={(e) => handleChange('corporatePhilosophy', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Company Name"
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Industry"
            value={formData.industry}
            onChange={(e) => handleChange('industry', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Mail ID"
            value={formData.mailID}
            onChange={(e) => handleChange('mailID', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Phone No."
            value={formData.phoneNo}
            onChange={(e) => handleChange('phoneNo', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Location"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Working Hours"
            value={formData.workingHours}
            onChange={(e) => handleChange('workingHours', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Establishment Date"
            value={formData.establishmentDate}
            onChange={(e) => handleChange('establishmentDate', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Initial Capital"
            value={formData.initialCapital}
            onChange={(e) => handleChange('initialCapital', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Representative"
            value={formData.representative}
            onChange={(e) => handleChange('representative', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Branch"
            value={formData.branch}
            onChange={(e) => handleChange('branch', e.target.value)}
          />
          <TextField
            className="form-field"
            label="Number of Employees"
            value={formData.numEmployees}
            onChange={(e) => handleChange('numEmployees', e.target.value)}
          />
        </FormGroup>

      </form>
    </DialogContent>
  );
}

export default CorporateInfoForm;
