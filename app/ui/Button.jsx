import React from "react";

export default function Button({ isDisabled, onHandleClick, children }) {
  return (
    <button
      className={`btn btn-accent btn-outline w-full md:btn-wide tracking-wider text-slate-700`}
      disabled={isDisabled}
      onClick={onHandleClick}
    >
      {children}
    </button>
  );
}
