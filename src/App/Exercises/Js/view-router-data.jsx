import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMetaData } from './Boolean/router-data';
import { jsNumbersRouterMetaData } from './JsNumbers/router-data';
import { mathExerciseRouterMetaData } from './Math/router-data';
import { jsNumberTrainingRouterMetaData } from './JsNumberTraining/router-data';
import { jsStringCodingRouterMetaData } from './JsStringCoding/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMetaData,
  jsNumbersRouterMetaData,
  mathExerciseRouterMetaData,
  jsNumberTrainingRouterMetaData,
  jsStringCodingRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
