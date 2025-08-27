import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import HomePage from '../HomePage.vue';

describe('HomePage', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(HomePage);
    expect(wrapper.text()).toContain('Test App Explore UI Components');
  });
});
