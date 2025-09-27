import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Terminalblock({ children }) {
    return (
        <Prism language="bash" style={vscDarkPlus} className="terminal-block">
            {children}
        </Prism>
    );
}