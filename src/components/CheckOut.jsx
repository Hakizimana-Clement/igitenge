import React from "react";
import { useNavigate } from "react-router-dom";
import SelectCountriesInput from "./SelectCountriesInput";

// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Checkbox from "@mui/joy/Checkbox";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputAdornment from "@mui/material/InputAdornment";
// StyleShetet
const myStyle = {
  background: "#e3e3e3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const boxStyle = {
  // border: "2px blue solid",
  // width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "25px",
  flexWrap: "wrap",
  padding: "0.8%",
};

const boxImage = {
  width: "39px",
  height: "39px",
  // width: "70px",
  // height: "70px",
  // width: "170px",
  // height: "170px",
  // background: "#172221",
  background: "white",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  // cursor: "pointer",
};

const formStyle = {
  // with: "48%",
  // padding: "0 4%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formBox = {
  // border: "2px blue #dc3545b0",
  background: "white",
  padding: "4% 3% 0",
  borderRadius: "15px",
};
const ulStyle = {
  display: "flex",
  justifyContent: "space-evenly",
};
const liStyle = {
  listStyle: "none",
  cursor: "pointer",
};
export default function CheckOut() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="pay" style={myStyle}>
          <h1>Payment Process</h1>
          <p>
            choose your favorite payment methods and All transactions are secure
            and encrypted.
          </p>
          <div style={boxStyle}>
            <div className="box-image" style={boxImage}>
              <img
                style={{ width: "100%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png?20210817144358"
                alt="airtel-icon"
              />
            </div>
            <div className="box-image" style={boxImage}>
              <img
                style={{ width: "94%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png?20170118154621"
                alt="CreditCard-icon"
              />

              {/* <CreditCardIcon sx={{ fontSize: 88 }} color="dark" /> */}
              {/* <p>Credit card</p> */}
            </div>
            <div className="box-image" style={boxImage}>
              <img
                style={{ width: "100%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/150px-American_Express_logo_%282018%29.svg.png"
                alt="Mtn-Mobile-Money-icon"
              />
            </div>
            <div className="box-image " style={boxImage}>
              <img
                style={{ width: "85%" }}
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/89df35dbcc656b677a4462137dcdecc9.svg"
                alt="westernUnion-icon"
              />
            </div>
            <div className="box-image" style={boxImage}>
              <img
                style={{ width: "182%" }}
                src="https://www.seekpng.com/png/detail/69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png"
                alt="Mtn Mm Logo Generic - Mtn Mobile Money Logo Png@seekpng.com"
              />
            </div>
            <div className="box-image" style={boxImage}>
              <img
                style={{ width: "100%" }}
                alt="bank-of-kigali-logo"
                src="https://pbs.twimg.com/profile_images/1167012248553971714/NbOOQI62_400x400.jpg"
              />
            </div>
          </div>
        </div>
        {/* FORM SECTION */}
        <div style={formStyle} className="y">
          <h2>Billing address</h2>
          <p>Enter the address that matches your card or payment method.</p>
          <form style={formBox}>
            <div className="mb-3">
              <SelectCountriesInput />
            </div>
            {/* <Box
            // className="bg-darkgreen"
            component="form"
            // sx={
            //   {
            //     "& > :not(style)": { m: 1, width: "25ch" },
            //   }
            // }
            sx={{
              //   // width: 20,
              width: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
              required
            />
            <div>
              <TextField
                fullWidth
                size="small"
                label="fullWidth"
                id="fullWidth"
              />
            </div>
          </Box> */}
            {/* <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl> */}
            {/* <div class="input-group input-group-lg mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              aria-label="Last Name"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              aria-label="Last Name"
            />
          </div> */}
            <div
              class="input-group mb-3"
              sx={{
                width: {
                  xs: 100,
                  sm: 200,
                  md: 300,
                  lg: 400,
                  xl: 500,
                },
              }}
            >
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                aria-label="First Name"
                required
              />
              <span class="input-group-text"></span>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
                required
              />
            </div>

            <div
              class="input-group mb-3 flex-nowrap "
              // style={{ margin: "0  " }}
            >
              {/* <span class="input-group-text" id="basic-addon1">
              @
            </span> */}
              <input
                // className="input-sm"
                type="text"
                class="form-control"
                placeholder="Address"
                aria-label="address"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div
              class="input-group mb-3 flex-nowrap"
              // style={{ margin: "0  " }}
            >
              <input
                // className="input-sm"
                type="text"
                class="form-control"
                placeholder="Apartment,suit,etc. (optional)"
                aria-label="apartment"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div
              class="input-group mb-3 flex-nowrap"
              // style={{ margin: "0  " }}
            >
              <input
                // className="input-sm"
                type="text"
                class="form-control"
                placeholder="City"
                aria-label="city"
                required
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              />
              <label class="form-check-label" for="flexCheckDefault">
                Save this information for next time
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button
                className="btn mt-4 mb-5 btn-danger"
                onClick={() => navigate("payment")}
                // style={{ display: "flex", justifyContent: "end" }}
              >
                Continue to payment
              </button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <hr />
        <div>
          <ul style={ulStyle}>
            <li style={liStyle}>Redund policy</li>
            <li style={liStyle}>Privacy plocy</li>
            <li style={liStyle}>Terms of service</li>
          </ul>
        </div>
      </section>
    </>
  );
}
