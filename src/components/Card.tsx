import type { ReactNode } from "react";

type CardProps = {
  title: string;
  img?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
};

const cardStyle: React.CSSProperties = {
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  backgroundColor: "#fff",
  transition: "transform 0.3s ease",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const contentStyle: React.CSSProperties = {
  padding: "15px",
};

const footerStyle: React.CSSProperties = {
  padding: "10px 15px",
  borderTop: "1px solid #f0f0f0",
  backgroundColor: "#f9f9f9",
  textAlign: "right",
};

export default function Card({
  title,
  img,
  description,
  children,
  footer,
  onClick,
}: CardProps) {
  return (
    <div style={cardStyle} onClick={onClick}>
      {img && <img src={img} alt={title} style={imageStyle} />}
      <div style={contentStyle}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {children}
      </div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
}
