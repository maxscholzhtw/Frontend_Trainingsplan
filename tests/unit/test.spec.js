import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { test, expect } from 'vitest';

test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
        props: {msg}
    })
    expect(wrapper.text()).toMatch(msg)
})

test('renders the form fields correctly', () => {

    expect(wrapper.find('#workoutname').exists()).toBe(true);
    expect(wrapper.find('#firstname').exists()).toBe(true);
    expect(wrapper.find('#gender').exists()).toBe(true);
    expect(wrapper.find('#birthDate').exists()).toBe(true);
    expect(wrapper.find('#note').exists()).toBe(true);
});




