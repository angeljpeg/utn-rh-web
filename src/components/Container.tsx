import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  title: string;
}

export default function Container({ children, title }: ContainerProps) {
  return (
    <section className="bg-white w-full h-screen overflow-y-auto flex flex-col text-center">
      {title && (
        <div className="w-full h-fit border-b border-green-100 text-start py-6 pl-6 font-light text-5xl text-green-900 shadow-sm">
          <h1>{title}</h1>
        </div>
      )}

      <div className="flex-1 flex flex-col gap-4">{children}</div>
    </section>
  );
}
