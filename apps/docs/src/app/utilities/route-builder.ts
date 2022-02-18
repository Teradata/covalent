import { DetailsWrapperComponent } from '../components/shared/component-details/component-details-wrapper/content-details.component';
import { ComponentHeroComponent } from '../components/shared/component-details/component-hero/component-hero.component';
import { TdReadmeLoaderComponent } from '../documentation-tools/readme-loader/readme-loader.component';
import { Route } from '@angular/router';

interface IRouteBuilderIdentifier {
  overviewDemoComponent: any;
  id: string;
}

export type IRouteBuilder = (detailsArray: any) => IScopedRouteBuilder;

export type IScopedRouteBuilder = (
  identifier: IRouteBuilderIdentifier
) => Route[];

export const routeBuilder: IRouteBuilder = (detailsArray: any) => {
  return function (identifier: IRouteBuilderIdentifier): Route[] {
    const componentMatch: any = detailsArray.find(
      (component: any) => component.id === identifier.id
    );

    return [
      {
        path: '',
        component: DetailsWrapperComponent,
        data: componentMatch,
        children: [
          {
            path: '',
            redirectTo: componentMatch.showOverview ? 'overview' : 'api',
          },
          {
            path: 'overview',
            component: ComponentHeroComponent,
            data: { resourceUrl: componentMatch.overviewDocUrl },
            children: [
              { path: '', component: identifier.overviewDemoComponent },
            ],
          },
          {
            path: 'api',
            component: TdReadmeLoaderComponent,
            data: { resourceUrl: componentMatch.apiDocUrl },
          },
          {
            path: 'examples',
            loadChildren: componentMatch.demo,
          },
          {
            path: 'migration',
            loadChildren: componentMatch.migration,
          },
        ],
      },
    ];
  };
};

export function docsRouteBuilder(array: string[]): object[] {
  return array.map((route: any) => {
    return {
      path: route.route,
      component: TdReadmeLoaderComponent,
      data: { resourceUrl: route.docUrl },
    };
  });
}
