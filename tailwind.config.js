/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "4xl": { max: "1920px" },
      "3xl": { max: "1735px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "530px" },
      xxs: { max: "420px" },
    },
    extend: {
      backgroundColor: {
        transparent: "transparent",
        primary: {
          light: "#64B5F3",
          default: "#376FFF",
          light2: "#E2F3FF",
          dark: "#1C3475",
          dark2: "#727FA4",
          dark3: "#334883",
        },
        green: {
          default: "#55C2A3",
          light: "#DDF9EF",
        },
        red: {
          default: "#EB5757",
          light: "#FDEEEE",
        },
        grey: {
          shade1: "#F8F8F8",
          shade2: "#ECEEF1",
        },
        border: {
          shade1: "#ECEEF1",
          shade2: "#B6BBC9",
        },
      },
      colors: {
        transparent: "transparent",
        primary: {
          light: "#64B5F3",
          default: "#376FFF",
          light2: "#E2F3FF",
          dark: "#1C3475",
          dark2: "#727FA4",
          dark3: "#334883",
        },
        green: {
          default: "#55C2A3",
          light: "#DDF9EF",
        },
        red: {
          default: "#EB5757",
          light: "#FDEEEE",
        },
        grey: {
          shade1: "#F8F8F8",
          shade2: "#ECEEF1",
        },
        border: {
          shade1: "#ECEEF1",
          shade2: "#B6BBC9",
        },
        textwhite: "#D1D5DB",
        textcolor: "#4F5C80",
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
      },
      boxShadow: {
        Shadow1: "0px 30px 80px rgba(15, 29, 36, 0.04)",
        Shadow2: "0px 24px 48px rgba(0, 0, 0, 0.05)",
      },
      blur: {
        xs: "3px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addBase, config }) {
      addBase({
        body: {
          padding: "0",
          margin: "0",
          fontFamily: "GilmerRegular",
        },
        html: {
          padding: "0",
          margin: "0",
          fontFamily: "GilmerRegular",
        },
        "*": {
          boxSizing: "inherit",
          fontFamily: "GilmerRegular",
        },
        li: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        ul: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        a: {
          display: "inline",
          textDecoration: "none",
          transition: ".3s",
          "&:hover": {
            textDecoration: "none",
          },
        },
        p: {
          margin: "0",
          padding: "0",
        },
        h1: {
          margin: "0",
          padding: "0",
        },
        h2: {
          margin: "0",
          padding: "0",
        },
        h3: {
          margin: "0",
          padding: "0",
        },
        h4: {
          margin: "0",
          padding: "0",
        },
        h5: {
          margin: "0",
          padding: "0",
        },
        h6: {
          margin: "0",
          padding: "0",
        },
        input: {
          width: "100%",
          border: "none",
          outline: "none",
          padding: "10px",
          borderRadius: "8px",
          transition: ".3s",
        },
        ".heading-h2": {
          fontSize: "34px",
          lineHeight: "48px",
          fontFamily: "GilmerBold",
        },
        ".heading-h3": {
          fontSize: "28px",
          lineHeight: "36px",
          fontFamily: "GilmerBold",
        },
        ".heading-LB": {
          fontSize: "20px",
          lineHeight: "32px",
          fontFamily: "GilmerBold",
        },
        ".heading-L": {
          fontSize: "20px",
          lineHeight: "32px",
          fontFamily: "GilmerMedium",
        },
        ".heading-MB": {
          fontSize: "18px",
          lineHeight: "28px",
          fontFamily: "GilmerBold",
        },
        ".heading-M": {
          fontSize: "18px",
          lineHeight: "28px",
          fontFamily: "GilmerMedium",
        },
        ".heading-SB": {
          fontSize: "16px",
          lineHeight: "24px",
          fontFamily: "GilmerBold",
        },
        ".heading-S": {
          fontSize: "16px",
          lineHeight: "24px",
          fontFamily: "GilmerMedium",
        },
        ".heading-XSB": {
          fontSize: "14px",
          lineHeight: "20px",
          fontFamily: "GilmerBold",
        },
        ".heading-XS": {
          fontSize: "14px",
          lineHeight: "20px",
          fontFamily: "GilmerMedium",
        },
        ".heading-XXSB": {
          fontSize: "12px",
          lineHeight: "16px",
          fontFamily: "GilmerBold",
        },
        ".heading-XXS": {
          fontSize: "12px",
          lineHeight: "16px",
          fontFamily: "GilmerMedium",
        },
        ".theme-btn": {
          fontSize: "16px",
          lineHeight: "28px",
          fontFamily: "GilmerBold",
          padding: "10px 24px",
          color: "white",
          backgroundColor: "#376FFF",
          borderRadius: "8px",
          transition: ".3s",
          "&:hover": {
            color: "white",
            backgroundColor: "#1C3475",
          },
        },
        ".theme-btn2": {
          fontSize: "16px",
          lineHeight: "28px",
          fontFamily: "GilmerBold",
          padding: "10px 24px",
          color: "#376FFF",
          backgroundColor: "white",
          border: "none",
          transition: ".3s",
          "&:hover": {
            color: "white",
            backgroundColor: "#1C3475",
          },
        },
      });
    },
    function ({ addUtilities }) {
      const dropdownHome = {
        ".TabsComponent-main .ant-tabs-nav": {
          padding: "0 75px !important",
          borderTop: "1px solid #ECEEF1",
          borderBottom: "1px solid #ECEEF1",
          marginBottom: "40px",
        },
        ".overlay-main": {
          transition: "1s",
        },
        ".Open-overlay .overlay-box": {
          right: "0px",
          opacity: "1",
          visibility: "visible",
        },
        ".overlay-box": {
          opacity: "0",
          visibility: "hidden",
          transition: "1s",
        },
        ".InstitutionnalOwnership-main .Show-Graph .graph-icon2": {
          left: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: "0",
          visibility: "hidden",
        },
        ".InstitutionnalOwnership-main .Show-Graph:hover .graph-icon1": {
          opacity: "0",
          visibility: "hidden",
        },
        ".InstitutionnalOwnership-main .Show-Graph:hover .graph-icon2": {
          opacity: "1",
          visibility: "visible",
        },
        ".InstitutionnalOwnership-main .Show-Graph:hover p": {
          color: "white",
        },
        ".InstitutionnalOwnership-main .AddFilter p": {
          color: "white",
        },
        ".InstitutionnalOwnership-main .AddFilter:hover .close-icon": {
          opacity: "1 !important",
          visibility: "visible !important",
        },
        ".InstitutionnalOwnership-main .AddFilter:hover .plus-icon": {
          opacity: "0 !important",
          visibility: "hidden !important",
        },
        ".InstitutionnalOwnership-main .filter-btn .drop-down-ul .drop-down-li:not(:last-child)":
          {
            borderBottom: "1px solid #ECEEF1",
          },
        ".InstitutionnalOwnership-main .filter-btn .drop-down-otr": {
          opacity: "0",
          visibility: "hidden",
          transition: ".3s",
        },
        ".InstitutionnalOwnership-main .filter-btn:hover .drop-down-otr": {
          top: "36px",
          opacity: "1",
          visibility: "visible",
        },
        ".InstitutionnalOwnership-main .filter-btn .plus-icon": {
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: "0",
          visibility: "hidden",
        },
        ".InstitutionnalOwnership-main .filter-btn:hover .close-icon": {
          opacity: "0",
          visibility: "hidden",
        },
        ".InstitutionnalOwnership-main .filter-btn:hover .plus-icon": {
          opacity: "1",
          visibility: "visible",
        },
        ".InstitutionnalOwnership-main .filter-btn:hover p ": {
          color: "white",
        },
        ".TabsComponent-main .ant-tabs::before": {
          display: "none",
        },
        ".footer-main .copy-text a:hover": {
          color: "white",
        },
        ".footer-main .copy-text a": {
          color: "#D1D5DB",
          transition: ".3s",
        },
        ".TabsComponent-main .ant-tabs .ant-tabs-nav::before": {
          display: "none",
        },
        ".TabsComponent-main .ant-tabs .ant-tabs-nav .ant-tabs-nav-list": {
          gap: "48px",
        },
        ".TabsComponent-main .ant-tabs-top>.ant-tabs-nav .ant-tabs-ink-bar": {
          height: "5px",
          backgroundColor: "#376FFF",
          borderRadius: "16px 16px 0 0",
        },
        ".TabsComponent-main .ant-tabs .ant-tabs-nav .ant-tabs-tab": {
          position: "relative",
          padding: "16px 0",
          marginLeft: "0",
        },
        ".TabsComponent-main .ant-tabs .ant-tabs-nav .ant-tabs-tab-btn": {
          position: "relative",
          fontSize: "16px",
          lineHeight: "28px",
          fontFamily: "GilmerMedium",
          color: "#727FA4",
        },
        ".TabsComponent-main .ant-tabs .ant-tabs-tab-active .ant-tabs-tab-btn":
          {
            color: "#1C3475",
          },
        ".TabsComponent-main .Slide-box-inr .stock-otr .stock-li:not(:last-child)":
          {
            paddingBottom: "8px !important",
            borderBottom: "1px solid #ECEEF1",
          },
        ".TabsComponent-main .Slide-box-inr .stock-otr .stock-li:not(:first-child)":
          {
            paddingTop: "8px !important",
          },
        ".TabsComponent-main .ant-carousel .slick-slider .slick-dots": {
          display: "flex !important",
          alignItems: "center",
          gap: "10px",
        },
        ".TabsComponent-main .ant-carousel .slick-slider .slick-dots li": {
          width: "8px !important",
          height: "8px !important",
        },
        ".TabsComponent-main .ant-carousel .slick-slider .slick-dots li button":
          {
            width: "8px !important",
            height: "8px !important",
            backgroundColor: "#B6BBC9 !important",
            borderRadius: "100%",
          },
        ".TabsComponent-main .ant-carousel .slick-slider .slick-dots .slick-active button":
          {
            backgroundColor: "#376FFF !important",
          },
        ".TabsComponent-main .ant-carousel .slick-dots-bottom": {
          bottom: "0px",
        },
        ".LineChart-box-otr .chart-otr .recharts-responsive-container .recharts-wrapper":
          {
            borderLeft: "1px solid #B6BBC9",
          },
        ".BarChart-box-otr .drop-chart-otr .line-dash": {
          left: "44%",
          bottom: "0",
          transform: "translateX(-50%)",
          //height: "75%",
          border: "0.5px dashed #FFC221",
        },
        ".header-main .menu-action-otr .menu-ul .menu-li:first-child p": {
          padding: "4px 8px !important",
        },
        ".cta-footer-main": {
          "&:after": {
            content: "''",
            position: "absolute",
            bottom: "0",
            zIndex: "-1",
            width: "100%",
            height: "70%",
            backgroundColor: "#1C3475",
          },
        },
        ".cta-main .bg-shapes-otr .cta-shape1": {
          objectPosition: "top left",
        },
        ".cta-main .bg-shapes-otr .cta-shape2": {
          objectPosition: "bottom right",
        },
        ".search-input": {
          border: "1px solid #ECEEF1",
          "&:focus": {
            backgroundColor: "white",
            border: "1px solid #ECEEF1",
            outline: "none",
          },
        },
        ".InstitutionnalOwnership-main .Fundamentals-boxes-otr .box-otr:hover .box-inr":
          {
            backgroundColor: "white",
            boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.08)",
          },
        ".linechart-bg-red": {
          backgroundColor: "#EB5757",
        },
        ".linechart-bg-secondary-blue": {
          backgroundColor: "#00C2FF",
        },
        ".linechart-bg-state-success": {
          backgroundColor: "#55C2A3",
        },
        ".linechart-bg-primary-blue": {
          backgroundColor: "#376FFF",
        },
        ".linechart-bg-tertiary-yellow": {
          backgroundColor: "#FFC221",
        },
        ".dropdown-chart-otr .drop-chart-inr .line-text-otr": {
          "&:last-child": {
            marginBottom: "0px",
          },
        },
        ".analyst-rating-otr .circle-line .circle-line-inr": {
          transformOrigin: "bottom",
        },
      };
      addUtilities(dropdownHome, ["responsive", "hover"]);
    },
  ],
};
