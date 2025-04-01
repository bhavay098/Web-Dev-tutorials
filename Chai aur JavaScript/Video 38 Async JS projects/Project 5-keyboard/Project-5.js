// Project link: https://stackblitz.com/edit/dom-project-chaiaurcode-axgjdksd?file=5-keyboard%2Findex.html,5-keyboard%2Fchaiaurcode.js


let insert = document.getElementById('insert'); // accessing the div element with insert id

window.addEventListener('keydown', function (e) {
    insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});