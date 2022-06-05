import React from "react";
import { Helmet } from "react-helmet";

export const HeadData = () => {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no, target-densitydpi=device-dpi"
      ></meta>
    </Helmet>
  );
};
