import React from "react";

import { FiBluetooth, FiTerminal, FiWifi } from "react-icons/fi";

import { TabbedContent, TabType } from "@components/generic/TabbedContent.js";
import { BLE } from "@components/PageComponents/Connect/BLE.js";
import { HTTP } from "@components/PageComponents/Connect/HTTP.js";
import { Serial } from "@components/PageComponents/Connect/Serial.js";

export const NewDevice = () => {
  const tabs: TabType[] = [
    {
      name: "BLE",
      icon: <FiBluetooth className="h-4" />,
      element: BLE,
      disabled: !navigator.bluetooth,
      disabledMessage:
        "Web Bluetooth is currently only supported by Chromium-based browsers",
      disabledLink:
        "https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"
    },
    {
      name: "HTTP",
      icon: <FiWifi className="h-4" />,
      element: HTTP,
      disabled: false,
      disabledMessage: "Unsuported connection method"
    },
    {
      name: "Serial",
      icon: <FiTerminal className="h-4" />,
      element: Serial,
      disabled: !navigator.serial,
      disabledMessage:
        "WebSerial is currently only supported by Chromium based browsers: https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility"
    }
  ];

  return (
    <div className="m-auto h-96 w-96">
      <TabbedContent tabs={tabs} />
    </div>
  );
};
