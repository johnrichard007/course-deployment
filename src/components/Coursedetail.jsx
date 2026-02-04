import { Card, CardContent, Typography, Grid, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Coursedetail = () => {
  const navigate = useNavigate();
  
  const courseDetails = [
    {
      name: "Java",
      duration: "3 Months",
      trainer: "John",
      fee: "₹5000",
      level: "Beginner to Advanced",
      description: "Learn Java programming with OOP concepts, Spring Framework, and build real-world applications.",
      syllabus: ["Core Java", "OOP Concepts", "Spring Boot", "Hibernate", "REST APIs"]
    },
    {
      name: "C++",
      duration: "3 Months",
      trainer: "Henry",
      fee: "₹5000",
      level: "Intermediate",
      description: "Master C++ programming with data structures, algorithms, and system programming concepts.",
      syllabus: ["C++ Fundamentals", "STL", "Data Structures", "Algorithm Design", "System Programming"]
    },
    {
      name: "Python",
      duration: "3 Months",
      trainer: "Tony",
      fee: "₹5500",
      level: "Beginner",
      description: "Python programming for data science, automation, and web development with Django/Flask.",
      syllabus: ["Python Basics", "Data Analysis", "Django Framework", "Machine Learning Basics", "Automation"]
    },
    {
      name: "C#",
      duration: "3 Months",
      trainer: "Will",
      fee: "₹6000",
      level: "Intermediate",
      description: "Learn C# programming with .NET framework for desktop, web, and mobile applications.",
      syllabus: ["C# Fundamentals", ".NET Framework", "ASP.NET", "Entity Framework", "Windows Forms"]
    },
    {
      name: "Game Development",
      duration: "3 Months",
      trainer: "Alex",
      fee: "₹5700",
      level: "Advanced",
      description: "Create games using Unity engine with C# scripting, 3D modeling, and game physics.",
      syllabus: ["Unity Basics", "C# for Games", "3D Modeling", "Game Physics", "Animation", "UI/UX"]
    },
    {
      name: "Web Development",
      duration: "3 Months",
      trainer: "Izzy",
      fee: "₹6500",
      level: "Beginner to Advanced",
      description: "Full-stack web development with React, Node.js, MongoDB, and modern web technologies.",
      syllabus: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "REST APIs", "Deployment"]
    }
  ];

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="courses-detail-container">
      <div className="page-header">
        <Typography variant="h3" gutterBottom>
          Course Details
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Explore our comprehensive course offerings
        </Typography>
      </div>
      
      <Grid container spacing={4}>
        {courseDetails.map((course, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card className="course-detail-card">
              <CardContent>
                <div className="course-header">
                  <Typography variant="h5" component="h2" className="course-name">
                    {course.name}
                  </Typography>
                  <Chip 
                    label={course.level} 
                    color="primary" 
                    size="small"
                    className="level-chip"
                  />
                </div>
                
                <Typography variant="body2" color="textSecondary" paragraph className="course-description">
                  {course.description}
                </Typography>
                
                <div className="course-info">
                  <div className="info-item">
                    <Typography variant="caption" color="textSecondary">Duration</Typography>
                    <Typography variant="body2">{course.duration}</Typography>
                  </div>
                  <div className="info-item">
                    <Typography variant="caption" color="textSecondary">Trainer</Typography>
                    <Typography variant="body2">{course.trainer}</Typography>
                  </div>
                  <div className="info-item">
                    <Typography variant="caption" color="textSecondary">Fee</Typography>
                    <Typography variant="body2" className="course-fee">{course.fee}</Typography>
                  </div>
                </div>
                
                <div className="syllabus-section">
                  <Typography variant="subtitle2" gutterBottom>
                    Syllabus:
                  </Typography>
                  <div className="syllabus-tags">
                    {course.syllabus.map((topic, idx) => (
                      <Chip
                        key={idx}
                        label={topic}
                        size="small"
                        variant="outlined"
                        className="syllabus-chip"
                      />
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="enroll-btn"
                  onClick={handleRegister}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};