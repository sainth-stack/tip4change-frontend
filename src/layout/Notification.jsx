import React, { useState } from "react";
import {
  Box,
  IconButton,
  Avatar,
  Popover,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";

const notifications = [
  {
    id: 1,
    text: "Cash Received From Jayesh Kumar",
    date: "Jan 14, 2025 ; 5:00 PM",
    unread: true,
  },
  {
    id: 2,
    text: "Surya Has Completed The Project Creation",
    date: "Feb 23, 2025 ; 3:00 PM",
    unread: true,
  },
  {
    id: 3,
    text: "Banu Has Completed The Story Creation",
    date: "Jan 25, 2025 ; 2:00 PM",
    unread: true,
  },
  {
    id: 4,
    text: "Vijay Has Made A Payment",
    date: "Feb 10, 2025 ; 10:00 AM",
    unread: false,
  },
  {
    id: 5,
    text: "Prakash Has Completed The Project Creation",
    date: "Mar 5, 2025 ; 2:00 PM",
    unread: false,
  },
];

const NotificationPopup = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifs, setNotifs] = useState(notifications);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const markAllAsRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, unread: false })));
  };

  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginLeft: "auto",
      }}
    >
      {/* Notification Icon (Triggers Popover) */}
      <IconButton
        sx={{
          bgcolor: "#f5f5f5",
          color: "#847f3b",
          width: "35px",
          height: "35px",
          transition: "all 0.3s ease",
          borderRadius: open ? "30px" : "50%", // Change border-radius dynamically
        }}
        onClick={handleClick}
      >
        <Badge
          badgeContent={notifs.filter((n) => n.unread).length}
          color="success"
        >
          <NotificationsNoneIcon />
        </Badge>
      </IconButton>

      {/* Popover for Notifications */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: 1 }}
      >
        <Box
          sx={{
            p: 2,
            width: 450,
            height: "400px",
            borderRadius: "30px",
            boxShadow: 0,
            backgroundColor: "#fff",
          }}
        >
          {/* Header Section */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h6" fontWeight="bold">
              Notification{" "}
              <span style={{ color: "#847f3b" }}>
                ({notifs.filter((n) => n.unread).length})
              </span>
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "#847f3b",
                borderColor: "#847f3b",
                borderRadius: "30px",
              }}
              onClick={markAllAsRead}
            >
              Mark As Read
            </Button>
          </Box>

          {/* Notifications List */}
          <List sx={{ maxHeight: 400, overflowY: "auto" }}>
            {notifs.map((notif) => (
              <ListItem
                key={notif.id}
                sx={{ borderBottom: "1px solid #eee", pb: 0 }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#EAE8D3", color: "#5D5A36" }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography fontWeight="bold">{notif.text}</Typography>
                  }
                  secondary={
                    <Typography color="textSecondary" variant="body2">
                      {notif.date}
                    </Typography>
                  }
                />
                {notif.unread && (
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: "#847f3b",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </Box>
  );
};

export default NotificationPopup;
