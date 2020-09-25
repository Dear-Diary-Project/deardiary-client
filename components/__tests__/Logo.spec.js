import { shallowMount } from "@vue/test-utils";
import Logo from "../Logo";


const factory = () => {
    return shallowMount(Logo, {
    });
};

describe("Logo", () => {
    test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders properly", () => {
        const wrapper = factory();
        expect(wrapper.html()).toMatchSnapshot();
    });
});