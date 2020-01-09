import { configure } from '@storybook/react';

configure(require.context('../src/components', true, /\.story\.tsx$/), module);
