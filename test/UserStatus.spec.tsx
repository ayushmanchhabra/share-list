import React from "react";

import { UserStatus } from "../src/components";
import {UserStatusSchema} from "../src/schema";

export default {
  title: "UserStatus",
  component: UserStatus,
};

export const UserStatusLogInStory = () => <UserStatus handleOpen={() => { }} status={UserStatusSchema.LOG_IN} />;

UserStatusLogInStory.test = async (browser, { component, result }) => {
  await expect(component).to.be.visible;
};

export const UserStatusLogOutStory = () => <UserStatus handleOpen={() => { }} status={UserStatusSchema.LOG_OUT} />;

UserStatusLogOutStory.test = async (browser, { component, result }) => {
  await expect(component).to.be.visible;
};

export const UserStatusLoadingStory = () => <UserStatus handleOpen={() => { }} status={UserStatusSchema.LOADING} />;

UserStatusLoadingStory.test = async (browser, { component, result }) => {
  await expect(component).to.be.visible;
};