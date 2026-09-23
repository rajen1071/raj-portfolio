// Splits a line of Java/Selenium code into colored tokens:
// strings -> green, `new` keyword -> pink, Capitalized types -> cyan, rest -> plain
export function tokenizeCode(text) {
  const regex = /("(?:[^"\\]|\\.)*")|(\bnew\b)|\b([A-Z][A-Za-z0-9]*)\b/g
  const result = []
  let lastIndex = 0
  let m
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIndex) {
      result.push({ text: text.slice(lastIndex, m.index), cls: 'tok-plain' })
    }
    if (m[1]) result.push({ text: m[1], cls: 'tok-string' })
    else if (m[2]) result.push({ text: m[2], cls: 'tok-keyword' })
    else if (m[3]) result.push({ text: m[3], cls: 'tok-type' })
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    result.push({ text: text.slice(lastIndex), cls: 'tok-plain' })
  }
  return result
}
