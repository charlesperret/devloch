"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type VideoModalProps = {
  open: boolean;
  title: string;
  closeLabel?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function VideoModal({ open, title, closeLabel = "Fermer la vidéo", onClose, children }: VideoModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const bodyStyleRef = useRef<{ overflow: string; paddingRight: string } | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!open || typeof document === "undefined") {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const body = document.body;
    if (!bodyStyleRef.current) {
      bodyStyleRef.current = {
        overflow: body.style.overflow,
        paddingRight: body.style.paddingRight,
      };
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      const previous = bodyStyleRef.current;
      if (previous) {
        body.style.overflow = previous.overflow;
        body.style.paddingRight = previous.paddingRight;
      } else {
        body.style.overflow = "";
        body.style.paddingRight = "";
      }
      bodyStyleRef.current = null;
    };
  }, [open, onClose]);

  if (!isMounted) {
    return null;
  }

  if (!open) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[80] motion-safe:animate-fade-in-up" aria-hidden={!open}>
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6" onClick={onClose}>
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="relative w-full max-w-5xl rounded-2xl bg-black p-2 shadow-2xl ring-1 ring-white/10 md:p-3"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <div className="overflow-hidden rounded-xl bg-black">
            <div className="relative aspect-[16/9]">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
