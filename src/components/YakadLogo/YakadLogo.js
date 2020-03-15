import React from 'react';
import classes from './YakadLogo.css';

const yakadLogo = (props) => {
    return(
        <div style={{height: props.size, width: props.size}} class={classes.container}>
            <div class={classes.leftSide}>
                <div class={classes.leftSideInner}>
                    <div class={classes.rightSideFix}></div>
                </div>
            </div>
            <div class={classes.rightSide} id={classes.right}>
                <div class={classes.rightSideInner}></div>
            </div>
        </div>
    );
}

export default yakadLogo;