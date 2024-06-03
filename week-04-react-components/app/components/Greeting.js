export default function Greeting(props) {
    const displayName = props.name ?? 'Jane doe';
    return <p>Hello {displayName}, how are you?</p>; 
}