"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumbs = ({
  homeElement,
  separator,
  capitalizeLinks = true,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  if (pathNames.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-center`}>
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-blue-500">{homeElement}</Link>
        </li>
        {pathNames.length > 0 && <span className="mx-2">{separator}</span>}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemLink = capitalizeLinks
            ? link.charAt(0).toUpperCase() + link.slice(1)
            : link;
          return (
            <React.Fragment key={index}>
              <li>
                <Link href={href} className="text-red-700">{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && (
                <span className="mx-2">{separator}</span>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
