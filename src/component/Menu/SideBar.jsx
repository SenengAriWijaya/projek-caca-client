import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [selectedMenu, setSelectedMenu] = useState();

  const menus = [
    {
      id: "menu_dashboard",
      name: "Beranda",
      icon: "/icon/Icon_Home.svg",
      icon_active: "/icon/Icon_Home_Active.svg",
      Link: "/"
    },
    {
      id: "menu_monitoring",
      name: "Monitoring",
      icon: "/icon/Icon_Mo.svg",
      icon_active: "/icon/Icon_Mo_Active.svg",
      Link: "/monitoring"
    },
    {
      id: "menu_logdata",
      name: "Log Data",
      icon: "/icon/Icon_Log.svg",
      icon_active: "/icon/Icon_Log_Active.svg",
      Link: "/logdata"
    }
  ];

  const handleMenu = (menu) => {
    setSelectedMenu(menu.id);
  };

  return (
    <>
      <div className="fixed">
        <Card className="w-[300px] h-screen" radius="none">
          <CardHeader className="px-6 pt-8">
            <div className="flex justify-between">
              <Image
                src="/icon/Logo.svg"
                alt="Profile Picture"
                className="w-[80px] h-[82px] mr-3"
              />
              <Image
                src="/icon/Text_Logo.svg"
                alt="Profile Picture"
                className="w-[150px] h-[82px]"
              />
            </div>
          </CardHeader>

          <CardBody className="px-8">
            <div className="text-lightGray font-medium text-[18px] font-barlow">
              Dashboard
            </div>
            <div className="py-8">
              {menus.map((menu) => (
                <Link
                  key={menu.id}
                  to={menu.Link}
                  className={`px-4 py-2 rounded-lg my-3 flex items-center gap-6 cursor-pointer ${
                    selectedMenu === menu.id ? "bg-lightBlue" : "bg-white"
                  }`}
                  onClick={() => handleMenu(menu)}
                >
                  <Image
                    src={selectedMenu === menu.id ? menu.icon_active : menu.icon}
                    alt="Profile Picture"
                    className="w-[20px] h-[20px]"
                  />
                  <span
                    className={`text-[18px] font-barlow ${
                      selectedMenu === menu.id
                        ? "text-primary font-semibold"
                        : "text-black font-medium"
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
