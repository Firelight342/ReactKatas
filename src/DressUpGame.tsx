import React from 'react';

export class DressUpGame extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <>
                <div>
                    <img src={'./Hats/hat1.png'} style={{ height: "50px" }} />
                </div>
                <div>
                    <img src={'./Hats/shirt1.png'} style={{ height: "120px" }} />
                </div>

            </>
        )
    }
}