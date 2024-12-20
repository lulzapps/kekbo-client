import React from 'react';
import '@styles/SidePanel.css'; // Import the styles for the panel

const SidePanel: React.FC = () => 
{
    return (
        <div className="side-panel">
            <div className="icon-container">
                {/* These can be links or buttons */}
                <div className="icon">🏠</div> {/* Example Icon (can replace with an actual icon library) */}
                <div className="icon">🎮</div> {/* Example Icon */}
                <div className="icon">💬</div> {/* Example Icon */}
            </div>
            <div className="icon settings-icon">⚙️</div>  {/* Settings Icon */}
        </div>
    );
};

export default SidePanel;
