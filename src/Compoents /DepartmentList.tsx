import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const departmentData = [
  {
    name: 'Agriculture & Fishing',
    subDepartments: ['Agriculture', 'Crops', 'Farming Animals & Livestock', 'Fishery & Aquaculture', 'Ranching']
  },
  {
    name: 'Business Services',
    subDepartments: ['Accounting & Accounting Services', 'Auctions', 'Business Services - General', 'Call Centers & Business Centers', 'Career Planning']
  }
];

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleExpandClick = (department: string) => {
    setExpanded((prev) => ({ ...prev, [department]: !prev[department] }));
  };

  const handleSelect = (subDepartment: string) => {
    setSelected((prev) => ({ ...prev, [subDepartment]: !prev[subDepartment] }));
  };

  const handleDepartmentSelect = (department: string, isChecked: boolean) => {
    const updatedSelection = { ...selected };
    departmentData
      .find((dept) => dept.name === department)!
      .subDepartments.forEach((sub) => {
        updatedSelection[sub] = isChecked;
      });
    setSelected(updatedSelection);
  };

  return (
    <Box>
      {departmentData.map((department) => (
        <Box key={department.name} sx={{ mb: 2 }}>
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={department.subDepartments.every((sub) => selected[sub])}
                  onChange={(e) => handleDepartmentSelect(department.name, e.target.checked)}
                />
              }
              label={department.name}
            />
            <IconButton onClick={() => handleExpandClick(department.name)}>
              {expanded[department.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          {expanded[department.name] && (
            <Box sx={{ pl: 4 }}>
              {department.subDepartments.map((sub) => (
                <FormControlLabel
                  key={sub}
                  control={<Checkbox checked={!!selected[sub]} onChange={() => handleSelect(sub)} />}
                  label={sub}
                />
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DepartmentList;
