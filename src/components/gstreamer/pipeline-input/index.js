import { h } from 'preact';
import style from './style.css';

const PipelineInput = (props) => {
    return (
        <div class={style.PipelineInputContainer}>
            <input name="pipeline" placeholder="Enter your Gstreamer pipeline" {...props} class={style.PipelineInput} />
        </div>
    )
};

export default PipelineInput;
