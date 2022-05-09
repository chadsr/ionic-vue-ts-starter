import Tab1Page from '@/views/Tab1Page.vue';
import { mount } from '@vue/test-utils';

describe('FolderPage.vue', () => {
  it('renders folder view', () => {
    const mockRoute = {
      params: {
        id: 'Outbox',
      },
    };
    const wrapper = mount(Tab1Page, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toMatch('Explore UI Components');
  });
});
