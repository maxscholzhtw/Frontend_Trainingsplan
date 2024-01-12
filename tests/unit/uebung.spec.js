import {flushPromises, mount} from '@vue/test-utils';
import Uebung from '@/components/Uebung.vue';
import { test, expect } from 'vitest';


test('calls deleteUebung method when delete button is clicked', async () => {
    const wrapper = mount(Uebung);
    let deleteUebungCalled = false;
    wrapper.vm.deleteUebung = async (uebungsId) => {
        deleteUebungCalled = true;
    };
    await wrapper.vm.getUebung();
    wrapper.find('.deleteButton').trigger('click');
    await flushPromises();
    expect(deleteUebungCalled).toBe(true);
});
