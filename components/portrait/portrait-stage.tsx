"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const MAX_SHIFT = 7;
const MAX_TILT = 0.8;

export function PortraitStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;

    const reset = () => {
      stage.style.setProperty("--portrait-x", "0px");
      stage.style.setProperty("--portrait-y", "0px");
      stage.style.setProperty("--portrait-rx", "0deg");
      stage.style.setProperty("--portrait-ry", "0deg");
    };

    const move = (event: PointerEvent) => {
      if (motionQuery.matches || !pointerQuery.matches) return;
      const rect = stage.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        stage.style.setProperty("--portrait-x", `${(x * MAX_SHIFT).toFixed(2)}px`);
        stage.style.setProperty("--portrait-y", `${(y * MAX_SHIFT).toFixed(2)}px`);
        stage.style.setProperty("--portrait-rx", `${(-y * MAX_TILT).toFixed(2)}deg`);
        stage.style.setProperty("--portrait-ry", `${(x * MAX_TILT).toFixed(2)}deg`);
      });
    };

    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", reset);
    motionQuery.addEventListener("change", reset);
    pointerQuery.addEventListener("change", reset);

    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", reset);
      motionQuery.removeEventListener("change", reset);
      pointerQuery.removeEventListener("change", reset);
    };
  }, []);

  return (
    <div ref={stageRef} className="portrait-stage" aria-label="Portrait of Parag Patil">
      <div className="portrait-backdrop" aria-hidden="true" />
      <div className="portrait-media">
        <Image
          src="/images/portrait.webp"
          alt="Parag Patil, computer engineering student and software developer"
          fill
          priority
          sizes="(max-width: 820px) 80vw, 38vw"
        />
      </div>
      <p className="portrait-caption">Parag Patil / Engineer</p>
    </div>
  );
}
