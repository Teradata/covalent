export interface ICombinedRouteGroup {
  name: string;
  description: string;
  routeGroups: IRouteGroup[];
  rootRoute: string | RegExp;
}

export interface IRouteGroup {
  name: string;
  nested: boolean;
  description?: any;
  hasSubGroup?: boolean;
  views?: IRoute[];
  routeGroups?: IRouteGroup[];
}

export interface IRoute {
  name: string;
  route: string;
  exactMatch: boolean;
  description?: any;
}

export function createRouteGroup(groupParams: any): any {
  const routeGroup: IRouteGroup = groupParams.categories.map((category: any) => {
    return {
      ...category,
      views: groupParams.components.filter((component: any) => component.category === category.name),
    };
  });

  if (groupParams.hasOverview && routeGroup[0].name === '') {
    routeGroup[0].views.unshift({
      name: 'Overview',
      route: groupParams.rootRoute,
      exactMatch: true,
    });
  }

  return routeGroup;
}
