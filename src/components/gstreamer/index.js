import { h } from 'preact';
import { useState, useCallback } from "preact/hooks";
import Pipeline from './pipeline';
import PipelineInput from './pipeline-input';
import Recommendation from './recommendation';
import style from './style.css';

const pipelinesString = "dxgiscreencapsrc width=1920 height=1080 cursor=1 ! video/x-raw,framerate=60/1 ! nvh264enc preset=low-latency-hp zerolatency=true max-bitrate=2000 ! queue ! rtph264pay ! udpsink host=127.0.0.1 port=9996 directsoundsrc ! decodebin ! audioconvert ! audioresample ! rtpL16pay ! udpsink host=127.0.0.1 port=9997";
const splitOnPipelineSrc = /\b(?=\w+src)/;

const Gstreamer = () => {
    const [pipelineCmd, setPipelineCmd] = useState("");
    const [isRecommendationClosed, setIsRecommendationClosed] = useState(true);

    const addRecommendationToPipeline = useCallback((recommendation) => {
        if (!recommendation) return;

        setPipelineCmd(pipelineCmd + recommendation + " ");
    }, [setPipelineCmd, pipelineCmd]);

    const closeRecommendation = useCallback(() => {
        setIsRecommendationClosed(true);
    }, [setIsRecommendationClosed]);

    const pipelines = pipelineCmd ? pipelineCmd.split(splitOnPipelineSrc) : [];

    const lastWordTypedRegex = pipelineCmd.match(/\w+$/);
    const lastWordTyped = lastWordTypedRegex && lastWordTypedRegex.length ? lastWordTypedRegex[0] : null;
    return (
        <div class={style.Gstreamer}  >
            <div>RAW: {pipelinesString}</div>
            <br />
            <PipelineInput
                onInput={(e) => setPipelineCmd(e.target.value)}
                value={pipelineCmd}
                onFocus={() => setIsRecommendationClosed(false)}
                onBlur={() => setTimeout(closeRecommendation, 150)} />
            <Recommendation useRecommendation={addRecommendationToPipeline} isClosed={isRecommendationClosed} userInput={lastWordTyped} useClose={closeRecommendation} />
            <div class={style.Spacing}></div>
            {pipelines.map((x, id) => <Pipeline key={id} pipeline={x} />)}
        </div>
    );
};

export default Gstreamer;
