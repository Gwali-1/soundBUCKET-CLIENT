import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import BucketNavbar from "./BucketNavbar";
///loader function to check if token is expired / use that to conditionally display different navbars

function NavbarComponent() {
  return (
    <div>
      <BrandLogo />
      {/* <BucketNavbar /> */}
    </div>
  );
}

export default NavbarComponent;
