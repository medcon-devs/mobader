"use client";

import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import themeColor from "../constant/color";
import { useRouter } from "next/navigation";
import { post } from "@/handler/api.handler";
import { routeConfig } from "../constant/route";
import Swal from "sweetalert2";

const specialities = [
  { value: "Endocrinologist", label: "Endocrinologist" },
  { value: "Cardiologist", label: "Cardiologist" },
  { value: "Pediatrician", label: "Pediatrician" },
  { value: "Internal Medicine", label: "Internal Medicine" },
  { value: "Family Medicine", label: "Family Medicine" },
  { value: "General Practitioner", label: "General Practitioner" },
  { value: "Diabetes Educator", label: "Diabetes Educator" },
  { value: "Pharmacist", label: "Pharmacist" },
  { value: "Nutritionist", label: "Nutritionist" },
  { value: "Diabetologist", label: "Diabetologist" },
  { value: "Nurse", label: "Nurse" },
  { value: "Family Physician", label: "Family Physician" },
  { value: "Industry", label: "Industry" },
  { value: "Internist", label: "Internist" },
  { value: "Neurologist", label: "Neurologist" },
  { value: "Nephrologist", label: "Nephrologist" },
  { value: "Other", label: "Other" },
];

interface RegisterFormsProps {
  slug: string;
}
export default function RegisterForms({ slug }: RegisterFormsProps) {
  const [loading, setLoading] = useState(false);
  const [speciality, setSpeciality] = useState(null);
  // Sign-Up Form State
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    speciality:speciality,
    event:slug,
    password: "",
  });

  // Login Form State
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    eventslug:slug
  });

  // Error State
  const [signUpErrors, setSignUpErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    speciality: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  // Handle Input Changes
  const handleSignUpChange = async (key: string, value: string) => {
    setInfo({
      ...info,
      [key]: value,
    });
  
  };

  const handleLoginChange = (key: string, value: string) => {
    setLoginInfo({
      ...loginInfo,
      [key]: value,
    });
  };

  // Validation Functions
  const validateSignUpFields = () => {
    const errors = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      speciality: "",
    };

    if (!info.first_name.trim()) errors.first_name = "First name is required.";
    if (!info.last_name.trim()) errors.last_name = "Last name is required.";
    if (!info.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (info.password.length < 5) {
      errors.password = "Password must be at least 5 characters long.";
    }
    if (!speciality) errors.speciality = "Speciality is required.";

    setSignUpErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const validateLoginFields = () => {
    const errors = { email: "", password: "" };

    if (!loginInfo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginInfo.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (loginInfo.password.length < 3) {
      errors.password = "Password must be at least 3 characters long.";
    }

    setLoginErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  // const MySwal = withReactContent(Swal);

const handleSignUpSubmit = async () => {
  console.log("sluuuuug",slug)
  // handleSignUpChange("event",slug)
  info.event= slug;

  if (validateSignUpFields()) {
    info.speciality = speciality.value;
    // console.log("info", info)
    setLoading(true);
    try {
      const res = await post(routeConfig.signup, info, "");
      setLoading(false);

      if (res.status_code === 200) {
        // Save the token in localStorage
        localStorage.setItem("token", res.user.token);
        localStorage.setItem("event", slug);
          // console.log("response" , res.user.token)
        // Show success dialog
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have been successfully registered.",
          timer: 2000, // Auto close the dialog after 2 seconds
          showConfirmButton: false, // Hide the confirmation button
        }).then(() => {
          // Navigate to account page
          router.replace("/Account");
        });
      } else {
        // Show error dialog
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res.message || "Sign up failed. Please try again.",
          confirmButtonText: "Close",
        });
      }
    } catch (error) {
      setLoading(false);
      // Handle unexpected errors with a dialog
      Swal.fire({
        icon: "error",
        title: "Unexpected Error",
        text: error.message || "An error occurred. Please try again later.",
        confirmButtonText: "Close",
      });
    }
  }
};
  const router = useRouter();
  const handleLoginSubmit = async () => {
    // router.push("/Account"); 
  //  console.log("loginInfo",loginInfo)
  loginInfo.eventslug = slug;
  // handleLoginChange("event",slug)
    if (validateLoginFields()) {
      setLoading(true);
      try {
        const res = await post(routeConfig.login, loginInfo, "");
        setLoading(false);
        // console.log("response" , res)
        if (res.status_code === 200) {
          // Save the token in localStorage
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("event", slug);

           
          // Show success dialog
          Swal.fire({
            icon: "success",
            title: "Login successful.",
            text: "You have been logged in successfully.",
            timer: 2000, // Auto close the dialog after 2 seconds
            showConfirmButton: false, // Hide the confirmation button
          }).then(() => {
            // Navigate to account page
            router.replace("/Account");
          });
        } else {
          // Show error dialog
          Swal.fire({
            
            icon: "error",
            title: "Login Failed",
            text: res.message || "Login failed. Please try again.",
            confirmButtonText: "Close",
          });
        }
      } catch (error) {
        setLoading(false);
        // Handle unexpected errors with a dialog
        Swal.fire({
          icon: "error",
          title: "Unexpected Error",
          text: error.message || "An error occurred. Please try again later.",
          confirmButtonText: "Close",
        });
      }
    }
  };

  return (
    <Grid container direction="column">
      {/* Header */}
      <Grid
        sx={{
          background: themeColor.black.main,
          height: 70,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          color={themeColor.white.main}
          sx={{
            padding: "15px",
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
            },
          }}
        >
          Registration
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        <Box
          component="img"
          src="/static/images/line.png"
          alt="Divider"
          sx={{
            width: { xs: "80%", sm: "60%", md: "40%" },
            objectFit: "contain",
            minWidth: 300,
            maxWidth: 700,
          }}
        />
        <Divider
          sx={{
            width: "90%",
            borderBottomWidth: 2,
            color: themeColor.secondary.dark,
            marginBottom: 2,
          }}
        />
      </Grid>
      <Grid container mt={5} margin="auto" maxWidth={1500} justifyContent="center" alignItems="flex-start">
        {/* Sign-Up Section */}
        <Grid item xs={12} md={6} px={10}>
          <Typography fontWeight="bold" variant="h6" mb={2}>
            Sign up
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                fullWidth
                required
                size="small"
                error={!!signUpErrors.first_name}
                helperText={signUpErrors.first_name}
                onChange={(e) => handleSignUpChange("first_name", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                fullWidth
                required
                size="small"
                error={!!signUpErrors.last_name}
                helperText={signUpErrors.last_name}
                onChange={(e) => handleSignUpChange("last_name", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                fullWidth
                required
                size="small"
                error={!!signUpErrors.email}
                helperText={signUpErrors.email}
                onChange={(e) => handleSignUpChange("email", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                options={specialities}
                value={speciality}
                fullWidth
                getOptionLabel={(option) => option.label}
                size="small"
                onChange={(event, value) => setSpeciality(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Speciality"
                    error={!!signUpErrors.speciality}
                    // helperText={signUpErrors.speciality}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                size="small"
                error={!!signUpErrors.password}
                helperText={signUpErrors.password}
                onChange={(e) => handleSignUpChange("password", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" mb={5}>
              <Button
                variant="contained"
                sx={{ background: themeColor.black.main, maxWidth: 200 }}
                fullWidth
                disabled={loading}
                onClick={handleSignUpSubmit}
              >
                {loading ? <CircularProgress size={24} /> : "Sign up"}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Login Section */}
        <Grid item xs={12} md={6} px={10}>
          <Typography fontWeight="bold" variant="h6" mb={2}>
            Login with existing account
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                fullWidth
                required
                size="small"
                error={!!loginErrors.email}
                helperText={loginErrors.email}
                onChange={(e) => handleLoginChange("email", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                size="small"
                error={!!loginErrors.password}
                helperText={loginErrors.password}
                onChange={(e) => handleLoginChange("password", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ background: themeColor.black.main, maxWidth: 200 }}
                disabled={loading}
                onClick={handleLoginSubmit}
              >
                {loading ? <CircularProgress size={24} /> : "Login"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Box
          component="img"
          src="/static/images/line2.png"
          alt="logo"
          mb={5}
          mt={5}
          sx={{
            width: "90%",
            height: 10,
          }}
        />
      </Grid>
    
    </Grid>
    
  );
}
function withReactContent(Swal: any) {
  throw new Error("Function not implemented.");
}

