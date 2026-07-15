import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamizh Robotics Club (TRC) | Join the Engineering Network",
  description: "Join Coimbatore's premier community of young innovators, school students, and college engineers. Hands-on mentorship and resources.",
};

export default function RoboticsClubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
