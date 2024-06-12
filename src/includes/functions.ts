
export function kana(str: string) {
  return str.replace(/[\u30a1-\u30f6]/g, function (match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });

}
// export function htmlspecialchars(text: string):any {
//   var map = {
//     '&amp;': '&',
//     '&#038;': "&",
//     '&lt;': '<',
//     '&gt;': '>',
//     '&quot;': '"',
//     '&#039;': "'",
//     '&#8217;': "’",
//     '&#8216;': "‘",
//     '&#8211;': "–",
//     '&#8212;': "—",
//     '&#8230;': "…",
//     '&#8221;': '”'
//   };

//   return text.replace(/\&[\w\d\#]{2,5}\;/g, function (m) { return map[m]; });

// }
interface DOMRectObject {
  x: Number,
  y: Number,
  width: Number,
  height: Number,
  top: Number,
  right: Number,
  bottom: Number,
  left: Number,
}

export const updateBound = (bound: DOMRectObject, newbound: DOMRect) => {
  bound.x = newbound.x
  bound.y = newbound.y
  bound.width = newbound.width
  bound.height = newbound.height
  bound.top = newbound.top
  bound.right = newbound.right
  bound.bottom = newbound.bottom
  bound.left = newbound.left
}

export const getBound = (rect: DOMRectObject) => {
  return {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
  }
}