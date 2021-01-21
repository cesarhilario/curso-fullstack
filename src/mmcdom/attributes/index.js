const HTML_ATTRIBUTES = {
  a: [
    'download',
    'href',
    'hreflang',
    'media',
    'rel',
    'target',
    'type'
  ],
  area: [
    'alt',
    'coords',
    'download',
    'href',
    'hreflang',
    'media',
    'rel',
    'shape',
    'target'
  ],
  audio: [
    'autoplay',
    'controls',
    'loop',
    'muted',
    'onabort',
    'oncanplay',
    'oncanplaythrough',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onseeked',
    'onseeking',
    'onstalled',
    'onsuspend',
    'ontimeupdate',
    'onvolumechange',
    'onwaiting',
    'preload',
    'src'
  ],
  base:[
    'href',
    'target',
  ],
  blockquote: [
    'cite'
  ],
  body: [
    'onafterprint',
    'onbeforeprint',
    'onbeforeunload',
    'onerror',
    'onhashchange',
    'onload',
    'onoffline',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpopstate',
    'onresize',
    'onstorage',
    'onunload'
  ],
  button: [
    'autofocus',
    'disabled',
    'formaction',
    'name',
    'type',
    'value'
  ],
  canvas: [
    'height',
    'width'
  ],
  col: [
    'span'
  ],
  colgroup: [
    'span'
  ],
  del: [
    'cite',
    'datetime'
  ],
  details: [
    'ontoggle',
    'open'
  ],
  embed: [
    'height',
    'onabort',
    'oncanplay',
    'onerror',
    'src',
    'type',
    'width'
  ],
  fieldset: [
    'disabled',
    'form',
    'name'
  ],
  form: [
    'accept-charset',
    'action',
    'autocomplete',
    'enctype',
    'method',
    'name',
    'novalidate',
    'onreset',
    'onsubmit',
    'rel',
    'target'
  ],
  globalAttr: [
    'accesskey',
    'class',
    'contenteditable',
    'dir',
    'draggable',
    'hidden',
    'id',
    'lang',
    'spellcheck',
    'style',
    'tabindex',
    'title',
    'translate'
  ],
  globalAttrrVisibleElements: [
    'onblur',
    'onchange',
    'onclick',
    'oncontextmenu',
    'oncopy', 
    'oncut',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'onfocus',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onpaste',
    'onscroll',
    'onselect',
    'onwheel'
  ],
  iframe: [
    'height',
    'name',
    'onload',
    'sandbox',
    'src',
    'srcdoc',
    'width'
  ],
  img: [
    'alt',
    'height',
    'ismap',
    'onabort',
    'onerror',
    'onload',
    'sizes',
    'src',
    'srcset',
    'usemap',
    'width'
  ],
  input: [
    'accept',
    'alt',
    'autocomplete',
    'autofocus',
    'checked',
    'dirname',
    'disabled',
    'form',
    'formaction',
    'height',
    'list',
    'max',
    'maxlength',
    'min',
    'multiple',
    'oninput',
    'onload',
    'onsearch',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'size',
    'src',
    'step',
    'type',
    'value',
    'width'
  ],
  ins: [
    'cite',
    'datetime'
  ],
  label: [
    'for',
    'form'
  ],
  li: [
    'value'
  ],
  link: [
    'href',
    'hreflang',
    'media',
    'onload',
    'rel',
    'sizes',
    'type'
  ],
  map: [
    'name'
  ],
  menu: [
    'type'
  ],
  meta: [
    'charset',
    'content',
    'http-equiv',  
    'name'
  ],
  meter: [
    'form',
    'high',
    'low',
    'max',
    'min',
    'optimum',
    'value'
  ],
  object: [
    'data',
    'form',
    'height',
    'name',
    'onabort',
    'oncanplay',
    'onerror',
    'type',
    'usemap',
    'width'
  ],
  ol: [
    'reversed',
    'start'
  ],
  optgroup: [
    'disabled',
    'label'
  ],
  option: [
    'disabled',
    'label',
    'selected',
    'value',
  ],
  output: [
    'for',
    'form',
    'name'
  ],
  param: [
    'name',
    'value'
  ],
  progress: [
    'max',
    'value'
  ],
  q: [
    'cite'
  ],
  script: [
    'async',
    'charset',
    'defer',
    'onerror',
    'onload',
    'src',
    'type'
  ],
  select: [
    'autofocus',
    'disabled',
    'form',
    'multiple',
    'name',
    'required',
    'size'
  ],
  source: [
    'media',
    'sizes',
    'src',
    'srcset',
    'type '
  ],
  style: [
    'media',
    'onerror',
    'onload',
    'type'
  ],
  textarea: [
    'autofocus',
    'cols',
    'dirname',
    'disabled',
    'form',
    'maxlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'wrap'
  ],
  track: [
    'default',
    'kind',
    'label',
    'oncuechange',
    'src',
    'srclang'
  ],
  td: [
    'colspan',
    'headers',
    'rowspan'
  ],
  th: [
    'colspan',
    'headers',
    'rowspan',
    'scope'
  ],
  time: [
    'datetime',
    'muted'
  ],
  video: [
    'autoplay',
    'controls',
    'height',
    'loop',
    'onabort',
    'oncanplay',
    'oncanplaythrough',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onseeked',
    'onseeking',
    'onstalled',
    'onsuspend',
    'ontimeupdate',
    'onvolumechange',
    'onwaiting',
    'poster',
    'preload',
    'src',
    'width'
  ]
}

export default HTML_ATTRIBUTES;