import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMetaData } from './Boolean/router-data';
import { jsNumbersRouterMetaData } from './JsNumbers/router-data';
import { mathExerciseRouterMetaData } from './Math/router-data';
import { jsNumberTrainingRouterMetaData } from './JsNumberTraining/router-data';
import { jsStringCodingRouterMetaData } from './JsStringCoding/router-data';
import { jsStringTrainingRouterMetaData } from './JsStringTraining/router-data';
import { jsStringConversionRouterMetaData } from './JsStringConversion/router-data';
import { jsArrayBasicRouterMetaData } from './JsArrayBasic/router-data';
import { jsArrayMethodsExerciseMetaData } from './JsArrayMethodsExercise/router-data';
import { jsObjectsBasicsMetaData } from './JsObjectsBasics/router-data';
import { dateAndTimeMetaData } from './DateAndTime/router-data';
import { jsFunctionBasicsRouterMetaData } from './JsFunctionBasics/router-data';
import { setTimeoutRouterMetaData } from './SetTimeout/router-data';
import { animationJsRouterMetaData } from './AnimationJs/router-data';
import { hitTheMoleGameRouterMetaData } from './HitTheMoleGame/router-data';
import { tryCatchAndFinallyRouterMetaData } from './TryCatchAndFinally/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMetaData,
  jsNumbersRouterMetaData,
  mathExerciseRouterMetaData,
  jsNumberTrainingRouterMetaData,
  jsStringCodingRouterMetaData,
  jsStringTrainingRouterMetaData,
  jsStringConversionRouterMetaData,
  jsArrayBasicRouterMetaData,
  jsArrayMethodsExerciseMetaData,
  jsObjectsBasicsMetaData,
  dateAndTimeMetaData,
  jsFunctionBasicsRouterMetaData,
  setTimeoutRouterMetaData,
  animationJsRouterMetaData,
  hitTheMoleGameRouterMetaData,
  tryCatchAndFinallyRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
