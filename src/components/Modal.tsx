import { useContext, type ReactNode } from "react";
import AppContext from "../context/AppContext";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  title?: string;
  children: ReactNode;
};

const overlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100dvh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  transition: "all .4s",
  alignItems: "center",
  zIndex: 696969,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "20px",
  maxWidth: "50%",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  position: "relative",
  zIndex: 69420911,
};

const headerStyle: React.CSSProperties = {
  marginBottom: "10px",
  fontWeight: "bold",
  fontSize: "18px",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: 10,
  right: 15,
  fontSize: "20px",
  cursor: "pointer",
};
export default function Modal(props: ModalProps) {
  const { title, children } = props;
  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);

  return (
    <div
      style={{
        opacity: modalIsOpen ? 1 : 0,
        visibility: modalIsOpen ? "visible" : "hidden",
        ...overlay,
      }}
      onClick={() => setModalIsOpen(false)}
    >
      {/* modal */}
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <span style={closeButtonStyle} onClick={() => setModalIsOpen(false)}>
          <IoMdClose />
        </span>
        {/* header */}
        {title && <div style={headerStyle}>{title}</div>}
        {/* body */}
        <div>{children}</div>
      </div>
    </div>
  );
}
