import { contextBridge, ipcRenderer  } from 'electron';
import titlebarContext from './titlebarContext';
import helloWorldContext from '@components/HelloWorld';

// This is called from the renderer process to register IPC

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
      doLogin2: (username: string, password: string, host: string, port: string): void =>
      {
        console.log("THIS IS BEING CALLED FROM THE RENDER PROCESS");
        ipcRenderer.invoke('do-login222x', username, password, host, port);
      }
    }
  }
);