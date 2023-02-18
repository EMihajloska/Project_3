import React from "react";

type Props = {
  name: string;
  margin?: number;
  bgColor?: string;
  color?: string;
  mb?: string;
  p?: string;
  onClick?: () => void;
};

export default function Button({ name, margin, bgColor, color, mb, p }: Props) {
  return (
    <button
      className={`btn btn-shape ${p} ${mb} ${color} ${bgColor} ml-${margin}`}
    >
      {name}
    </button>
  );
}
