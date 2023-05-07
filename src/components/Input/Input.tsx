import TextField from "@mui/material/TextField";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

function Input({ label, value, updateValue }: InputProps) {
  return (
    <>
      <TextField
        onChange={(e) => updateValue(e.target.value)}
        label={label}
        variant="outlined"
        value={value}
      />
    </>
  );
}

export default Input;
