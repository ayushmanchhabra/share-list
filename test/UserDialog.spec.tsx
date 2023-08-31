import React from "react";

import { UserDialog } from "../src/components";

export default {
  title: "UserDialog",
  component: UserDialog,
};

export const UserDialogStory = () => <UserDialog onClose={() => {}} open={false} />;

UserDialogStory.test = async (browser, { component, result }) => {
  await expect(component).to.not.be.visible;
};
