"use client";

import { trackOutboundClick } from "@/lib/analytics";

type OutboundLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function OutboundLink({ href, label, children, className }: OutboundLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackOutboundClick(label, href)}
    >
      {children}
    </a>
  );
}
