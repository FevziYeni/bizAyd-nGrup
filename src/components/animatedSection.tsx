import React, { PropsWithChildren } from "react";

interface AnimatedSectionProps extends PropsWithChildren {
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
}) => <div className={`deferred-section ${className}`}>{children}</div>;

export default AnimatedSection;
