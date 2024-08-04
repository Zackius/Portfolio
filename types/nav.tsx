import Icons from "@/components/ui/Icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  allowedRoles?: string[]
  requireAuth?: boolean

  icon?: keyof typeof Icons | any;
  label?: string;
  description?: string;
}
