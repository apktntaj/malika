import React from "react";

export default function Button({
  variant,
  isDisabled,
  onHandleClick,
  children,
}) {
  return (
    <button
      className={`btn btn-${variant} tracking-wider text-slate-700`}
      disabled={isDisabled}
      onClick={onHandleClick}
    >
      {children}
    </button>
  );
}
