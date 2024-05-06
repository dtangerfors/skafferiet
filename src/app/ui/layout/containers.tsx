import clsx from "clsx";

export function Section({children, className, ...props}: {children?: React.ReactNode, className?: string}) {
  return (
    <section {...props} className={clsx("py-12 px-6", className)}>
      {children}
    </section>
  )
}

export function InnerSection({children, className}: {children?: React.ReactNode, className?: string}) {
  return (
    <div className={clsx("w-full max-w-screen-lg mx-auto", className)}>
      {children}
    </div>
  )
}