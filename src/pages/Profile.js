import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

// Badge
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

export default function Profile({ userState }) {
  // Settings
  let style = {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
      color: "#0E0E0E",
      p: {
        color: "#0E0E0E",
        fontFamily: "system-ui",
      },
    },
    //
    // Designing Badge
    StyledBadge = styled(Badge)(({ theme }) => ({
      "& .MuiBadge-badge": {
        backgroundColor: userState ? "#44b700" : "#FCFF47",
        color: userState ? "#44b700" : "#FCFF47",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "1px solid currentColor",
          content: '""',
        },
      },
    })),
    names = [
      {
        name: "Session",
        value: 123,
      },
      {
        name: "Dashboard",
        value: 123,
      },
      {
        name: "Profile",
        value: 123,
      },
    ];

  return (
    <div>
      {/* Image */}
      <div className="profile__header_image"></div>

      {/* Info */}
      <div className="profile__sides">
        <div className="profile__left_side">
          {/*  */}
          <div className="profile__left_side_image">
            <Avatar
              alt="Profile"
              src="/rabbit-2.png"
              sx={{ width: 128, height: 128 }}
            />

            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{
                left: "2rem",
                top: "-0.5rem",
              }}
            ></StyledBadge>
            <h2 className="profile__name">Space Beaver</h2>
            <p className="profile__username">@spacebeaver</p>
          </div>

          {/*  */}
          <List sx={style} component="nav" aria-label="mailbox folders">
            {names.map((name) => (
              <>
                <Divider />
                <ListItem button>
                  <ListItemText primary={name.name} />
                  <p style={style.p}>{name.value}</p>
                </ListItem>
              </>
            ))}
            <Divider />
          </List>
        </div>
        <div className="profile__right_side">
          <div>
            <BasicTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabPanel(props) {
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
        <Box component="form">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let languages = ["English", "Spanish", "French", "German", "Italian"];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Account Settings" {...a11yProps(0)} />
          <Tab label="Sessions" {...a11yProps(1)} />
          <Tab label="Notifications" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Content */}

      {/* Section 1 */}
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            "& .MuiTextField-root": {
              width: "45%",
              marginTop: "3rem",
              marginRight: "2rem",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField required label="Name" />
          <TextField disabled label="Username" />
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": {
              width: "45%",
              marginTop: "2rem",
              marginRight: "2rem",
            },
          }}
          noValidate
          autoComplete="off"
        >
          {/* autocomplete search text filed for language*/}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={languages}
            sx={{ width: "50%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Language"
                defaultValue={languages[0]}
              />
            )}
          />
        </Box>

        {/* Submit Form */}
        <Button variant="contained" sx={{ marginTop: "2rem" }}>
          Save Changes
        </Button>
      </TabPanel>

      {/* Section 2 */}
      <TabPanel value={value} index={1}>
        Sessions
      </TabPanel>
      <TabPanel value={value} index={2}>
        Notifications
      </TabPanel>
    </Box>
  );
}
