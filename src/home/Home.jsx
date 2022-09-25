import React from "react";
import { useMediaQuery } from "react-responsive";
import { WIDTH, HEIGHT } from "../common/Dimension";
import "./Home.css";
import "../common/TextGradient.css";
import { COLORS } from "../theme/Colors";
import landingSVG from "../assets/svgs/landing.svg";
import { ButtonMobile, ButtonDesktop } from "../common/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1224px)" });
  const isMobileOrTable = useMediaQuery({ query: "(max-width:1224px)" });

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/create");
  };

  return (
    <main className="homeContainer" style={{ height: HEIGHT, width: WIDTH }}>
      {isDesktopOrLaptop && (
        <div
          style={{
            height: "inherit",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={landingSVG}
              style={{
                height: 700,
                width: 440,
                aspectRatio: 0.5,
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              height: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <h1 className="h1Desktop">Imagine if</h1>
              <h1 className="gradient h1Desktop">Snapchat</h1>
              <h1 className="h1Desktop">had events.</h1>
            </div>
            <div>
              <p
                className="pDesktop"
                style={{
                  color: COLORS.NEUTRALS_DARK_GRAY,
                  textAlign: "center",
                }}
              >
                Easily host and share events with your friends across any social
                media.
              </p>
            </div>
            <ButtonDesktop title="🎉 Create my event" />
          </div>
        </div>
      )}
      {isMobileOrTable && (
        <div
          style={{
            height: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className="h1Mobile">Imagine if</h1>
            <h1 className="gradient h1Mobile">Snapchat</h1>
            <h1 className="h1Mobile">had events.</h1>
          </div>
          <div>
            <p
              className="pMobile"
              style={{ color: COLORS.NEUTRALS_DARK_GRAY, textAlign: "center" }}
            >
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
          <img src={landingSVG} />
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
            🎉 Create my event
          </button>
        </div>
      )}
    </main>
  );
}

export default Home;
