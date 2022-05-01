module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript', //after add tsc
        ['@babel/preset-react',{
            runtime: 'automatic'
             // this is the default value - react will be transpiled to create a runtime
             //remove the need to import React and ReactDOM in the code
        }]
    ]

} 