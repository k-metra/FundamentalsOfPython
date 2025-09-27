import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Codeblock({ children }) {
    return (
        <SyntaxHighlighter language="python" style={darcula} className="code-block">
            {children}
        </SyntaxHighlighter>
    )
}