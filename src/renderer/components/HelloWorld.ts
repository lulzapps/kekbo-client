// THIS IS IN THE FGHOSHSDARN REDNDERR!~!!!

import { ipcRenderer } from 'electron';

// export function helloWorld()
// {
//     console.log("!!!!!! HELLO WORLD!!!!!!!!!!");
//     // ipcRenderer.send('do-login');
// }

const helloWorldContext = 
{
    helloWorld()
    {
        console.log("!!!!!! HELLO WORLD!!!!!!!!!! YOU BITCHES!!!!!!!");
        // ipcRenderer.invoke('do-login');
    }
};

export type HelloWorldApi = typeof helloWorldContext;

export default helloWorldContext;