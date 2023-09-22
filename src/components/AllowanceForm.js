import React, { useState } from 'react';
import {
  DialogContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  FormGroup,
  Typography,
} from '@mui/material';
import './FormStyles.css'; // Import the CSS file

function AllowanceForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    meritocracy: '',
    annualHolidays: '',
    generousWelfareBenefits: '',
    educationTraining: '',
    supportQualification: '',
    reducedWorkingHours: '',
    familyAllowance: '',
    sideJobAvailable: '',
    careerConsulting: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const questions = [
    'Salary System Based On Meritocracy',
    '120 Or More Annual Holidays',
    'Generous Welfare Benefits',
    'Enhanced Education And Training',
    'Support System For Acquiring Qualification',
    'Reduced Working Hours System',
    'Family Allowance',
    'Side Job Available',
    'Career Consulting',
  ];

  return (
    <DialogContent className="form-container">
      <form>
        <FormGroup>
          {questions.map((question) => (
            <div key={question}>
              <Typography variant="body1" gutterBottom>
                {question}
              </Typography>
              <RadioGroup
                name={question}
                value={formData[question.toLowerCase()]}
                onChange={(e) => handleChange(question.toLowerCase(), e.target.value)}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
          ))}
        </FormGroup>

      </form>
    </DialogContent>
  );
}

export default AllowanceForm;
