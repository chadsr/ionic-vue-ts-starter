import HomePage from '@/views/HomePage.vue';
import { mount } from '@vue/test-utils';

describe('FolderPage.vue', () => {
  it('renders folder view', () => {
    const mockRoute = {
      params: {
        id: 'Outbox',
      },
    };
    const wrapper = mount(HomePage, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toMatch('Explore UI Components');
  });
});
