"use client";

import { useThemeParams } from "@telegram-apps/sdk-react";
import { List } from "@telegram-apps/telegram-ui";

import { DisplayData } from "@/components/DisplayData/DisplayData";
import { updateUser } from "../actions";
import { Button } from "@telegram-apps/telegram-ui";

export default function ThemeParamsPage() {
  const themeParams = useThemeParams();
  // const x = await fetch("/api/test");
  // console.log(x);
  return (
    <List>
      <DisplayData
        rows={Object.entries(themeParams.getState()).map(([title, value]) => ({
          title: title
            .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
            .replace(/background/, "bg"),
          value,
        }))}
      />
      <Button
        onClick={() => {
          updateUser("123asdf").then((res) => console.log(res));
        }}
      >
        Update user
      </Button>
    </List>
  );
}
