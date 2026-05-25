export function runPipeline(input) {
  return {
    input,
    intent: {
      app_type: "crm",
      features: ["login", "payments"],
      entities: ["payment"],
      roles: []
    },
    schema: {
      systemDesign: {
        modules: ["auth", "dashboard", "payments"]
      },
      ui: {
        pages: ["login", "dashboard"]
      },
      db: {
        tables: ["users", "payments"]
      },
      api: {
        endpoints: ["/login", "/payments"]
      },
      auth: {
        roles: ["user"]
      }
    }
  };
}