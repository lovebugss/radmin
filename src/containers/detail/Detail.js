/**
 * Created by renjp on 2019/1/2.
 */
import React from 'react';
import {connect} from 'react-redux';
import remark from 'remark'
import reactRenderer from 'remark-react'
import Layouts from '../index'

import style from './style.css'
import  './markdown.css'
const articleContent = `# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)`;
function Detail(props) {
    return (
        <Layouts>
        <div className={style.detail}>
            <div className={style.header}>
                <h1>文章标题在这里</h1>
            </div>
            <div className="main">
                <div id='preview' className={style.content}>
                    <div className="markdown_body">
                        {remark().use(reactRenderer).processSync(articleContent).contents}
                    </div>
                </div>
            </div>
        </div>
    </Layouts>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);