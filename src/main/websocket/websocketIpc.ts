// This file is run from the main process
import { BrowserWindow, ipcMain, shell } from 'electron';
import { WebSocketService } from '@components/WebSocketService';

export const registerWebsocketIpc = () => 
{
    // do login with username, password, and host
    ipcMain.handle('do-login222x', async (event, username: string, password: string, host: string, port: string) => 
    {
        console.log("IPC do-login called with: ", username, password, host, port);
        const websocket = new WebSocketService(`ws://${host}:${port}/ws`);
        await websocket.connect();
        console.log("WebSocketService created!!!!!!");
        const credentials = JSON.stringify({ username, password, action: 'login' });
        websocket.sendMessage(credentials);
        const response = await websocket.receiveMessage();
        const parsedResponse = JSON.parse(response);
        console.log("Parsed response: ", parsedResponse);
        return parsedResponse.status === "success" ? true : false;
    });
}
