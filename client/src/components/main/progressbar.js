import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const percentage = (rawValue) => parseInt((rawValue * 100 / 9),10);

const status = (rawValue) => {
    if (rawValue < 5) {
        return 'error'
    } else if (rawValue > 5 && rawValue <= 7) {
        return 'active'
    } else if (rawValue > 7 && rawValue <= 9) {
        return 'success'
    }
}

const ProgressBar = (props) => {
    return (
        <Progress
            percent={percentage(props.rawValue)}
            status={status(props.rawValue)}
            theme={
                {
                    error: {trailColor: '#ccc', color: '#FF5C5C'},
                    active: {trailColor: '#ccc', color: '#F5B31F'},
                    success: {trailColor: '#ccc', color: '#62DDA9'}
                }
            }
        />
    )
}

export default ProgressBar