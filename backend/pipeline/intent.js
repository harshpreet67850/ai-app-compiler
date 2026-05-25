export function extractIntent(input) {
  const text = input.toLowerCase();

  const intent = {
    app_type: "unknown",
    features: [],
    entities: [],
    roles: []
  };

  // -------------------
  // 1. APP TYPE DETECTION
  // -------------------
  if (text.includes("crm")) intent.app_type = "crm";
  else if (text.includes("ecommerce") || text.includes("shop")) intent.app_type = "ecommerce";
  else if (text.includes("chat")) intent.app_type = "chat_app";
  else if (text.includes("blog")) intent.app_type = "blog_app";
  else if (text.includes("dashboard")) intent.app_type = "dashboard_app";

  // -------------------
  // 2. FEATURES DETECTION
  // -------------------
  const featureMap = [
    "login",
    "signup",
    "dashboard",
    "payments",
    "analytics",
    "profile",
    "search",
    "notifications",
    "chat"
  ];

  featureMap.forEach(feature => {
    if (text.includes(feature)) {
      intent.features.push(feature);
    }
  });

  // -------------------
  // 3. ROLES DETECTION
  // -------------------
  if (text.includes("admin")) intent.roles.push("admin");
  if (text.includes("user")) intent.roles.push("user");
  if (text.includes("manager")) intent.roles.push("manager");

  // -------------------
  // 4. ENTITIES DETECTION
  // (business objects)
  // -------------------
  const entityMap = [
    "user",
    "order",
    "product",
    "payment",
    "contact",
    "report"
  ];

  entityMap.forEach(entity => {
    if (text.includes(entity)) {
      intent.entities.push(entity);
    }
  });

  return intent;
}