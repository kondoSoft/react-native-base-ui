import { Platform } from 'react-native';

import {Input as iosInput } from './ios';
import {Input as androidInput } from './android';


var Input = androidInput

if (Platform.OS == 'ios'){
  Input = iosInput
}

export {Input}
