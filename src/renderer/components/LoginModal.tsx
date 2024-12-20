import React, { useState } from 'react';
import '@styles/App.css';  
import '@styles/LoginModal.css';
import { WebSocketService } from '@components/WebSocketService';
// import { ipcRenderer } from 'electron';
// import { helloWorldContext } from '@components/HelloWorld';  

const parseHostAndPort = (input: string) => 
{
    const [host, port] = input.split(':');
    return { host, port };
};

interface LoginModalProps 
{
    onLogin: (websocket: WebSocketService) => void;
    showModal: boolean;
}

// a validate user function that returns true or false
const validateUser = async (username: string, password: string, websocket: WebSocketService) => 
{
    // craft a json object with the username and password, and "action" set to "login"
    const credentials = JSON.stringify({ username, password, action: 'login' });
    websocket.sendMessage(credentials);
    const response = await websocket.receiveMessage();
    const parsedResponse = JSON.parse(response);
    return parsedResponse.status === "success" ? true : false;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin, showModal }) => 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [host, setHost] = useState('localhost:8000');
    const [status, setStatus] = useState(''); 
    var windowAPI = (window as any).electron_window2;

    if (!showModal) 
    {
        return null; // Don't render the modal if showModal is false
    }

    const handleLogin = async () => 
    {
        const result = parseHostAndPort(host);
        await windowAPI.api22.doLogin2(username, password, result.host, result.port);

        // console.log('username:', username);
        // console.log('password:', password);
        // console.log('host:', host);
        

        // if (!result.host.includes('.') && result.host !== 'localhost') 
        // {
        //     setStatus('Invalid host');
        //     return;
        // }

        // try
        // {
        //     const websocket = new WebSocketService(`ws://${result.host}:${result.port}/ws`);
        //     await websocket.connect();

        //     if (await validateUser(username, password, websocket) === false)
        //     {
        //         setStatus('Invalid username or password');
        //         return;
        //     }

        //     onLogin(websocket);
        // }
        // catch (error)
        // {
        //     if (error instanceof Error) 
        //     {
        //         // If there is an error, update the status to show the error message
        //         setStatus('Failed to connect to WebSocket: ' + error.message);
        //     } 
        //     else 
        //     {
        //         setStatus('An unknown error occurred');
        //     }
        // }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Login</h2>
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>
                <div className="input-group">
                    <label>Host</label>
                    <input
                        type="text"
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        placeholder="Enter host"
                    />
                </div>
                <button onClick={handleLogin} className="login-button">Login</button>
                {status && <div className="status-row">{status}</div>}
            </div>
        </div>
    );
};

export default LoginModal;
