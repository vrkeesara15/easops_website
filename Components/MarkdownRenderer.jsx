export function MarkdownRenderer({ content }) {
  const lines = content.split(/\r?\n/);
  const elements = [];
  let paragraph = [];
  let listItems = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      elements.push(
        <p key={`paragraph-${elements.length}`}>{paragraph.join(' ')}</p>
      );
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`}>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={`h3-${elements.length}`}>{trimmed.replace(/^###\s+/, '')}</h3>
      );
    } else if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h2 key={`h2-${elements.length}`}>{trimmed.replace(/^##\s+/, '')}</h2>
      );
    } else if (trimmed.startsWith('# ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h1 key={`h1-${elements.length}`}>{trimmed.replace(/^#\s+/, '')}</h1>
      );
    } else if (trimmed.startsWith('- ')) {
      flushParagraph();
      listItems.push(trimmed.replace(/^-\s+/, ''));
    } else if (trimmed === '') {
      flushParagraph();
      flushList();
    } else {
      paragraph.push(trimmed);
    }
  });

  flushParagraph();
  flushList();

  return <div className="markdown-renderer">{elements}</div>;
}
