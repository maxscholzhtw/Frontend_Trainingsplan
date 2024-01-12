import { shallowMount } from '@vue/test-utils';
import Create from '@/components/Create.vue';
import { test, expect } from 'vitest';

test('renders all input fields', () => {
    // Hier wird die Komponente mit shallowMount erstellt
    const wrapper = shallowMount(Create);

    // Überprüfen, ob alle Labels und zugehörigen Input-Felder vorhanden sind
    expect(wrapper.find('label[for="workoutname"]').exists()).toBe(true);
    expect(wrapper.find('#workoutname').exists()).toBe(true);

    expect(wrapper.find('label[for="uebung1"]').exists()).toBe(true);
    expect(wrapper.find('#uebung1').exists()).toBe(true);

    expect(wrapper.find('label[for="uebung2"]').exists()).toBe(true);
    expect(wrapper.find('#uebung2').exists()).toBe(true);

    expect(wrapper.find('label[for="uebung3"]').exists()).toBe(true);
    expect(wrapper.find('#uebung3').exists()).toBe(true);

    expect(wrapper.find('label[for="uebung4"]').exists()).toBe(true);
    expect(wrapper.find('#uebung4').exists()).toBe(true);

    expect(wrapper.find('label[for="uebung5"]').exists()).toBe(true);
    expect(wrapper.find('#uebung5').exists()).toBe(true);

    expect(wrapper.find('label[for="uebung6"]').exists()).toBe(true);
    expect(wrapper.find('#uebung6').exists()).toBe(true);
});
