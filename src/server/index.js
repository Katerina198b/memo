import React from 'react'
import register from 'ignore-styles'
import app from './app'

register(['.styl']);

global.React = React;

app.set('port', process.env.PORT || 3000)
    .listen(
        app.get('port'),
        () => console.log(`Color Organizer running at 'http://localhost:${app.get('port')}'`)
    );
