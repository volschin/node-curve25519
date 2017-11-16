{
  "targets": [
    {
      "target_name": "curve",
      "sources": [ "node_curve.cc" ],
      'defines': [ 'V8_DEPRECATION_WARNINGS=1' ],
      'include_dirs': [
      	"<!(node -e \"require('nan')\")"
      ]
     }
    ]
}
