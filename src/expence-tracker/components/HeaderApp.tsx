import React, { useEffect, useRef } from "react";

const HeaderApp = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "mini app";
  });
  return <div>HeaderApp</div>;
};

export default HeaderApp;
