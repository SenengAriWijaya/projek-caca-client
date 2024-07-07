import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import useSWR from "swr";
import axios from "axios";
import { Input } from "@nextui-org/input";

export default function Monitoring() {
  const dataSensors = (url) => axios.get(url).then((res) => res.data.data);

  const { data: sensors, error } = useSWR(
    "http://localhost:3100/api/sensors",
    dataSensors,
    { refreshInterval: 1 }
  );

  if (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <>
      <div className="bg-[#F3F2F7]">
        <div className="ml-[300px] p-8">
          <div className="relative flex items-center justify-between">
            <Input
              type="text"
              placeholder="Cari Disini"
              className="w-[780px] bg-white rounded-sm"
              labelPlacement="outside"
              variant="bordered"
              radius="sm"
              size="md"
              endContent={
                <Image
                  src="/icon/search.svg"
                  className="mr-2"
                  height={25}
                  width={25}
                  alt="image"
                />
              }
            />
            <div className="pl-20 ">
              <div className="bg-lightBlue p-2 rounded-xl cursor-pointer">
                <Image
                  src="/icon/Icon_Notifikasi.svg"
                  alt="Search Notifikasi"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="py-6">
            <h1 className="font-semibold text-[32px] font-barlow text-black">
              Monitoring
            </h1>
            <p className=" font-medium text-[18px] font-barlow text-gray">
              Detail data monitoring
            </p>
          </div>
          {sensors && (
            <div className="grid grid-cols-12 gap-4 pb-6">
              <div className=" col-span-6">
                <div className="card py-6 px-6 flex items-center ">
                  <div className="font-bold text-[30px] font-barlow text-black">
                    CO Sensor
                  </div>
                  <div className=" pl-14">
                    <Image
                      src="/icon/Icon_Co.svg"
                      alt="Image Co"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="pl-6">
                    <div className="flex items-center gap-2">
                      <h1 className="font-bold text-[30px] font-barlow text-black">
                        {sensors.sensor_co}
                      </h1>
                      <h2 className="font-bold text-[30px] font-barlow text-black">
                        ug/m3
                      </h2>
                    </div>
                    <div className="font-normal text-[16px] font-barlow text-gray">
                      {sensors.tanggal}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-span-6">
                <div className="card py-6 px-6 flex items-center ">
                  <div className="font-bold text-[26px] font-barlow text-black">
                    PM 2.5 Sensor
                  </div>
                  <div className=" pl-14">
                    <Image
                      src="/icon/Icon_Pm.svg"
                      alt="Image Co"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="pl-6">
                    <div className="flex items-center gap-2">
                      <h1 className="font-bold text-[30px] font-barlow text-black">
                        {sensors.sensor_pm}
                      </h1>
                      <h2 className="font-bold text-[30px] font-barlow text-black">
                        ug/m3
                      </h2>
                    </div>
                    <div className="font-normal text-[16px] font-barlow text-gray">
                      {sensors.tanggal}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="card">
            <div className="flex items-center justify-between">
              <div className="p-6 font-bold text-[22px] font-barlow text-black">
                Detail Data
              </div>
              <div className="pr-3">
                <Image
                  src="/icon/Icon_Items.svg"
                  alt="Icon Items"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-evenly items-center mb-14">
              {sensors && (
                <div className="flex flex-col justify-center items-center">
                  <div className=" font-barlow font-bold  text-3xl">
                    Kondisi Udara Saat Ini
                  </div>
                  <p className=" font-barlow text-black">
                    Terahir diperbaharui {sensors.tanggal}
                  </p>
                </div>
              )}

              {sensors && (
                <div className="py-4">
                  <div className="flex items-center">
                    <Image
                      src="/icon/Ellipse_Hijau.svg"
                      alt="Icon Items"
                      className="cursor-pointer w-20 h-20 px-4"
                    />
                    <div
                      className={`font-barlow text-[20px] font-semibold cursor-pointer ${
                        sensors?.kategori === "Baik"
                          ? "text-white bg-[#159F59] rounded-full px-4 py-2"
                          : ""
                      }`}
                    >
                      Baik
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/icon/Ellipse_Biru.svg"
                      alt="Icon Items"
                      className="cursor-pointer w-20 h-20 px-4"
                    />
                    <div
                      className={`font-barlow text-[20px] font-semibold cursor-pointer ${
                        sensors?.kategori === "Sedang"
                          ? "text-white bg-[#178AF5] rounded-full px-4 py-2"
                          : ""
                      }`}
                    >
                      Sedang
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/icon/Ellipse_Kuning.svg"
                      alt="Icon Items"
                      className="cursor-pointer w-20 h-20 px-4"
                    />
                    <div
                      className={`font-barlow text-[20px] font-semibold cursor-pointer ${
                        sensors?.kategori === "Tidak Sehat"
                          ? "text-white bg-[#F5B417] rounded-full px-4 py-2"
                          : ""
                      }`}
                    >
                      Tidak Sehat
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/icon/Ellipse_Merah.svg"
                      alt="Icon Items"
                      className="cursor-pointer w-20 h-20 px-4"
                    />
                    <div
                      className={`font-barlow text-[20px] font-semibold cursor-pointer ${
                        sensors?.kategori === "Sangat Tidak Sehat"
                          ? "text-white bg-[#DD4536] rounded-full px-4 py-2"
                          : ""
                      }`}
                    >
                      Sangat Tidak Sehat
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/icon/Ellipse_Hitam.svg"
                      alt="Icon Items"
                      className="cursor-pointer w-20 h-20 px-4"
                    />
                    <div
                      className={`font-barlow text-[20px] font-semibold cursor-pointer ${
                        sensors?.kategori === "Berbahaya"
                          ? "text-white bg-[#000000] rounded-full px-4 py-2"
                          : ""
                      }`}
                    >
                      Berbahaya
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
