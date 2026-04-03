import type { RouteConfig } from "@/types/journey";
import type { TravelOption } from "./travelComparison";

function unique(items: string[]): string[] {
  return [...new Set(items)].slice(0, 3);
}

function getHeavyCrowdWindow(config: RouteConfig) {
  return config.crowdWindows.find((window) => window.severity === "heavy");
}

function hasDirectTransit(config: RouteConfig): boolean {
  return config.transport.some((mode) => {
    const hasTransitType =
      mode.type === "metro" ||
      mode.type === "train" ||
      mode.type === "tram" ||
      mode.type === "ferry";
    const isDirectNamed = /direct/i.test(mode.name);
    return hasTransitType || isDirectNamed;
  });
}

export function getTransitPros(
  config: RouteConfig,
  transit: TravelOption,
  drive: TravelOption
): string[] {
  const pros: string[] = ["No parking stress"];

  if (transit.available && drive.available && transit.durationRaceDayMin < drive.durationRaceDayMin) {
    pros.push(`~${drive.durationRaceDayMin - transit.durationRaceDayMin} min faster on race day`);
  }

  if (config.signalRisk) {
    pros.push("Download ticket before you lose signal");
  }

  if (config.crowdWindows.length > 0) {
    pros.push("Avoids race day road closures");
  }

  if (config.isIslandCircuit) {
    pros.push("Only practical option to the island");
  }

  return unique(pros);
}

export function getTransitCons(
  config: RouteConfig,
  transit: TravelOption
): string[] {
  const cons: string[] = [];
  const heavyWindow = getHeavyCrowdWindow(config);

  if (heavyWindow) {
    cons.push(`Long queues after the race (${heavyWindow.endTime} to clear)`);
  }

  if (config.signalRisk) {
    cons.push("Poor signal, screenshot your ticket");
  }

  cons.push("Less flexibility on timing");

  if (transit.available && !hasDirectTransit(config)) {
    cons.push("Requires a transfer");
  }

  if (!transit.available && transit.unavailableReason) {
    cons.unshift(transit.unavailableReason);
  }

  return unique(cons);
}

export function getDrivePros(
  config: RouteConfig,
  drive: TravelOption,
  transit: TravelOption
): string[] {
  const pros: string[] = ["Door to door convenience", "Full flexibility on timing"];

  if (drive.available && transit.available && drive.durationRaceDayMin < transit.durationRaceDayMin) {
    pros.push("Faster than transit today");
  }

  if (!config.isIslandCircuit) {
    pros.push("Can leave exactly when you want");
  }

  return unique(pros);
}

export function getMixedPros(config: RouteConfig): string[] {
  const pros: string[] = [
    "Drive only part way — avoid circuit parking chaos",
    "Faster than full transit from remote hotels",
  ];

  if (config.crowdWindows.length > 0) {
    pros.push("Park early, beat race-day road closures");
  } else {
    pros.push("Best of both: flexibility + no gate traffic");
  }

  return unique(pros);
}

export function getMixedCons(config: RouteConfig): string[] {
  const cons: string[] = [
    "Need to find and pay for park-and-ride",
    "Still face shuttle/transit queues post-race",
  ];

  if (config.signalRisk) {
    cons.push("Poor signal — screenshot shuttle times before you go");
  } else {
    cons.push("Less spontaneous than driving door-to-door");
  }

  return unique(cons);
}

export function getDriveCons(config: RouteConfig, drive: TravelOption): string[] {
  const delta = Math.max(0, Math.round(drive.durationRaceDayMin - drive.durationMin));
  const cons: string[] = [
    `Race day traffic, add ${delta} min vs normal`,
    "Parking expensive near circuit",
  ];

  if (config.isIslandCircuit) {
    cons.push("NO PARKING on island, drive to park-and-ride only");
  }

  if (drive.durationRaceDayMin > 45) {
    cons.push("Post-race exit can take 2-3 hours");
  }

  if (!drive.available && drive.unavailableReason) {
    cons.unshift(drive.unavailableReason);
  }

  return unique(cons);
}
