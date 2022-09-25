import React from "react";
import { useMediaQuery } from "react-responsive";
import { WIDTH, HEIGHT } from "../common/Dimension";
import "./Event.css";
import "../common/TextGradient.css";
import { COLORS } from "../theme/Colors";
import { useLocation } from "react-router-dom";

import location from "../assets/svgs/location.svg";
import calendar from "../assets/svgs/calendar.svg";
import right_arrow from "../assets/svgs/right_arrow.svg";

const BirthdayCake = require("../assets/images/pngs/birthday_cake.png");

const CalendarItem = ({ event, eventDate, eventEndDate }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "6vh",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0px",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          height: "inherit",
          flex: 0.15,
          backgroundColor: "white",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <img src={calendar} style={{ height: "24px", width: "24px" }} />
      </div>
      <div style={{ flex: 0.7 }}>
        <p
          style={{
            color: COLORS.PRIMARY_TEXT,
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          {eventDate ?? "12 July 2023"}
        </p>
        <p
          style={{
            color: COLORS.NEUTRALS_DARK_GRAY,
            fontSize: "14px",
          }}
        >
          to{" "}
          <span style={{ fontWeight: "700" }}>
            {eventEndDate ?? "12 July 2023"}
          </span>{" "}
          UTC +10
        </p>
      </div>
      <div>
        <img src={right_arrow} style={{ height: "18px", width: "18px" }} />
      </div>
    </div>
  );
};

const AddressItem = ({ eventPlace }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "6vh",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0px",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          height: "inherit",
          flex: 0.15,
          backgroundColor: "white",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <img src={location} style={{ height: "24px", width: "24px" }} />
      </div>
      <div style={{ flex: 0.7 }}>
        <p
          style={{
            color: COLORS.PRIMARY_TEXT,
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          {eventPlace ?? "Sydney"}
        </p>
        <p
          style={{
            color: COLORS.NEUTRALS_DARK_GRAY,
            fontSize: "14px",
          }}
        >
          Suburb, State, Postcode
        </p>
      </div>
      <div>
        <img src={right_arrow} style={{ height: "18px", width: "18px" }} />
      </div>
    </div>
  );
};

function Event() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1224px)" });
  const isMobileOrTable = useMediaQuery({ query: "(max-width:1224px)" });

  const { data } = useLocation();
  return (
    <main className="eventContainer" style={{ height: HEIGHT, width: WIDTH }}>
      <div
        style={
          isDesktopOrLaptop
            ? {
                width: "50%",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50,
              }
            : {}
        }
      >
        <img src={BirthdayCake} className={"eventImage"} />

        <article style={{ padding: "10px 20px" }}>
          <h1 style={{ color: COLORS.PRIMARY_TEXT, marginBottom: "10px" }}>
            {data?.event}
          </h1>
          <p style={{ color: COLORS.NEUTRALS_LIGHT_GRAY }}>
            Hosted by <span style={{ fontWeight: "700" }}>Elysia</span>
          </p>
          <div style={{ marginTop: "32px" }}>
            <CalendarItem data={data} />
            <AddressItem data={data} />
          </div>
        </article>
      </div>
    </main>
  );
}

export default Event;
