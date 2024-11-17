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
        ipcRenderer.invoke('do-login55');
      }
    }
  });

contextBridge.exposeInMainWorld('electron_window2', 
  {
    api22: 
    {
      doLogin2: (username: string, password: string, host: string): void =>
      {
        ipcRenderer.invoke('do-login222x', username, password, host);
      }
    }
  }
);