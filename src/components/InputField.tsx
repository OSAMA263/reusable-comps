type propsType = {
  label: string;
  name: string;
  required?: boolean;
  type?: "text" | "password" | "email" | "number";
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  state?: "success" | "error";
};

export default function InputField(props: propsType) {
  const {
    as: Tag = "input",
    label,
    state,
    name,
    rows = 5,
    type = "text",
    disabled = false,
    ...rest
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "8px",
        fontSize: "24px",
      }}
    >
      <label htmlFor={name}>{label}</label>
      <Tag
        {...{ type, name, disabled, rows, id: name, ...rest }}
        style={{
          fontSize: "16px",
          border: "4px solid",
          borderColor:
            state === "success" ? "green" : state === "error" ? "red" : "black",
          outline:
            state === "success"
              ? "2px solid green"
              : state === "error"
              ? "2px solid red"
              : "2px solid #ccc",
        }}
      />
    </div>
  );
}