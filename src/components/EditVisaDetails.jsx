import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import EditPackageForm from "./EditVisaForm";
import PaymentForm from "./PaymentForm";
import Review from "./ReviewVisa";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const steps = ["Visa Details", "Review Your Visa"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const packageData = location.state;
  const [activeStep, setActiveStep] = React.useState(0);
  const [imageFileName, setImageFileName] = useState([]);
  const [imageFileUrl, setImageFileUrl] = useState([]);
  const [videoFileName, setVideoFileName] = useState([]);
  const [videoFileUrl, setVideoFileUrl] = useState([]);
  const [title, setTitle] = useState(packageData.title);
  const [desc, setDesc] = useState(packageData.description);
  const [address, setAddress] = useState(packageData.firstName);
  const [city, setCity] = useState(packageData.lastName);
  const [state, setState] = useState(packageData.email);
  const [zip, setZip] = useState('');
  const [isDiscounted,setisDiscounted] = useState(packageData.isDiscounted);
  const [discount,setDiscount]= useState(packageData.Discount);
  const [country, setCountry] = useState(packageData.phoneNumber);
  const [totalCount, setTotalCount] = useState(packageData.duration);
  const [price, setPrice] = useState(packageData.price);
  const [region , setRegion] = useState(packageData.region)
  const [error, seterror] = React.useState("");
  const [imagesList, setImagesList] = useState([]);
  const [videosList, setVideosList] = useState([]);

  const handleNext = () => {
    // if ((/^[ A-Za-z0-9_@./#&+-,]+$/).test(imageFileName) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(videoFileName) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(title) && (/^[ A-Za-z0-9_@./#&+-,]*$/).test(desc) && (/^[ A-Za-z0-9_@./#&+-,]*$/).test(address) && (/^[ A-Za-z0-9_@./#&+-,]*$/).test(city) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(state) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(zip)&& (/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/).test(imageFileUrl) && (/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/).test(videoFileUrl) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(country) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(price) ) {
        if (
            imageFileName.length == 0 ||
            // videoFileName.length == 0 ||
            title.length == 0 ||
            desc.length == 0 ||
            state.length == 0 ||
            totalCount.length == 0 ||
            price.length == 0
          ) {
      seterror("Kindly Fill All The Fields !!! ");
    } else {
      imageFileUrl.map((item) => {
        setImagesList((imagesList) => [...imagesList, { image: item }]);
      });
      videoFileUrl.map((item) => {
        setVideosList((videosList) => [...videosList, { video: item }]);
      });
      seterror("");
      setActiveStep(activeStep + 1);
    }
    // }
    // else{
    //   seterror('Invalid Entries !!!');
    // }
    // setActiveStep(activeStep + 1);
  };
  const updateMyPackage = () => {
    const data = {
        title: title,
        description: desc,
        firstName: address,
        lastName: city,
        email: state,
        phoneNumber: country,
        images: imagesList,
        videos: videosList,
        duration: totalCount,
        region: region,
        isDiscounted:isDiscounted,
        Discount: discount,
        price: price,
        active: true,
      };
    const URL = `https://backend.azeemtourism.com/api/visas/update/${packageData._id}`;
    axios
      .post(URL, data)
      .then((response) => {
        // window.location.reload()
      })
      .catch((error) => {
        // event.preventDefault();
      });
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <EditPackageForm
            title={title}
            setZip={setZip}
            zip={zip}
            country={country}
            setCountry={setCountry}
            desc={desc}
            address={address}
            setState={setState}
            setCity={setCity}
            state={state}
            city={city}
            setDesc={setDesc}
            setTitle={setTitle}
            setAddress={setAddress}
            setVideoFileUrl={setVideoFileUrl}
            videoFileUrl={videoFileUrl}
            setImageFileName={setImageFileName}
            imageFileName={imageFileName}
            setImageFileUrl={setImageFileUrl}
            imageFileUrl={imageFileUrl}
            setVideoFileName={setVideoFileName}
            videoFileName={videoFileName}
            totalCount={totalCount}
            setTotalCount={setTotalCount}
            price={price}
            setPrice={setPrice}
            packageData={packageData}
            setRegion={setRegion}
            region = {region}
            isDiscounted ={isDiscounted}
            discount={discount}
            setisDiscounted={setisDiscounted}
            setDiscount={setDiscount}
          />
        );
      case 1:
        return (
          <Review
            title={title}
            zip={zip}
            country={country}
            desc={desc}
            address={address}
            state={state}
            city={city}
            videoFileUrl={videoFileUrl}
            imageFileName={imageFileName}
            imageFileUrl={imageFileUrl}
            videoFileName={videoFileName}
            price={price}
            totalCount={totalCount}
            region = {region}
            discount = {discount}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your Visa Has Been Updated
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/admin/manageVisas")}
                sx={{ mt: 3, ml: 1 }}
              >
                GoTo Manage Visa
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography style={{ color: "red" }} variant="subtitle1">
                  {error}
                </Typography>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      updateMyPackage();
                      handleNext();
                    }}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {" "}
                    Edit Visa
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {" "}
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
