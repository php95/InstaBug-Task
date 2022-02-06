import RangeFilter from '../components/vue-components/range-filter.vue';
import { mount } from '@vue/test-utils';

describe('Range Filter Component unit tests: ', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(RangeFilter);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
