import React from "react";
import backgroudImg from "../../images/post-background6.jpg";
import View from "../view/View";
export default function PostView() {
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${backgroudImg})` }}>
                <div className="max-width">
                    <div className="banner-contents">
                        <p className="today">
                            May <em>25</em> Wednesday
                        </p>
                    </div>
                </div>
            </div>
            <View />
        </>
    );
}
