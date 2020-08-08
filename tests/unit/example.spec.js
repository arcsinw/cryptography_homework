import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
// import "@/components/encoding.js"
import "@/components/base64.js"

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("encoding getBytes test", () => {
  it("renders props.msg when passed", () => {
    console.log("你好".toBytes())
    // expect(wrapper.text()).toMatch(msg);
  });
});

describe("encoding getBytes test", () => {
  it("renders props.msg when passed", () => {
    console.log("你好".toBase64String())
  });
});