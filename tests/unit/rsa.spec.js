import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
// import "@/components/encoding.js"
import BigNumber from 'bignumber.js'
import * as rsa from "@/components/rsa.js"

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("BigNumber modInverse test", () => {
  it("mod inverse", () => {
    expect(rsa.modInverse(new BigNumber(1), new BigNumber(2)).toNumber()).toBe(1)       // = 1
    expect(rsa.modInverse(new BigNumber(3), new BigNumber(6))).toBe(NaN)       // = NaN
    expect(rsa.modInverse(new BigNumber(25), new BigNumber(87)).toNumber()).toBe(7)     // = 7
    expect(rsa.modInverse(new BigNumber(7), new BigNumber(87)).toNumber()).toBe(25)      // = 25
    expect(rsa.modInverse(new BigNumber(19), new BigNumber(1212393831)).toNumber()).toBe(701912218)     // = 701912218
    expect(rsa.modInverse(new BigNumber(31), new BigNumber(73714876143)).toNumber()).toBe(45180085378)    // = 45180085378
    expect(rsa.modInverse(new BigNumber(3), new BigNumber(73714876143))).toBe(NaN)     // = NaN
    expect(rsa.modInverse(new BigNumber(-7), new BigNumber(87)).toNumber()).toBe(62)     // = 62
    expect(rsa.modInverse(new BigNumber(-25), new BigNumber(87)).toNumber()).toBe(80)    // = 80
    expect(rsa.modInverse(new BigNumber(0), new BigNumber(3))).toBe(NaN)       // = NaN
    expect(rsa.modInverse(new BigNumber(0), new BigNumber(0))).toBe(NaN)       // = NaN
  });
});

describe("Native modInverse test", () => {
  it("mod inverse", () => {
    expect(rsa.nativeModInverse(1, 2)).toBe(1)       // = 1
    expect(rsa.nativeModInverse(3, 6)).toBe(NaN)       // = NaN
    expect(rsa.nativeModInverse(25, 87)).toBe(7)     // = 7
    expect(rsa.nativeModInverse(7, 87)).toBe(25)      // = 25
    expect(rsa.nativeModInverse(19, 1212393831)).toBe(701912218)     // = 701912218
    expect(rsa.nativeModInverse(31, 73714876143)).toBe(45180085378)    // = 45180085378
    expect(rsa.nativeModInverse(3, 73714876143)).toBe(NaN)     // = NaN
    expect(rsa.nativeModInverse(-7, 87)).toBe(62)     // = 62
    expect(rsa.nativeModInverse(-25, 87)).toBe(80)    // = 80
    expect(rsa.nativeModInverse(0, 3)).toBe(NaN)       // = NaN
    expect(rsa.nativeModInverse(0, 0)).toBe(NaN)       // = NaN
  });
});

