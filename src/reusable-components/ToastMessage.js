import React, { useState, useEffect } from 'react';

const Toast = ({ message, duration, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return visible && <div className="toast">{message}</div>;
};

export default Toast;
