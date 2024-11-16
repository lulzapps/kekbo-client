import { contextBridge, ipcRenderer  } from 'electron';
import titlebarContext from './titlebarContext';
import helloWorldContext from '@components/HelloWorld';

console.log("I AM AM PRELOAD SCRIPT AND I AM PROUD!!!!!");

contextBridge.exposeInMainWorld('electron_window', 
  {
    titlebar: titlebarContext,
    api2: 
    {
      doLogin2: (): void =>
      {
        ipcRenderer.invoke('do-login');
      }
    }
  });

// contextBridge.exposeInMainWorld('api', {
//   getUserData: async (): Promise<any> => {
//     return ipcRenderer.invoke('getUserData');
//   },
// });