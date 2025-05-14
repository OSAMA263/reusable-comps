type propsType = {
  size?: "base" | "sm" | "lg";
  type?: "button" | "submit" | "reset";
  icon?: React.ComponentType;
  variant?: "light" | "dark";
  children: React.ReactNode;
  onClick?: () => void;
  styles?: React.CSSProperties;
};

export default function Button(props: propsType) {
  const {
    icon: Icon,
    size = "base",
    variant = "dark",
    type = "button",
    children = "download",
    onClick,
    styles,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        border: "0",
        height:"100%",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        color: "white",
        backgroundColor:
          variant === "dark"
            ? "#0d1117"
            : variant === "light"
            ? "#e4e4e4"
            : variant,
        fontSize: size === "sm" ? "12px" : size === "lg" ? "24px" : "16px",
        padding: "10px 16px",
        ...styles,
      }}
    >
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      {children}
    </button>
  );
}
