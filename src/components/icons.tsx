import {
  Bot,
  BrainCircuit,
  CalendarCheck,
  ChartColumn,
  FileText,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Receipt,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  website: MonitorSmartphone,
  app: LayoutDashboard,
  automation: Workflow,
  agent: Bot,
  brain: BrainCircuit,
  marketing: Megaphone,
  chat: MessageSquare,
  leads: Users,
  booking: CalendarCheck,
  invoice: Receipt,
  report: ChartColumn,
  docs: FileText,
};

export function ContentIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Workflow;
  return <Icon className={className} aria-hidden="true" />;
}
