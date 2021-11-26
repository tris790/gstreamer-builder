import { h } from 'preact';
import { Link } from 'preact-router/match';
import Seperator from '../seperator';
import style from './style.css';

const splitOnSpace = /(?<![^!])\ /;
const PipelineElement = (props) => {
    const pipelineArguments = props.value.trim().split(splitOnSpace);

    return (
        <ul class={style.PipelineElement}>
            {pipelineArguments.map((x, id) => <li key={id}>{x}</li>)}
        </ul>
    )
};

export default PipelineElement;
