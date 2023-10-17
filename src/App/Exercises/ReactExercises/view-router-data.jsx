import { ReactOnClickRouterMetaData } from '../../Components/ReactOnClick/router-data';
import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { useEffectsRouterMetaData } from './UseEffects/router-data';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { MaterialUIBasicElementsRouterMetaData } from './MaterialUIBasicElements/router-data';
import { reactUseRefMetaData } from './ReactUseRef/router-data';
import { reactUseRefExMetaData } from './ReactUseRefEx/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  MaterialUIBasicElementsRouterMetaData,
  useEffectsRouterMetaData,
  reactUseRefMetaData,
  reactUseRefExMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
