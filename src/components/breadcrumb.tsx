import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



export function BreadcrumbCollapsed() {
  return (
    <div className="max-w-screen-2xl  mx-auto hidden md:block">
    <Breadcrumb className="ml-6">
      <BreadcrumbList>
        <BreadcrumbItem className="text-gray-600">
          <BreadcrumbLink asChild>
            <Link href="/" className="text-gray-600">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-gray-600">Shop</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-gray-600">Men</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
        <BreadcrumbPage className="text-gray-600">T-Shirt</BreadcrumbPage>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  )
}
