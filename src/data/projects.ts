import { Project, ProjectType } from "@/types/project";
import { completedProjects } from "./projects/completedProjects";
import { industrialManufacturingProjects } from "./projects/industrialManufacturing";
import { evSmartMobilityProjects } from "./projects/evSmartMobility";
import { computerVisionEdgeAiProjects } from "./projects/computerVisionEdgeAi";
import { agriTechProjects } from "./projects/agriTech";
import { healthcareAssistiveProjects } from "./projects/healthcareAssistive";
import { logisticsRetailProjects } from "./projects/logisticsRetail";
import { infrastructureMaintenanceProjects } from "./projects/infrastructureMaintenance";
import { securityEmergencyProjects } from "./projects/securityEmergency";
import { commercialAutomationProjects } from "./projects/commercialAutomation";
import { advancedKinematicsProjects } from "./projects/advancedKinematics";

export type { Project, ProjectType };

/**
 * Complete central registry of Tamizh Tech projects:
 * - 2 Verified Completed Projects (Tamizh Tech in-house builds)
 * - 105 Project Topics across 10 engineering domains (Exploration & concepts)
 * Total: 107 records
 */
export const projects: Project[] = [
  ...completedProjects,
  ...industrialManufacturingProjects,
  ...evSmartMobilityProjects,
  ...computerVisionEdgeAiProjects,
  ...agriTechProjects,
  ...healthcareAssistiveProjects,
  ...logisticsRetailProjects,
  ...infrastructureMaintenanceProjects,
  ...securityEmergencyProjects,
  ...commercialAutomationProjects,
  ...advancedKinematicsProjects,
];

export function getProjectBySlug(slug: string): Project | undefined {
  if (!slug || typeof slug !== "string") return undefined;
  const exact = projects.find((p) => p.slug === slug);
  if (exact) return exact;
  const normalized = slug.replace(/[.-]/g, "").toLowerCase();
  return projects.find((p) => p.slug.replace(/[.-]/g, "").toLowerCase() === normalized || p.id === slug);
}

export function getProjectByCategoryAndSlug(categorySlug: string, slug: string): Project | undefined {
  if (!categorySlug || !slug) return undefined;
  const project = getProjectBySlug(slug);
  if (!project || project.categorySlug !== categorySlug || !project.published) {
    return undefined;
  }
  return project;
}

export function getProjectsByCategorySlug(categorySlug: string): Project[] {
  return projects.filter((p) => p.categorySlug === categorySlug && p.published);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((p) => p.projectType === type && p.published);
}

export function getAllProjectTopics(): Project[] {
  return projects.filter((p) => p.projectType === "topic" && p.published);
}

export function getCompletedProjects(): Project[] {
  return projects.filter((p) => p.projectType === "completed" && p.published);
}
