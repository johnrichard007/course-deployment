import { useState } from "react";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home1 = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      title: "Java",
      instructor: "John",
      image: "https://admin.tops-int.com/storage/course/icons/resized/23704.png",
      duration: "3 Months",
      fee: "₹5000"
    },
    {
      id: 2,
      title: "C++",
      instructor: "Henry",
      image: "https://admin.tops-int.com/storage/course/icons/60202.png",
      duration: "3 Months",
      fee: "₹5000"
    },
    {
      id: 3,
      title: "Python",
      instructor: "Tony",
      image: "https://admin.tops-int.com/storage/course/icons/47038.png",
      duration: "3 Months",
      fee: "₹5500"
    },
    {
      id: 4,
      title: "C#",
      instructor: "Will",
      image: "https://admin.tops-int.com/storage/course/icons/60202.png",
      duration: "3 Months",
      fee: "₹6000"
    },
    {
      id: 5,
      title: "Game Development",
      instructor: "Alex",
      image: "https://admin.tops-int.com/storage/course/icons/resized/65387.png",
      duration: "3 Months",
      fee: "₹5700"
    },
    {
      id: 6,
      title: "Web Development",
      instructor: "Izzy",
      image: "https://admin.tops-int.com/storage/course/icons/resized/29864.png",
      duration: "3 Months",
      fee: "₹6500"
    }
  ];

  const handleLearnMore = (courseId) => {
    navigate('/coursedetail');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to இ-Learning Platform</h1>
        <p>Learn from industry experts with hands-on projects</p>
      </div>
      
      <div className="courses-section">
        <h2>Featured Courses</h2>
        <Grid container spacing={4} justifyContent="center">
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Paper elevation={8} className="course-card-wrapper">
                <Card className="course-card">
                  <div className="card-media-container">
                    <CardMedia
                      component="img"
                      className="course-image"
                      image={course.image}
                      alt={course.title}
                    />
                  </div>
                  <CardContent>
                    <Typography variant="h5" component="h3" className="course-title">
                      {course.title}
                    </Typography>
                    <Typography variant="subtitle1" className="course-instructor">
                      Instructor: {course.instructor}
                    </Typography>
                    <div className="course-details">
                      <span className="duration">{course.duration}</span>
                      <span className="fee">{course.fee}</span>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      onClick={() => handleLearnMore(course.id)}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};