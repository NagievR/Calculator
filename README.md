<h1>Calculator using React and Context API</h1>
<h2>Try it</h2>
https://nagievr.github.io/Calculator/
<h2>Description</h2>
The reason why I didnt use any state manager is simple - I wanted to practice only with React and its capabilities.
</br>
The calculator understands the priority of operators. It means the following:
<pre>
        2 + 2 * 2 = 6,  not 8
    2 + 2 * 2 * 2 = 10, not 16
</pre>
<h3>Journal</h3>
The journal displays the history of calculations and full current expression.



<h2>Keyboard Shortcuts</h2>
<table>
  <tr>
    <th>Shortcut</th>
    <th>Description</th>
  </tr>
  
  <tr>
    <td> <kbd>→</kbd> </br> <kbd>f</kbd> </td>
    <td> toggle journal </td>
  </tr>
    
  <tr>
    <td> <kbd>Delete</kbd> </br> <kbd>Esc</kbd> </td>
    <td> clear all </td>
  </tr>
  
  <tr>
    <td> <kbd> ← Backspace </kbd> </td>
    <td> remove a symbol </td>
  </tr>
  
  <tr>
    <td> <kbd> Shift </kbd> </td>
    <td> negative number </td>
  </tr>
</table>

