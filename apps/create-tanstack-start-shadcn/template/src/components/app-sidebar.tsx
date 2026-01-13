import { Link } from '@tanstack/react-router'
import {
  Home,
  FileText,
  Users,
  Layers,
  Clock,
  AlertCircle,
  Database,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

const navItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Posts',
    url: '/posts',
    icon: FileText,
  },
  {
    title: 'Users',
    url: '/users',
    icon: Users,
  },
  {
    title: 'Pathless Layout',
    url: '/route-a',
    icon: Layers,
  },
  {
    title: 'Deferred',
    url: '/deferred',
    icon: Clock,
  },
  {
    title: 'React Query',
    url: '/react-query',
    icon: Database,
  },
  {
    title: 'Not Found Demo',
    url: '/this-route-does-not-exist',
    icon: AlertCircle,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="h-14 flex items-center border-b border-sidebar-border px-4">
        <span className="text-lg font-semibold">TanStack Start</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url as any}
                      activeProps={{
                        className: 'bg-sidebar-accent text-sidebar-accent-foreground',
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
