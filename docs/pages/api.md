# Api

## utils
This module mainly provides a tool method for the plugin

|      function       | params | return  |                      describe                      |
| :-----------------: | :----: | :-----: | :------------------------------------------------: |
| isEmbeddedInIFrame  |  none  | boolean |        Whether the plugin runs in an iframe        |
| isEmbeddedInAndroid |  none  | boolean | Whether the plugin runs in the Android environment |
|   isEmbeddedInIos   |  none  | boolean |   Whether the plugin runs in the ios environment   |
|      isBrowser      |  none  | boolean |   Whether the plugin runs in the browser environment   |

## opencord
>This module mainly provides the interaction between opencord and plugins
### Api

#### getcode
>Get opencord login information

params:undefined


return value:
```json
{
    "address":string; // wallet address
    "code":string; // The verification code for logging in to opencord
}
```