"use client";

import { postEvent, initMiniApp } from "@telegram-apps/sdk-react";
import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";

import { Link } from "@/components/Link/Link";

import tonSvg from "./_assets/ton.svg";
import { useEffect } from "react";
import { useCounterContract } from "@/hooks/useCounterContract";

const manifestUrl = "/tonconnect-manifest.json";

export default function Home() {
  const [miniApp] = initMiniApp();
  miniApp.setHeaderColor("#aa1132");
  // miniApp.sendData("web_app_expand");
  postEvent("web_app_expand");
  const { value, address: xaddress } = useCounterContract();

  // useEffect(() => {
  //   console.log("Home page loaded");
  //   postEvent("web_app_expand");
  // }, []);
  return (
    <TonConnectUIProvider manifestUrl="https://tma-jimyans-projects.vercel.app/tonconnect-manifest.json">
      <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link href="/ton-connect">
            <Cell
              before={
                <Image
                  src={tonSvg.src}
                  style={{ backgroundColor: "#007AFF" }}
                />
              }
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link href="/init-data">
            <Cell subtitle="User data, chat information, technical data">
              Init Data
            </Cell>
          </Link>
          <Link href="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">
              Launch Parameters
            </Cell>
          </Link>
          <Link href="/theme-params">
            <Cell subtitle="Telegram application palette information">
              Theme Parameters
            </Cell>
          </Link>
        </Section>
        <Section>
          <TonConnectButton />
        </Section>

        <Section>
          <Cell subtitle="Counter">
            <p>value:{value}</p>
            <p>address:{xaddress}</p>
          </Cell>
        </Section>
      </List>
    </TonConnectUIProvider>
  );
}
