import Button from "./components/Button";
import { HiDownload } from "react-icons/hi";
import InputField from "./components/InputField";
import Toast from "./components/Toast";
import { useContext, useState } from "react";
import AppContext from "./context/AppContext";
import Modal from "./components/Modal";
import Product from "./components/cards/Product";
import Article from "./components/cards/Article";
import Profile from "./components/cards/Profile";

const modals = ["Product", "Article", "Profile"];

function App() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error(
      "AppContext is undefined. Make sure App is wrapped in AppProvider."
    );
  const { setActiveToast, setModalIsOpen } = context;
  const [modalContent, setModalContent] = useState("Product");

  const handleModalContent = (contnet: string) => {
    setModalContent(contnet);
    setModalIsOpen(true);
  };

  return (
    <div style={{ minHeight: "100dvh", padding: 32, fontFamily: "sans-serif" }}>
      <h1 style={{ fontWeight: 900, fontSize: 36, marginBottom: 8 }}>
        reusable components guide
      </h1>

      {/* buttons */}
      <h2>Button</h2>
      <div
        style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}
      >
        <Button icon={HiDownload} onClick={() => alert("Downloading!")}>
          Download
        </Button>
        <Button size="lg" variant="light">
          large light btn
        </Button>
        {/* u can override the main button styles with the prop styles */}
        <Button
          size="sm"
          styles={{
            borderRadius: 20,
            background: "linear-gradient(90deg, #f0f, #0ff)",
            color: "black",
          }}
        >
          custom styles
        </Button>
      </div>

      {/* inputField examples */}
      <h2>inputField</h2>
      <div
        style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}
      >
        <InputField
          label="Email"
          name="email"
          placeholder="Enter your email"
          state="success"
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          state="error"
          placeholder="Wrong password!"
        />
        <InputField
          label="Bio"
          name="bio"
          as="textarea"
          rows={6}
          disabled
          placeholder="u can pass the 'as' prop to render a textarea also this input is disabled"
        />
      </div>

      {/* toast example */}
      <h2>Toast</h2>
      <Button
        onClick={() =>
          setActiveToast({
            active: true,
            text: "test",
            status: "info",
            direction: ["bottom", "center"],
          })
        }
        styles={{ marginBottom: 16 }}
      >
        Show Toast
      </Button>
      <Toast />

      {/* modal example */}
      <h2>Modal</h2>
      {modals.map((modal) => (
        <Button
          key={modal}
          onClick={() => handleModalContent(modal)}
          styles={{ marginBottom: 16 }}
        >
          open ({modal}) modal
        </Button>
      ))}

      <Modal title={modalContent}>
        {modalContent === "Product" ? (
          <Product />
        ) : modalContent === "Profile" ? (
          <Profile />
        ) : modalContent === "Article" ? (
          <Article />
        ) : null}
      </Modal>

      {/* card components */}
      <h2>Cards</h2>
      <div
        style={{
          display: "flex",
          gap: 16,
          flexDirection: "column",
          width: "20%",
        }}
      >
        <div>
          <h2>product</h2>
          <Product />
        </div>
        <div>
          <h2>article</h2>
          <Article />
        </div>
        <div>
          <h2>profile</h2>
          <Profile />
        </div>
      </div>

      <div style={{ marginTop: 69, color: "gray", fontSize: 14 }}>
        <strong>a small Tip:</strong> combine components for rich UIs. Use
        context to control global UI state (toasts, modals) from anywhere.
        <p>
          all components are fully typed with ts for safety and autocompletion
        </p>
      </div>
    </div>
  );
}

export default App;
