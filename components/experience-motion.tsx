"use client";

import { useEffect } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function ExperienceMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("#experience");
    const timeline = section?.querySelector<HTMLElement>(".timeline");
    const entries = timeline
      ? Array.from(timeline.querySelectorAll<HTMLElement>(".experience-entry"))
      : [];
    const markers = entries
      .map((entry) => entry.querySelector<HTMLElement>(".timeline-index"))
      .filter((marker): marker is HTMLElement => marker !== null);

    if (!section || !timeline || markers.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let markerCenters: number[] = [];
    let animationFrame = 0;
    let observer: IntersectionObserver | undefined;

    const measure = () => {
      const timelineRect = timeline.getBoundingClientRect();
      markerCenters = markers.map((marker) => {
        const markerRect = marker.getBoundingClientRect();
        return markerRect.top - timelineRect.top + markerRect.height / 2;
      });

      const firstCenter = markerCenters[0];
      const lastCenter = markerCenters.at(-1) ?? firstCenter;
      timeline.style.setProperty("--timeline-start", `${firstCenter}px`);
      timeline.style.setProperty("--timeline-length", `${Math.max(0, lastCenter - firstCenter)}px`);
    };

    const updateProgress = () => {
      animationFrame = 0;
      if (markerCenters.length === 0) measure();

      const timelineRect = timeline.getBoundingClientRect();
      const activationPoint = window.innerHeight * 0.55;
      const localPosition = activationPoint - timelineRect.top;
      const firstCenter = markerCenters[0];
      const lastCenter = markerCenters.at(-1) ?? firstCenter;
      const distance = Math.max(1, lastCenter - firstCenter);
      const hasReachedFirst = localPosition >= firstCenter;
      const progress = hasReachedFirst
        ? clamp((localPosition - firstCenter) / distance)
        : 0;

      timeline.style.setProperty("--timeline-progress", progress.toString());
      markers.forEach((marker, index) => {
        marker.classList.toggle("is-active", hasReachedFirst && localPosition >= markerCenters[index]);
      });
    };

    const queueProgressUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    const handleResize = () => {
      measure();
      queueProgressUpdate();
    };

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      entries.forEach((entry) => entry.classList.add("is-entry-visible"));
    } else {
      observer = new IntersectionObserver(
        (observations) => {
          observations.forEach((observation) => {
            if (!observation.isIntersecting) return;
            (observation.target as HTMLElement).classList.add("is-entry-visible");
            observer?.unobserve(observation.target);
          });
        },
        { rootMargin: "0px 0px -10%", threshold: 0.18 },
      );
      entries.forEach((entry) => observer?.observe(entry));
    }

    section.classList.add("experience-motion-ready");
    measure();
    updateProgress();
    window.addEventListener("scroll", queueProgressUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", queueProgressUpdate);
      window.removeEventListener("resize", handleResize);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      section.classList.remove("experience-motion-ready");
      timeline.style.removeProperty("--timeline-start");
      timeline.style.removeProperty("--timeline-length");
      timeline.style.removeProperty("--timeline-progress");
      entries.forEach((entry) => entry.classList.remove("is-entry-visible"));
      markers.forEach((marker) => marker.classList.remove("is-active"));
    };
  }, []);

  return null;
}
