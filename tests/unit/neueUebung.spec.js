import { shallowMount } from '@vue/test-utils';
import { test, expect } from 'vitest';
import NeueUebung from '@/components/NeueUebung.vue';
import neueUebung from "@/components/NeueUebung.vue";

test('renders all input fields', () => {
    // Hier wird die Komponente mit shallowMount erstellt
    const wrapper = shallowMount(neueUebung);

    // Überprüfen, ob alle Labels und zugehörigen Input-Felder vorhanden sind
    expect(wrapper.find('label[for="name"]').exists()).toBe(true);
    expect(wrapper.find('#name').exists()).toBe(true);

    expect(wrapper.find('label[for="beschreibung"]').exists()).toBe(true);
    expect(wrapper.find('#beschreibung').exists()).toBe(true);
});
