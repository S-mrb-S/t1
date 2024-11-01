// plugins/macro-plugin.js
export default function ({ types: t }) {
    return {
      visitor: {
        BinaryExpression(path) {
          const { node } = path;
  
          if (node.operator === '<<') {
            const left = node.left;
            const right = node.right;
  
            const newNode = t.binaryExpression('+', left, right);
            path.replaceWith(newNode);
          }
        }
      }
    };
  };
  