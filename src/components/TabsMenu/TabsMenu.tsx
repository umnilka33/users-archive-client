import * as React from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';
import { NewUserForm } from '../NewUserForm/NewUserForm';
import { UserList } from '../UserList/UserList';
import { UserAlert } from "../Alert/Alert";
import { getAlert } from "../../redux/Alert";
import { useSelector } from 'react-redux';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const StyledBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}))

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: '40px 20px' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsMenu() {
  const [value, setValue] = React.useState(0);
  const alertState = useSelector(getAlert);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {alertState.alertText.length > 0 && <UserAlert info={alertState} />}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Новый пользователь" {...a11yProps(0)} />
          <Tab label="Список пользователей" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StyledBox>
          <NewUserForm />
        </StyledBox>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StyledBox sx={{ height: 'calc(100vh - 150px)', overflowY: 'scroll' }}>
          <UserList />
        </StyledBox>
      </CustomTabPanel>
    </Box>
  );
}