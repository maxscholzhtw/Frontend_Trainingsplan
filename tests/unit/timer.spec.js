import { mount } from '@vue/test-utils';
import Timer from '@/components/Timer.vue';
import { test, expect } from 'vitest';

test('Start-Funktionalität', async () => {
    const wrapper = mount(Timer);

    // Start des Timers
    await wrapper.vm.startStopwatch();


    await new Promise(resolve => setTimeout(resolve, 1000));

    // Überprüft, ob die gestartete Zeit größer als 0 ist
    expect(wrapper.vm.seconds + wrapper.vm.minutes + wrapper.vm.hours).toBeGreaterThan(0);

    // Überprüft, ob der Start-Button deaktiviert ist
    expect(wrapper.vm.startButtonDisabled).toBe(true);
});

test('Stop-Funktionalität', async () => {
    const wrapper = mount(Timer);

    // Start des Timers
    await wrapper.vm.startStopwatch();


    await new Promise(resolve => setTimeout(resolve, 1000));

    // Stoppt den Timer
    await wrapper.vm.stopStopwatch();


    await new Promise(resolve => setTimeout(resolve, 1000));

    // Überprüft, ob der Start-Button aktiviert ist
    expect(wrapper.vm.startButtonDisabled).toBe(false);
});

test('Reset-Funktionalität', async () => {
    const wrapper = mount(Timer);

    // Start des Timers
    await wrapper.vm.startStopwatch();


    await new Promise(resolve => setTimeout(resolve, 1000));

    // Setzt den Timer zurück
    await wrapper.vm.resetStopwatch();

    // Überprüft, ob die Zeit auf 0 zurückgesetzt wurde
    expect(wrapper.vm.seconds + wrapper.vm.minutes + wrapper.vm.hours).toBe(0);

    // Überprüft, ob der Start-Button aktiviert ist
    expect(wrapper.vm.startButtonDisabled).toBe(false);
});