import { ReactOnClickRouterMetaData } from '../../Components/ReactOnClick/router-data';
import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { MaterialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  MaterialUIBasicElementsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
