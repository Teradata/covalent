export interface ICombinedRouteGroup {
  name: string;
  description: string;
  routeGroups: IRouteGroup[];
  rootRoute: string;
}

export interface IRouteGroup {
  name: string;
  nested: boolean;
  views: IRoute[];
}

export interface IRoute {
  name: string;
  route: string;
  exactMatch: boolean;
  description?: any;
}

export function createRouteGroup(groupParams: any): any {
  const routeGroup: IRouteGroup = groupParams.categories.map(
    (category: any) => {
      return {
        ...category,
        views: groupParams.components.filter(
          (component: any) => component.category === category.name
        ),
      };
    }
  );

  if (groupParams.hasOverview && routeGroup.name === '') {
    routeGroup.views.unshift({
      name: 'Overview',
      route: groupParams.rootRoute,
      exactMatch: true,
    });
  }

  return routeGroup;
}
