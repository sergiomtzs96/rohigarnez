const badgeMap = {
  "partner premium": "bg-primary text-primary-foreground",
  "partner estratégico": "bg-primary text-primary-foreground",
  "distribuidor exclusivo": "bg-accent text-accent-foreground",
  "distribuidor autorizado": "bg-accent text-accent-foreground",
  "partner certificado": "bg-secondary/80 text-secondary-foreground",
  "partner oficial": "bg-secondary/80 text-secondary-foreground",
};

export const getBadgeColor = (level = "") => {
  const normalized = level.trim().toLowerCase();
  return badgeMap[normalized] || "bg-muted text-muted-foreground";
};