import React from 'react';

/**
 * Simple content renderer that parses markdown-like syntax
 * Handles: ##headings, ###subheadings, **bold**, `code`, ```blocks```, tables, lists
 */
function ContentRenderer({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={key++}>
          <code className={lang ? `language-${lang}` : undefined}>
            {codeLines.join('\n')}
          </code>
        </pre>
      );
      i++;
      continue;
    }

    // Table
    if (line.includes('|') && lines[i + 1] && lines[i + 1].includes('---')) {
      const tableLines = [];
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split('|').filter(Boolean).map(h => h.trim());
      const rows = tableLines.slice(2).map(row =>
        row.split('|').filter(Boolean).map(cell => cell.trim())
      );
      elements.push(
        <table key={key++}>
          <thead>
            <tr>{headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => <td key={ci}>{renderInline(cell)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      );
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++}>{renderInline(line.slice(3))}</h2>);
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(<h3 key={key++}>{renderInline(line.slice(4))}</h3>);
      i++;
      continue;
    }

    // H4
    if (line.startsWith('#### ')) {
      elements.push(<h4 key={key++}>{renderInline(line.slice(5))}</h4>);
      i++;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      const listItems = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        listItems.push(
          <li key={i}>{renderInline(lines[i].replace(/^\d+\.\s+/, ''))}</li>
        );
        i++;
      }
      if (listItems.length > 0) elements.push(<ol key={key++}>{listItems}</ol>);
      continue;
    }

    // Unordered list
    if (isUnorderedListLine(line)) {
      const listItems = [];
      while (
        i < lines.length &&
        (isUnorderedListLine(lines[i]) || lines[i].startsWith('  '))
      ) {
        if (lines[i].trim()) {
          listItems.push(
            <li key={i}>
              {renderInline(stripUnorderedMarker(lines[i]).replace(/^ {2}/, ''))}
            </li>
          );
        }
        i++;
      }
      if (listItems.length > 0) elements.push(<ul key={key++}>{listItems}</ul>);
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Regular paragraph
    if (line.trim()) {
      elements.push(<p key={key++}>{renderInline(line)}</p>);
    }

    i++;
  }

  return <div className="content-body">{elements}</div>;
}

function isUnorderedListLine(line) {
  return /^[-*•]\s+/.test(line) || /^[^\w\s]\s+/.test(line);
}

function stripUnorderedMarker(line) {
  return line.replace(/^[-*•]\s+/, '').replace(/^[^\w\s]\s+/, '');
}

function renderInline(text) {
  if (!text) return null;
  // Split by bold (**text**) and inline code (`code`)
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**')) {
      parts.push(<strong key={match.index}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`')) {
      parts.push(<code key={match.index}>{token.slice(1, -1)}</code>);
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default ContentRenderer;
