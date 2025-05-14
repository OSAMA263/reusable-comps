import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

export default function Toast() {
  const context = useContext(AppContext);
  if (!context) throw new Error("AppContext is undefined. Make sure Toast is wrapped in AppProvider.");
  const { activeToast, setActiveToast } = context;

  const {
    duration = 1000,
    status,
    text,
    active,
    direction = ["top", "center"],
  } = activeToast;
  // position styles
  const positionStyle: React.CSSProperties = {
    zIndex: 696969696969,
    transition: "all .4s",
    fontWeight: "bold",
    color: "white",
    position: "fixed",
    height: "fit-content",
    padding: "10px",
    borderRadius: "4px",
  };

  // apply position based on direction values
  if (direction && direction.includes("center")) {
    if (direction.includes("top")) {
      positionStyle.top = active ? 6 : -100;
      positionStyle.left = "50%";
      positionStyle.transform = "translateX(-50%)";
    } else if (direction.includes("bottom")) {
      positionStyle.bottom = active ? 6 : -100;
      positionStyle.left = "50%";
      positionStyle.transform = "translateX(-50%)";
    } else if (direction.includes("left")) {
      positionStyle.left = active ? 6 : -300;
      positionStyle.top = "50%";
      positionStyle.transform = "translateY(-50%)";
    } else if (direction.includes("right")) {
      positionStyle.right = active ? 6 : -300;
      positionStyle.top = "50%";
      positionStyle.transform = "translateY(-50%)";
    } else {
      // full center
      positionStyle.top = "50%";
      positionStyle.left = "50%";
      positionStyle.transform = "translate(-50%, -50%)";
      if (!active) {
        positionStyle.top = "-100px";
      }
    }
  } else if (direction) {
    if (direction.includes("top")) {
      positionStyle.top = active ? 6 : -100;
    }
    if (direction.includes("bottom")) {
      positionStyle.bottom = active ? 6 : -100;
    }
    if (direction.includes("left")) {
      positionStyle.left = active ? 6 : -300;
    }
    if (direction.includes("right")) {
      positionStyle.right = active ? 6 : -300;
    }
  }

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      setActiveToast({
        ...activeToast,
        status: "info",
        active: false,
      });
    }, duration);
    return () => clearTimeout(timer);
  }, [active, duration, setActiveToast, activeToast]);

  return (
    <div
      style={{
        backgroundColor:
          status === "success" ? "green" : status === "error" ? "red" : "aqua",
        ...positionStyle,
      }}
    >
      {text}
    </div>
  );
}
