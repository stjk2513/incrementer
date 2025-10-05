import { describe, it, expect } from "vitest";
import { store } from "./store";

describe("Vuex Store", () => {
  it("should have initial count of 0", () => {
    expect(store.state.count).toBe(0);
  });

  it("should dispatch increment action", async () => {
    await store.dispatch("increment");
    expect(store.state.count).toBe(1);
  });

  it("should dispatch decrement action", async () => {
    await store.dispatch("decrement");
    expect(store.state.count).toBe(0);
  });

  it("should dispatch reset action", async () => {
    store.commit("INCREMENT");
    await store.dispatch("reset");
    expect(store.state.count).toBe(0);
  });
});
