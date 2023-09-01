import React from "react";

import { UserDialog } from "../src/components";

export default {
  title: "UserDialog",
  component: UserDialog,
};

export const UserDialogStory = () => <UserDialog onClose={() => {}} open={false} />;

//TODO: Follow up on testing setup
// https://github.com/nightwatchjs/nightwatch-plugin-react/issues/6
// UserDialogStory.test = async (browser, { component, result }) => {
//   await expect(component).to.not.be.visible;
// };
