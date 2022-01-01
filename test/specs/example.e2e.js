describe("technolife login page", () => {
  it("should login with no errors", async () => {
    await browser.url(`https://www.technolife.ir/account/Login`);

    await $('[name="inputValue"]').setValue("09029451328");
    await $('button[type="submit"]').click();
    await $("#confirm-pass").setValue("testtest");
    await $('button[type="submit"]').click();

    await expect($('[class="txt"]')).toBeExisting();
    await expect($('[class="txt"]')).toHaveTextContaining("09029451328");
  });
});
