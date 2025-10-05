import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { store } from "./store";
import App from "./App.vue";

describe("App.vue", () => {
  beforeEach(() => {
    store.commit("RESET");
  });

  it("should render the count", () => {
    const wrapper = mount(App, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.text()).toContain("0");
  });

  it("should increment count when + button is clicked", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find('[data-testid="increment-btn"]').trigger("click");

    expect(wrapper.text()).toContain("1");
  });

  it("should decrement count when - button is clicked", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [store],
      },
    });

    store.commit("INCREMENT");
    store.commit("INCREMENT");

    await wrapper.find('[data-testid="decrement-btn"]').trigger("click");

    expect(wrapper.text()).toContain("1");
  });

  it("should reset count when reset button is clicked", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [store],
      },
    });

    store.commit("INCREMENT");
    store.commit("INCREMENT");

    await wrapper.find('[data-testid="reset-btn"]').trigger("click");

    expect(wrapper.text()).toContain("0");
  });
});
