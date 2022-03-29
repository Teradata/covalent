export interface IComponentDetails {
  name: string;
  id?: string;
  description?: string;
  apiDocUrl?: string;
  overviewDocUrl?: string;
  icon?: string;
  category?: string;
  route?: string;
  showOverview?: boolean;
  showAPI?: boolean;
  showExamples?: boolean;
  showMigration?: boolean;
  migrationUrl?: string;
  demo?: any;
  migration?: any;
}
