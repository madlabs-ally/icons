import * as React from "react";
import type { SVGProps } from "react";
import { Ref } from "react";

type IconVariant = "outline" | "filled";

export interface HomeProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  size?: number | string;
  strokeWidth?: number;
  color?: string;
  variant?: IconVariant;
}

const variants: Partial<Record<IconVariant, string>> = {
  outline: `<path stroke="currentColor" d="M11.142 5.208a1.5 1.5 0 0 1 1.716 0l6 4.185c.402.28.642.74.642 1.23V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-7.377c0-.49.24-.95.642-1.23z"/><path fill="currentColor" d="M9.5 17a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z"/>`,
  filled: `<path fill="currentColor" stroke="currentColor" stroke-width="2" d="M11.428 5.618a1 1 0 0 1 1.144 0l6 4.185a1 1 0 0 1 .428.82V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.377a1 1 0 0 1 .428-.82z"/><path fill="#fff" d="M9.5 17a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z"/>`
} as const;

export const Home = React.memo(
  React.forwardRef(
    (
      {
        size = 24,
        strokeWidth = 2,
        color = "currentColor",
        variant = "outline",
        className = "",
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      }: HomeProps,
      ref: Ref<SVGSVGElement>
    ) => {
      const svgContent = (variants[variant] ?? variants.outline ?? variants.filled) ?? "";
      const finalSvgContent = svgContent.replace(/stroke-width=(["']).*?\1/g, `stroke-width="${strokeWidth}"`);
      const finalAriaLabel = ariaLabel ?? (ariaHidden ? undefined : "Home");
      const finalClassName = ["melospot-icon", "melospot-icon-home", className].filter(Boolean).join(" ");

      return (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          color={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="geometricPrecision"
          className={finalClassName}
          aria-label={finalAriaLabel}
          aria-hidden={ariaHidden}
          role={ariaHidden ? "presentation" : "img"}
          {...props}
          dangerouslySetInnerHTML={{ __html: finalSvgContent }}
        />
      );
    }
  )
);

Home.displayName = "Home";
