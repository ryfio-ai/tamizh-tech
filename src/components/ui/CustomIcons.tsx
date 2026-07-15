"use client";

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// ── SERVICES ICONS (Bold Outlined SVGrepo Style) ──────────────────────────

// 1. Robotics - Clean outlined industrial robotic arm with pivot joints
export function RoboticsIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Base platform */}
      <path d="M2 20h20" stroke="#FB7115" />
      <path d="M5 20v-2h14v2" />
      
      {/* Main joint */}
      <circle cx="12" cy="15" r="2" fill="currentColor" />
      
      {/* Arm segments */}
      <path d="M12 15L8 9" stroke="#FB7115" />
      <circle cx="8" cy="9" r="2" fill="currentColor" />
      <path d="M8 9l8-4" />
      
      {/* Tool head / gripper */}
      <path d="M16 5h3M17 3v4" stroke="#FB7115" />
    </svg>
  );
}

// 2. AI - Simple bold smiling robot head (from SVGrepo search)
export function AIIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Antenna */}
      <path d="M12 6V3" stroke="#FB7115" />
      <circle cx="12" cy="3" r="1.5" fill="#FB7115" />
      
      {/* Main Head structure */}
      <rect x="4" y="6" width="16" height="13" rx="3" />
      
      {/* Ears */}
      <path d="M4 11H2M20 11h2" stroke="#FB7115" />
      
      {/* Eyes */}
      <circle cx="9" cy="11" r="1.5" fill="currentColor" />
      <circle cx="15" cy="11" r="1.5" fill="currentColor" />
      
      {/* Mouth */}
      <path d="M9 15h6" stroke="#FB7115" />
    </svg>
  );
}

// 3. Drone - Minimalist quadcopter outline
export function DroneIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central unit */}
      <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
      
      {/* Crossed frame bars */}
      <path d="M6 6l12 12M18 6L6 18" stroke="#FB7115" />
      
      {/* Rotors */}
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
      <circle cx="19" cy="5" r="1.5" fill="currentColor" />
      <circle cx="5" cy="19" r="1.5" fill="currentColor" />
      <circle cx="19" cy="19" r="1.5" fill="currentColor" />
      
      {/* Propellers */}
      <path d="M3 5h4M17 5h4M3 19h4M17 19h4" />
    </svg>
  );
}

// 4. IoT - Smart centralized network node
export function IoTIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central Hub */}
      <circle cx="12" cy="12" r="3" fill="#FB7115" stroke="#FB7115" />
      
      {/* Connecting paths */}
      <path d="M12 5v4M12 15v4M5 12h4M15 12h4" />
      
      {/* Peripheral nodes */}
      <circle cx="12" cy="3" r="1.5" fill="currentColor" />
      <circle cx="12" cy="21" r="1.5" fill="currentColor" />
      <circle cx="3" cy="12" r="1.5" fill="currentColor" />
      <circle cx="21" cy="12" r="1.5" fill="currentColor" />
      
      {/* Diagonal linkages */}
      <path d="M6 6l3 3M18 18l-3-3" stroke="#FB7115" />
    </svg>
  );
}

// 5. Embedded Systems - Bold microchip outline
export function EmbeddedIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Microchip main body */}
      <rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" fillOpacity="0.1" />
      
      {/* Silicon core accent */}
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="#FB7115" fill="#FB7115" />
      
      {/* MCU Pin connectors */}
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3" stroke="#FB7115" />
      <path d="M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

// 6. Industrial Automation - conveyor loop with cogs
export function AutomationIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Conveyor track */}
      <rect x="3" y="14" width="18" height="6" rx="3" />
      
      {/* Rollers inside track */}
      <circle cx="7" cy="17" r="1.5" fill="currentColor" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />
      <circle cx="17" cy="17" r="1.5" fill="currentColor" />
      
      {/* Gear symbol / Cog wheel */}
      <circle cx="12" cy="7" r="3" stroke="#FB7115" fill="currentColor" />
      <path d="M12 3v1M12 10v1M8 7H7M16 7h1" stroke="#FB7115" />
    </svg>
  );
}

// ── INDUSTRIES ICONS (Bold Outlined SVGrepo Style) ────────────────────────

// 7. Manufacturing - Classic sawtooth factory building
export function MfgIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Factory profile */}
      <path d="M3 20V9l6 4V9l6 4V7l6 4v9H3z" fill="currentColor" fillOpacity="0.1" />
      
      {/* Chimney smoke */}
      <path d="M18 7V4" stroke="#FB7115" />
      <path d="M18 2h1" stroke="#FB7115" />
      
      {/* Floor line */}
      <path d="M2 20h20" stroke="#FB7115" />
    </svg>
  );
}

// 8. Education - Graduation cap outline
export function EduIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Cap diamond */}
      <path d="M12 4L3 9l9 5 9-5-9-5z" stroke="#FB7115" fill="currentColor" fillOpacity="0.1" />
      
      {/* Skull cap box */}
      <path d="M7 11.5V16c0 2 3 3 5 3s5-1 5-3v-4.5" />
      
      {/* Tassel line */}
      <path d="M17 10v4" stroke="#FB7115" />
      <circle cx="17" cy="15" r="1" fill="#FB7115" />
    </svg>
  );
}

// 9. Defense - Outlined shield with central tick/accent
export function DefIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Shield container */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.1" />
      
      {/* Inner check / protection core */}
      <path d="M9 11l2 2 4-4" stroke="#FB7115" />
    </svg>
  );
}

// 10. Smart Cities - Silhouettes of city buildings with radio wave
export function CityIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Floor line */}
      <path d="M2 20h20" stroke="#FB7115" />
      
      {/* Building 1 */}
      <rect x="4" y="10" width="6" height="10" />
      
      {/* Building 2 */}
      <rect x="12" y="6" width="8" height="14" fill="currentColor" fillOpacity="0.15" />
      
      {/* Smart Signal wave above */}
      <path d="M13 3a5 5 0 0 1 6 0" stroke="#FB7115" />
    </svg>
  );
}

// 11. Research Labs - Science beaker flask
export function LabIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Beaker outline */}
      <path d="M9 3h6M10 3v5l-6 9c-1 1.5 0 3 2 3h12c2 0 3-1.5 2-3l-6-9V3" fill="currentColor" fillOpacity="0.1" />
      
      {/* Fluid level */}
      <path d="M6 16h12" stroke="#FB7115" />
    </svg>
  );
}

// 12. Healthcare - Medical cross outline
export function HealthIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Medical Cross shape */}
      <path d="M10 3h4v6h6v4h-6v6h-4v-6H4v-4h6V3z" fill="currentColor" fillOpacity="0.1" />
      
      {/* Heartbeat pulse overlay */}
      <path d="M6 11h3l2-3 2 5 2-3h3" stroke="#FB7115" />
    </svg>
  );
}

// 13. Agriculture - Leaf sprout
export function AgriIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Stem */}
      <path d="M12 20V8" stroke="#FB7115" />
      
      {/* Left leaf */}
      <path d="M12 12c-4 0-6-3-6-6 3 0 6 2 6 6z" />
      
      {/* Right leaf */}
      <path d="M12 10c4 0 6-3 6-6-3 0-6 2-6 6z" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

// 14. Automotive - Wheel with tire spokes
export function AutoIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer tire */}
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.1" />
      
      {/* Inner rim */}
      <circle cx="12" cy="12" r="4" stroke="#FB7115" />
      
      {/* Axle Spokes */}
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
    </svg>
  );
}

// ── VALUES & UTILITY ICONS ──────────────────────────────────────────────────

// 15. Target - Bold target board outline (Vision)
export function TargetIcon({ className, size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" stroke="#FB7115" />
      <circle cx="12" cy="12" r="1.5" fill="#FB7115" />
    </svg>
  );
}

// 16. Heart - Bold heart outline (Mission)
export function HeartIcon({ className, size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" fillOpacity="0.1" stroke="#FB7115" />
    </svg>
  );
}

// 17. Award - Bold trophy/badge outline (Excellence)
export function AwardIcon({ className, size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" stroke="#FB7115" fill="currentColor" fillOpacity="0.1" />
      <path d="M15.47 14L19 21l-7-2-7 2 3.53-7" />
    </svg>
  );
}

// 18. Users - Bold community group outline (Community)
export function UsersIcon({ className, size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Front user */}
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity="0.1" />
      
      {/* Back user */}
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="#FB7115" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#FB7115" />
    </svg>
  );
}
