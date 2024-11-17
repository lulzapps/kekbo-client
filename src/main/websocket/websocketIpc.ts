
import { BrowserWindow, ipcMain, shell } from 'electron';

export const registerWebsocketIpc = () => 
{
    // do login with username, password, and host
    ipcMain.handle('do-login222x', (event, username: string, password: string, host: string) => 
    {
        console.log("IPC do-login called with: ", username, password, host);
    });
}
