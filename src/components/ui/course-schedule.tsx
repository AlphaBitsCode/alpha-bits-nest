
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { format } from "date-fns";

const courseSchedule = [
  {
    date: new Date(2025, 4, 6), // May 6, 2025
    time: "19:30 - 21:00",
    topic: "Install Node-RED, setup MQTT",
    description: "Getting started with the fundamentals"
  },
  {
    date: new Date(2025, 4, 8),
    time: "19:30 - 21:00",
    topic: "Create Dashboards",
    description: "Build interactive UIs with buttons, charts, and layouts"
  },
  {
    date: new Date(2025, 4, 13),
    time: "19:30 - 21:00",
    topic: "HTTP API Endpoints",
    description: "Handle global variables and API integrations"
  },
  {
    date: new Date(2025, 4, 15),
    time: "19:30 - 21:00",
    topic: "Sensor Data Integration",
    description: "Connect USB, MQTT, GPIO, and simulated sensors"
  },
  {
    date: new Date(2025, 4, 20),
    time: "19:30 - 21:00",
    topic: "Data Processing",
    description: "Data cleaning, moving averages, PID filtering"
  },
  {
    date: new Date(2025, 4, 22),
    time: "19:30 - 21:00",
    topic: "Data Storage & Notifications",
    description: "SQLite, InfluxDB, BigQuery, Telegram alerts"
  },
  {
    date: new Date(2025, 4, 27),
    time: "19:30 - 21:00",
    topic: "Final Project Demo",
    description: "Students present their mini-projects"
  }
];

export function CourseSchedule() {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time (GMT+7)</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courseSchedule.map((session) => (
            <TableRow key={session.topic}>
              <TableCell>{format(session.date, 'MMM d, yyyy')}</TableCell>
              <TableCell>{session.time}</TableCell>
              <TableCell className="font-medium">{session.topic}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">{session.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
