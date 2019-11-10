import { componentDetails } from '../content/components/components';
import { DetailsWrapperComponent } from 'app/components/shared/component-details/component-details-wrapper/content-details.component';
import { ComponentHeroComponent } from 'app/components/shared/component-details/component-hero/component-hero.component';
import { TdReadmeLoaderComponent } from 'app/documentation-tools/readme-loader/readme-loader.component';
import { Route, Routes } from '@angular/router';

interface IRouteBuilderIdentifier {
  overviewDemoComponent: any;
  id: string;
}

interface IRouteBuilder {
  (detailsArray: any): IScopedRouteBuilder;
}

export interface IScopedRouteBuilder {
  (identifier: IRouteBuilderIdentifier): Route[];
}

export const routeBuilder: IRouteBuilder = (detailsArray: any) => {
  return function(identifier: IRouteBuilderIdentifier): Route[] {
    const componentMatch: any = detailsArray.find((component) => component.id === identifier.id);

    return [
      {
        path: '',
        component: DetailsWrapperComponent,
        data: componentMatch,
        children: [
          { path: '', redirectTo: 'overview' },
          {
            path: 'overview',
            component: ComponentHeroComponent,
            data: { resourceUrl: componentMatch.overviewDocUrl },
            children: [{ path: '', component: identifier.overviewDemoComponent }],
          },
          {
            path: 'api',
            component: TdReadmeLoaderComponent,
            data: { resourceUrl: componentMatch.apiDocUrl },
          },
          {
            path: 'examples',
            loadChildren: componentMatch.demo
          },
        ],
      },
    ];
  };
};

export function docsRouteBuilder(array) {
  const docsChildrenRoutes = array.map((route) => {
    return {
      path: route.route,
      component: TdReadmeLoaderComponent,
      data: { resourceUrl: route.docUrl },
    };
  });

  return docsChildrenRoutes;
}
