import React, { useState } from 'react';
import './Home.scss';

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    const sportClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <div className="sports">
                <div className="sports__container container">
                    <div className={`card sports__section mma ${isClicked ? 'is-clicked' : ''}`} onClick={sportClick}>
                        <div className="wrapper">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=3278fc1f562863ec40e5fe3610ca368b_l-5249092-images-thumbs&n=13"
                                className="cover-image"
                            />
                        </div>

                        <img src="https://www.seekpng.com/png/full/314-3149097_511-mma-fighters-png.png" className="character" />
                    </div>
                    <div className="card bjj sports__section">
                        <div className="wrapper">
                            <img src="https://1gai.ru/uploads/posts/2023-05/1684221102_13.png" className="cover-image" />
                            <img src="https://otvet.imgsmail.ru/download/96501964_e853298955ba9a36a3d107ce590d8410_800.gif" className="cover-image-gif" />
                        </div>
                        <img src="http://tbjj.ru/img/t/sukharev.png" className="character" />
                    </div>
                    <div className="card thai sports__section">
                        <div className="wrapper">
                            <img
                                src="https://sportishka.com/uploads/posts/2022-11/1667508810_27-sportishka-com-p-taiskii-boks-stoika-oboi-28.jpg"
                                className="cover-image"
                            />
                        </div>
                        <img src="https://www.picng.com/upload/muay_thai/png_muay_thai_59277.png" className="character" />
                    </div>
                    <div className="card box sports__section">
                        <div className="wrapper">
                            <img src="https://phcorner.net/attachments/1563742008193-png.651056/" className="cover-image" />
                        </div>
                        <img src="https://static.tildacdn.com/tild3564-3930-4238-a536-666463343939/noroot.png" className="character" />
                    </div>
                </div>
            </div>
            {/* <SimpleSlider /> */}
            {isClicked ? (
                <>
                    <div className="description">
                        <div className="description__container container">
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
        </>
    );
};

export default Home;
