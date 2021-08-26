export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  parenthesesBalance = 0;
  text.split('').forEach(element => {
      if( element === '(') parenthesesBalance++; 
      if( element === ')' ) parenthesesBalance--;
  });
  if (parenthesesBalance === 0) return true;
  return false;
}