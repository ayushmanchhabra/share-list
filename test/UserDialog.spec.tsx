import React from "react";

import { UserDialog } from "../src/components";

export default {
  title: "UserDialog",
  component: UserDialog,
};

export const UserDialogOpenStory = Object.assign(() => <UserDialog onClose={() => {}} open={true} />, {
  test: async (browser, { component, result }) => {
    await expect(component).to.be.visible;
  },
});

export const UserDialogCloseStory = Object.assign(() => <UserDialog onClose={() => {}} open={false} />, {
  test: async (browser, { component, result }) => {
    await expect(component).to.not.be.visible;
  },
});