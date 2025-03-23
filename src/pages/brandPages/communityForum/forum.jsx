import React from "react";
import { Card, CardContent, Typography, Avatar, IconButton, Button, Box, Grid } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShareIcon from "@mui/icons-material/Share";
import img1 from '../../../assets/svg/Jacobprofile.svg';
import { posts } from './data';
import './style.css';

const PostCard = () => {
  return (
    <Grid 
      container
      spacing={2}
      sx={{ maxWidth: 800, width: "100%", margin: "0 auto", flexDirection: "column", alignItems: "center" }}
    >
      {/* Main Post Card */}
      <Grid item xs={12}>
        <Card sx={{ borderRadius: 3, boxShadow: 2, p: 2, width: "100%" }}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Box component="img" sx={{ width: 40, height: 40, mr: 2 }} src={img1} />
                <Box>
                  <Typography fontWeight="500" fontSize="14px">Jacob</Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="400" fontSize="11px">
                    5 min ago
                  </Typography>
                </Box>
              </Box>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>

            <Typography fontWeight="600" fontSize="15px" mt={1}>
              Community Forum A Hub for Sustainability Collaboration
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1} fontSize="14px" fontWeight="400">
              The Community Forum is an interactive space where brands, retailers, and industry 
              professionals come together to share insights, discuss best practices, and collaborate 
              on sustainability initiatives. This dynamic platform fosters collective learning, 
              problem-solving, and industry-wide progress in ethical business and environmental responsibility.
            </Typography>

            <Box display="flex" alignItems="center" mt={2}>
              <ExpandMoreIcon color="disabled" sx={{ marginRight: "1px", width: "20px", height: "20px", background: "#847F3B33", borderRadius: "8px" }} />
              <Typography variant="body2">16</Typography>
              <Box flexGrow={1} />
              <Typography color="text.secondary" fontSize="11px" fontWeight="400">
                9 replies
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center" mt={2}>
              <Button className="btn-styles" color="disabled" startIcon={<ExpandLessIcon className="btn-icons" color="disabled" />} variant="outlined" fullWidth sx={{ mx: 1 }}>
                Upvote
              </Button>
              <Button className="btn-styles" color="disabled" startIcon={<NotificationsNoneIcon className="btn-icons" color="disabled" />} variant="outlined" fullWidth sx={{ mx: 1 }}>
                Follow
              </Button>
              <Button className="btn-styles" color="disabled" startIcon={<ShareIcon className="btn-icons" color="disabled" />} variant="outlined" fullWidth sx={{ mx: 1 }}>
                Share
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Comments/Posts Section */}
      <Grid item xs={12}>
        <Card sx={{ borderRadius: 3, boxShadow: 2, p: 3, width: "100%" }}>
          <CardContent>
            {posts.map((post) => (
              <Box key={post.id} mb={4}>
                {/* User Info */}
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <Avatar src={post.avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                    <Box>
                      <Typography className="title-name">{post.name}</Typography>
                      <Typography className="title-time" color="text.secondary">
                        {post.time}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                {/* Post Content */}
                <Typography variant="body1" className="body-content" sx={{ mt: 1, whiteSpace: "pre-line" }}>
                  {post.content}
                </Typography>

                {/* Likes */}
                <Box display="flex" alignItems="center" mt={1} color="text.secondary">
                  <ThumbUpOutlinedIcon className="like-icon" sx={{ mr: 0.5 }} />
                  <Typography variant="body2" className="likes-number">2 Likes</Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PostCard;
