import React from "react";

import { UserDialog } from "../src/components";

export default {
  title: "UserStatus",
  component: UserDialog,
};

export const UserDialogStory = Object.assign(() => <UserDialog onClose={() => {}} open={true} />, {
  test: async (browser, { component, result }) => {
    await expect(component).to.be.visible;
  },
});
