export function generateSchema(intent) {
  return {
    systemDesign: {
      appType: intent.app_type,
      modules: []
    },
    ui: {
      pages: []
    },
    db: {
      tables: []
    },
    api: {
      endpoints: []
    },
    auth: {
      roles: intent.roles || ["user"]
    }
  };
}