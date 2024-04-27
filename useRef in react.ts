import { useRef, ElementRef } from "react";

const Component = () => {
  const audioRef = useRef<ElementRef<"audio">>(null);

  return <audio ref={audioRef}> Audio Tag </audio>;
};


function useRef<T>(initialValue: T): MutableRefObject<T>;
function useRef<T>(initialValue: T|null): RefObject<T>;
function useRef<T = undefined>(): MutableRefObject<T | undefined>;

interface RefObject<T> {
  readonly current: T | null;
}

function A() {
  const ref1 = useRef<HTMLParagraphElement>(null)    
  // const ref1: React.RefObject<HTMLParagraphElement>

  const ref2 = useRef<ElementRef<'p'>>(null)
  // const ref2: React.RefObject<HTMLParagraphElement>
}
