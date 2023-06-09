import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Inter', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html.yellow {
    background-color: var(--main-color);
  }

html.login {
    background-color: var(--main-color);
}

.onda{
    width: 100%;
    height: 56px;
}
.flex{
  display: flex;
    flex-wrap: wrap;
}
@media (min-width: 850px) {

    .onda {

    }
  }

:root{
    --main-color:#FEE440;

    --blue-1: #00BBF9;


    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;
    
    --sucess-1: #18794E;
    --sucess-2: #CCEBD7;
    --sucess-3: #DDF3E4;
    
    --gray-1: #2E2E2E;
    --gray-0: #212529;
    --gray-2: #495057;
    --gray-3: #868E96;
    --gray-4: #ADB5BD;
    --gray-5: #CED4DA;
    --gray-6: #DEE2E6;
    --gray-7: #E9ECEF;
    --gray-8: #F1F3F5;
    --gray-9: #F8F9FA;
    --gray-10:#FDFDFD;
    --gray-50: #EDEAFD;
    --gray-25: #B0A6F0;
    

    --green-0: #00BD13;
    --green-1: #349974;
    --green-2: #2A7D5F;
    --green-3: #153D2E;


    --font-family: 'Nunito', sans-serif;

    /* Títulos */
    --title-weight-bold: bold;
    --title-1-font-size: 30px;
    --title-2-font-size: 22px;
    --title-3-font-size: 16px;
    --title-4-font-size: 12px;

    /* Cabeçalhos */
    --headline-font-weight: normal;
    --headline-font-size: 16px;

    /* Corpo */
    --body-font-weight: normal;
    --body-font-size: large;
 }
`;
