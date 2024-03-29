import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/addon-test-support/setup-mirage";

module("Acceptance | list rentals", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("should show rentals as the home page", async function(assert) {
    await visit("/");
    assert.equal(currentURL(), "/rentals", "should redirect automatically");
  });

  test("should link to information about the company", async function(assert) {
    await visit("/");
    await click(".menu-about");
    assert.equal(currentURL(), "/about", "should navigate to about");
  });

  test("should link to contact information", async function(assert) {
    await visit("/");
    await click(".menu-about");
    assert.equal(currentURL(), "/contact", "should navigate to contact");
  });
  test("should list avaialble rentals", async function(assert) {
    await visit("/");
    assert.equal(
      this.element.querySelectorAll(".listing").length,
      3,
      "should display 3 listings"
    );
  });
  // test("should filtet the list of rentals by city", async function(assert) {});
  // test("should show details for a selected rentals", async function(assert) {});
});
