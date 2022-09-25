import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ButtonDesktop, ButtonMobile } from "../common/Button";
import { WIDTH, HEIGHT } from "../common/Dimension";
import { useNavigate } from "react-router-dom";
import "./Create.css";

function Create() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1224px)" });
  const isMobileOrTable = useMediaQuery({ query: "(max-width:1224px)" });

  const [imgSource, setImageSource] = useState();

  const [event, setEvent] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventPlace, setEventPlace] = useState("");

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImageSource(URL.createObjectURL(file));
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/event", {
      data: {
        imgSource,
        event,
        eventDate,
        eventEndDate,
        eventPlace,
      },
    });
  };

  return (
    <main
      className="createContainer"
      style={{
        height: HEIGHT,
        width: WIDTH,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          // flex: 0.4,
          borderRadius: "10px",
          height: "40%",
          width: isMobileOrTable ? "100%" : "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        <img
          src={imgSource}
          style={{
            height: "100%",
            width: "100%",
            aspectRatio: 1,
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
        <input
          type={"file"}
          onChange={onImageChange}
          style={
            !imgSource
              ? { position: "absolute", left: "10px", bottom: "-10px" }
              : { display: "none" }
          }
        />

        {imgSource && (
          <button
            onClick={() => {
              setImageSource(null);
            }}
            style={{
              position: "absolute",
              padding: "10px",
              border: "none",
              backgroundColor: "#E61445",
              color: "#FFd7E0",
              borderRadius: "10px",
              right: "-10px",
              bottom: "-10px",
            }}
          >
            X
          </button>
        )}
      </div>

      <div style={{ padding: "20px", width: isMobileOrTable ? "100%" : "40%" }}>
        <div style={{ margin: "10px 0px" }}>
          <p>🎉 My event is called</p>
          <input
            type={"text"}
            value={event}
            onChange={(e) => {
              setEvent(e.target.value);
            }}
            style={{
              width: "100%",
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "10px 10px",
              marginTop: "10px",
            }}
          />
        </div>
        <div style={{ margin: "10px 0px" }}>
          <p>🗓 It starts at</p>
          <input
            type={"date"}
            value={eventDate}
            onChange={(e) => {
              setEventDate(e.target.value);
            }}
            style={{
              width: "100%",
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "10px 10px",
              marginTop: "10px",
            }}
          />
        </div>
        <div style={{ margin: "10px 0px" }}>
          <p>🏁 It ends at (optional)</p>
          <input
            type={"date"}
            value={eventEndDate}
            onChange={(e) => {
              setEventEndDate(e.target.value);
            }}
            style={{
              width: "100%",
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "10px 10px",
              marginTop: "10px",
            }}
          />
        </div>
        <div>
          <p>📍 It’s happening at (optional)</p>
          <input
            type={"text"}
            value={eventPlace}
            onChange={(e) => {
              setEventPlace(e.target.value);
            }}
            style={{
              width: "100%",
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "10px 10px",
              marginTop: "10px",
            }}
          />
        </div>
      </div>

      <button
        onClick={handleNext}
        style={{
          padding: "16px 21px",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "10px",
          background: "-webkit-linear-gradient(left, #8456ec, #e87bf8)",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Next
      </button>
    </main>
  );
}

export default Create;
