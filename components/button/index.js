import { Platform } from 'react-native';

import {Button as iosButton } from './ios';
import {Button as androidButton } from './android';


var Button = androidButton

if (Platform.OS == 'ios'){
  Button = iosButton
}

export {Button}
