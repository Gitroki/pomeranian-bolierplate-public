import { ReactOnClickRouterMetaData } from '../../Components/ReactOnClick/router-data';
import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
