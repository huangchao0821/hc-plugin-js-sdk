# Api

## navigation

- [utils](#utils)
  - [isIos](#isios)
  - [isAndroid](#isandroid)
  - [isWeb](#isweb)
  - [isMacOs](#ismacos)
  - [isWindows](#iswindows)
  - [isInOpencord](#isinopencord)
  - [parseUrl](#parseurlurlstring)
- [event](#event)
  - [plugin-before-mount](#plugin-before-mount)
  - [plugin-mounted](#plugin-mounted)
  - [plugin-will-destory](#plugin-will-destory)
- [opencord](#opencord)
  - [openToast](#opentoasttoastparamstoastprops)
  - [getChannelInfo](#getchannelinfo)
  - [getCode](#getcode)
- [networkApi](#networkApi)
  - [login](#logincodestring)
- [types](#types)

## utils
>The utils module mainly provides some tools and methods for developers to facilitate subsequent development

- ### ***isIos()***
    - **describe:** Whether the plugin runs in Ios
    - **@return:** boolean


- ### ***isAndroid()***
    - **describe:** Whether the plugin runs in Android
    - **@return:** boolean


- ### ***isWeb()***
    - **describe:** Whether the plugin runs in Web
    - **@return:** boolean

- ### ***isMacOs()***
    - **describe:** Whether the plugin runs in MacOs
    - **@return:** boolean

- ### ***isWindows()***
    - **describe:** Whether the plugin runs in Windows
    - **@return:** boolean

- ### ***isInOpencord()***
    - **describe:** Whether the plugin runs in  opencord app 
    - **@return:** Promise<boolean\>

- ### ***parseUrl(url:string)***
    - **describe：** Parse the url of the route
    - **@return:** 
    ```json
        {
            "rootUrl":string;
            "params": {
                [string]:string
            }; 
        }
    ```

## event
>When the plug-in runs in opencord, it will be accompanied by some events, and we can run different events at a specific time

- ### ***plugin-before-mount***
    - **describe:** Before being loaded as an opencord plugin
    - **@usage:** 
    ```javascript
        plugin.on('plugin-before-mount',(event,params)=>{
        // todo
        })
    ```
- ### ***plugin-mounted***
    - **describe:** After the opencord plugin is mounted
    - **@usage:** 
    ```javascript
        plugin.on('plugin-mounted',(event,params)=>{
        // todo
        })
    ```
- ### ***plugin-will-destory***
    - **describe:** The opencord plugin will be destroyed
    - **@usage:** 
    ```javascript
        plugin.on('plugin-will-destory',(event,params)=>{
        // todo
        })
    ```



## opencord
>This module mainly provides the interaction between opencord and plugins

- ### ***openToast(toastParams:ToastProps)***
    - **describe:** In the opencord App pop-up toast pop-up window
    - **@usage:** 
    ```javascript
        import { opencord } from 'opencord-plugin-js-sdk'

        const { openToast } = opencord;
        openToast({
            content: 'test',
            id: 'test'
        })
    ```
- ### ***getChannelInfo()***
    - **describe:** Get the channel information where the current plugin is located
     - **@return:** Promise<ChannelInfo\>
    - **@usage:** 
    ```javascript
        import { opencord } from 'opencord-plugin-js-sdk'

        const { getChannelInfo } = opencord;
        const channelInfo = await getChannelInfo()
    ```
- ### ***getCode()***
    - **describe:** Get the basic information for opencord plugin login
    - **@return:** Promise<LoginInfo\>
    - **@usage:** 
    ```javascript
        import { opencord } from 'opencord-plugin-js-sdk'

        const { getCode } = opencord;
        const { code,address } = await getCode()
        // todo
    ```

## networkApi
>This module is mainly for data interaction with the opencord plug-in server

- ### ***Login(code?:string)***
    - **describe:** Login to opencord plugin server
    - **@return:** Promise<AfterLoginedInfo\>
    - **@usage:** 
    ```javascript
        import { networkApi } from 'opencord-plugin-js-sdk'

        const { Login } = networkApi;
        const { token } = await Login();
        // todo
    ```


## types
>Provide the ts types required by the opencord plugin

- LoginInfo
    ```javascript
        {
            code: string;
            address: string;
        }
    ```

- AfterLoginedInfo
    ```javascript
        {
            token: string;
        }
    ```

