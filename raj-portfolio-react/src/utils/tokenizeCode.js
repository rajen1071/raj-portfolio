// Splits a line of Java/Selenium code into syntax-highlighted tokens for the
// terminal/code-editor widget. Order matters: patterns are tried in a single
// pass left-to-right, so more specific patterns (strings, comments, numbers)
// are matched before generic identifiers.

const JAVA_KEYWORDS = new Set([
  'public', 'private', 'protected', 'static', 'final', 'void', 'new', 'return',
  'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break',
  'continue', 'try', 'catch', 'finally', 'throw', 'throws', 'import', 'package',
  'class', 'interface', 'extends', 'implements', 'this', 'super', 'null',
  'true', 'false', 'int', 'long', 'double', 'float', 'boolean', 'char', 'byte',
  'short', 'var', 'enum', 'abstract', 'synchronized', 'volatile', 'transient',
  'instanceof', 'const',
])

// A token is {text, cls}. cls maps to the tok-* colors defined in index.css.
// The identifier group uses a lookahead (?=\() to detect "is this a method
// call" WITHOUT consuming the "(" itself, so that character still flows
// through to the plain-text fallback on the next loop iteration.
const TOKEN_RE =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*\b)(?=\s*\()?/g

const URL_RE = /^https?:\/\//i
const ASSERT_RE = /^assert/i

export function tokenizeCode(text) {
  const result = []
  let lastIndex = 0
  let m

  TOKEN_RE.lastIndex = 0
  while ((m = TOKEN_RE.exec(text)) !== null) {
    if (m.index > lastIndex) {
      result.push({ text: text.slice(lastIndex, m.index), cls: 'tok-plain' })
    }

    const [full, comment, string, number, ident] = m
    // the lookahead isn't captured; re-check it directly against what follows
    const followedByParen = ident ? /^\s*\(/.test(text.slice(m.index + ident.length)) : false

    if (comment) {
      result.push({ text: comment, cls: 'tok-comment' })
    } else if (string) {
      result.push({ text: string, cls: URL_RE.test(string.slice(1, -1)) ? 'tok-url' : 'tok-string' })
    } else if (number) {
      result.push({ text: number, cls: 'tok-number' })
    } else if (ident) {
      if (JAVA_KEYWORDS.has(ident)) {
        result.push({ text: ident, cls: 'tok-keyword' })
      } else if (followedByParen) {
        result.push({ text: ident, cls: ASSERT_RE.test(ident) ? 'tok-assert' : 'tok-method' })
      } else if (/^[A-Z]/.test(ident)) {
        result.push({ text: ident, cls: 'tok-type' })
      } else {
        result.push({ text: ident, cls: 'tok-variable' })
      }
    }

    lastIndex = TOKEN_RE.lastIndex
    if (comment) break // a line comment consumes the rest of the line
  }

  if (lastIndex < text.length) {
    result.push({ text: text.slice(lastIndex), cls: 'tok-plain' })
  }
  return result
}
