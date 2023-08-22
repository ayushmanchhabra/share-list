import React from "react";

import { UserStatus } from "../src/components";

export default {
  title: "UserStatus",
  component: UserStatus,
};

export const UserStatusStory = Object.assign(() => <UserStatus status={"log-in"} />, {
  test: async (browser, { component, result }) => {
    await expect(component).to.be.visible;
  },
});
