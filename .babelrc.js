const path = require('path');
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                "corejs": 3
            }
        ],
        
        "@babel/preset-react"
    ]
}