// in the future can prob do : <script type="importmap" src="/import-map.json"></script>
const prepend = ( document.location.hostname.indexOf( 'localhost' ) === -1 )? '/gamephysics' : '';

document.body.appendChild(Object.assign(document.createElement('script'), {
type		: 'importmap',
innerHTML	: `
    {"imports":{
        "three"             : "${prepend}/thirdparty/three.module.min.js",
        "OrbitControls"	    : "${prepend}/thirdparty/OrbitControls.js",
        "gltfParser"        : "${prepend}/thirdparty/gltf2parser.es.js",
        "gl-matrix"         : "${prepend}/thirdparty/gl-matrix/index.js"
    }}
`}));