import { h } from 'preact';
import { Link } from 'preact-router/match';
import PipelineElement from '../pipeline-element';
import Seperator from '../seperator';
import style from './style.css';

const splitOnExclamationMark = /!/;

const Pipeline = (props) => {
    const pipelineElements = props.pipeline.split(splitOnExclamationMark);
    return (
        <ul class={style.Pipeline}>
            {pipelineElements.map((x, id) =>
                <li key={id}>
                    {id !== pipelineElements.length - 1 ? <PipelineElement value={x + " !"} /> : <PipelineElement value={x} />}
                </li>)}
        </ul>
    )
};

export default Pipeline;
