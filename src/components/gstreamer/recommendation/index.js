import { h } from 'preact';
import { useState, useCallback, useEffect } from 'preact/hooks';
import style from './style.css';

const Recommendation = (props) => {
    const useRecommendation = props.useRecommendation;
    const useClose = props.useClose;
    const isClosed = props.isClosed;
    const userInput = props.userInput;

    const [selectedIndex, setSelectedIndex] = useState(0);
    if (selectedIndex === null) return;

    const recommendations = ["dxgiscreencapsrc", "ximagesrc", "videotestsrc", "directsoundsrc", "nvh264enc", "nvh264dec", "decodebin", "udpsink", "autovideosink", "autoaudiosink"];
    const maxElementVisible = 3;
    let startIndex = 0;

    if (selectedIndex >= maxElementVisible) {
        startIndex = selectedIndex - maxElementVisible + 1;
    }

    let endIndex = startIndex + maxElementVisible;

    let filteredRecommentations = recommendations.filter(x => !userInput || x.includes(userInput)).slice(startIndex, endIndex);
    const pagedSelected = selectedIndex >= maxElementVisible ? maxElementVisible - 1 : selectedIndex;

    const keyPressedHandler = useCallback((e) => {
        const keyPressed = e.code;
        if (keyPressed === "ArrowUp") { setSelectedIndex(selectedIndex - 1); }
        if (keyPressed === "ArrowDown") { setSelectedIndex(selectedIndex + 1); }
        if (keyPressed === "Enter") { useRecommendation(filteredRecommentations[pagedSelected]); }
    }, [setSelectedIndex, useRecommendation, selectedIndex]);

    useEffect(() => {
        window.addEventListener("keydown", keyPressedHandler);
        return () => { window.removeEventListener("keydown", keyPressedHandler); }
    }, [keyPressedHandler]);


    return (
        !isClosed &&
        <ul class={style.Recommendation}>
            {
                filteredRecommentations.map((x, id) =>
                    <li key={id}
                        selected={id === pagedSelected}
                        class={style.RecommendationElement}
                        onClick={(e) => { useRecommendation(e.target.innerText); }}>
                        {x}
                    </li>)
            }
        </ul>
    )
};

export default Recommendation;
