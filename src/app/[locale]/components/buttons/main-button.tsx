import { Button } from "@mui/material";
import React from "react";

type props = {
  className?: string;
  text: string;
  color?: "info" | "warning" | "inherit" | "primary" | "secondary" | "success" | "error";
};

export default function MainButton({ className, text, color }: props) {
  return (
    <Button variant="contained" color={color} className={`rounded-3xl p-2 ${className}`}>
      {text}
    </Button>
  );
}
