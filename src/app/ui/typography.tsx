import clsx from "clsx";

export type TextClassPrefix<T extends string> = T extends string ? `text-${T}` : T;

type TextProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const Heading1 = ({children, color}: TextProps) => (
  <h1 className={clsx("font-serif text-5xl lg:text-6xl text-balance", color ? color : "text-primary")}>{children}</h1>
)

export const Heading2 = ({children, color}: TextProps) => (
  <h2 className={clsx("font-serif text-4xl lg:text-4xl", color ? color : "text-primary")}>{children}</h2>
)

export const Heading3 = ({children, color}: TextProps) => (
  <h3 className={clsx("font-serif font-normal text-2xl lg:text-3xl pb-3 pt-6", color ? color : "text-primary")}>{children}</h3>
)

export const Paragraph = ({children, color, className}: TextProps) => (
  <p className={clsx("font-sans font-normal text-base leading-loose pb-[1em] last:pb-0", color ? color : "text-gray-800", className)}>{children}</p>
)

export const typography = {
  heading1: ({ children }: { children: string[]}) => (<Heading1>{children}</Heading1>),
  heading2: ({ children }: { children: string[]}) => (<Heading2>{children}</Heading2>),
  heading3: ({ children }: { children: string[]}) => (<Heading3>{children}</Heading3>),
  paragraph: ({ children }: { children: string[]}) => (<Paragraph>{children}</Paragraph>)
}