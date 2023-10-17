import { ReactOnClickRouterMetaData } from '../../Components/ReactOnClick/router-data';
import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { useEffectsRouterMetaData } from './UseEffects/router-data';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { MaterialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';
import { reactUseRefMetaData } from './ReactUseRef/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  MaterialUIBasicElementsRouterMetaData,
  useEffectsRouterMetaData,
  reactUseRefMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
