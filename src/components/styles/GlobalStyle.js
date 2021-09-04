import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  font-family: 'Merriweather', serif;
  line-height: 1;
  font-size: 16px;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.color}

  /* Optional but important */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  font-family: "Recoleta";
  font-weight: 500;
  color: ${prop => prop.theme.secondary};
}

a:hover, a:active, a:focus {
  text-decoration: none;
}

::selection {
  background-color: ${prop => prop.theme.secondary};
  color: white;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  border-radius: 0.3em;
  background: ${prop => prop.theme.codeSelect};
  color: ${prop => prop.theme.color};
  padding: 0.15em 0.2em 0.05em;
  white-space: normal;
}
`;

export default GlobalStyle;
