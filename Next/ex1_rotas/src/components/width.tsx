"use client";

import React, { useEffect, useState } from "react";

const Width = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      <h2 style={{ color: ativo ? "#680" : "red" }}>
        Largura da Tela: {width}
      </h2>
      <button onClick={() => setAtivo((b) => !b)}>Clique</button>
    </div>
  );
};

export default Width;
