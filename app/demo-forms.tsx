"use client";

import type { FormEvent, ReactNode } from "react";

type DemoFormProps = {
  children: ReactNode;
  className: string;
  destination: string;
};

export function DemoForm({ children, className, destination }: DemoFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.assign(destination);
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
