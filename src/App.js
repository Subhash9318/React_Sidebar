import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';
import './App.css'; // Import the CSS file
import CorporateInfoForm from './components/CorporateInfoForm';
import AllowanceForm from './components/AllowanceForm';
import {
  Home,
  Subscriptions,
  Work,
  Business,
  AccountBalance,
  BusinessCenter,
  LocalHospital,
} from '@mui/icons-material'; // Import icons


function App() {
  const [open, setOpen] = useState(false);
  const [editSection, setEditSection] = useState(null);
  const [formData, setFormData] = useState({});

  const sidebarItems = [
    { text: 'Dashboard', icon: <Home /> },
    { text: 'Manage Subscription', icon: <Subscriptions /> },
    { text: 'Young Brain', icon: <Work /> },
    { text: 'Mid Career', icon: <Business /> },
    { text: 'Vendor', icon: <AccountBalance /> },
    { text: 'Consultant', icon: <BusinessCenter /> },
    { text: 'Reports', icon: <LocalHospital /> },
    { text: 'Sign Out', icon: <Work /> },
  ];

  const dashboardSections = [
    'Corporate Information',
    'Allowance',
    'Others', // Added 'Others' section
    'Holidays', // Added 'Holidays' section
  ];

  const handleEditClick = (section) => {
    setEditSection(section);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Handle form submission and update section data
    // Reset form data
    setFormData({});
    setOpen(false);
  };

  const renderFormFields = () => {
    switch (editSection) {
      case 'Corporate Information':
        return (
          <CorporateInfoForm formData={formData} onChange={setFormData} />
        );

      case 'Allowance':
        return (
          <AllowanceForm formData={formData} onChange={setFormData} />
        );

      case 'Others':
        return (
          <>
            <TextField
              label="Other Field 1*"
              variant="outlined"
              fullWidth
              value={formData.otherField1 || ''}
              onChange={(e) => setFormData({ ...formData, otherField1: e.target.value })}
            />
            <TextField
              label="Other Field 2*"
              variant="outlined"
              fullWidth
              value={formData.otherField2 || ''}
              onChange={(e) => setFormData({ ...formData, otherField2: e.target.value })}
            />
          </>
        );

      case 'Holidays':
        return (
          <>
            <TextField
              label="Holiday Field 1*"
              variant="outlined"
              fullWidth
              value={formData.holidayField1 || ''}
              onChange={(e) => setFormData({ ...formData, holidayField1: e.target.value })}
            />
            <TextField
              label="Holiday Field 2*"
              variant="outlined"
              fullWidth
              value={formData.holidayField2 || ''}
              onChange={(e) => setFormData({ ...formData, holidayField2: e.target.value })}
            />
            
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem button key={index} className="sidebarItem" onClick={() => handleEditClick(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>


      {/* Dashboard Sections */}
      <div className="dashboard">
        {dashboardSections.map((item, index) => (
          <div key={index} className="section">
            <h2>{item}</h2>
            <button onClick={() => handleEditClick(item)} className="editButton">
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Edit Form Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit {editSection}</DialogTitle>
        <DialogContent>
          <form>
            {renderFormFields()}
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
