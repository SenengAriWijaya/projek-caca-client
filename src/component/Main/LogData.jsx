import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import useSWR from "swr";
import axios from "axios";
import { useState, useMemo } from "react";

export default function LogData() {
  const fetcher = async () => {
    const response = await axios.get("http://localhost:3100/api/allSensors");
    return response.data;
  };

  const { data } = useSWR("sensors", fetcher);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(data?.length / rowsPerPage);

  const dataSensors = useMemo (() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data ? data.slice(start, end) : [];
    // return data.slice(start, end)
  }, [data, page]);

  if (!data) return <div>Loading...</div>;
  const dataMenu = [
    {
      key: "id",
      label: "No",
    },
    {
      key: "tanggal",
      label: "Tanggal",
    },
    {
      key: "waktu",
      label: "Waktu",
    },
    {
      key: "jam",
      label: "Jam",
    },
    {
      key: "sensor_co",
      label: "CO",
    },
    {
      key: "sensor_pm",
      label: "PM2.5",
    },
    {
      key: "kategori",
      label: "Kategori",
    },
  ];

  return (
    <>
      <div className="bg-[#F3F2F7]">
        <div className="ml-[300px] p-8">
          <div className="relative flex items-center justify-between">
          <input
              type="text"
              className="card w-[780px] py-2 px-3 font-normal text-[16px] font-barlow"
              placeholder="Cari Disini"
            />
            <div className="absolute right-[345px]">
              <Image
                src="/icon/search.svg"
                alt="Search Icon"
                className="cursor-pointer"
              />
            </div>
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
              Log Data
            </h1>
            <p className=" font-medium text-[18px] font-barlow text-gray">
              List Log Data
            </p>
          </div>
          <div className="py-4 mb-20">
            <Table
              aria-label="Example table with dynamic content"
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
              classNames={{
                wrapper: "min-h-[222px]",
              }}
            >
              <TableHeader columns={dataMenu}>
                {(menu) => (
                  <TableColumn
                    key={menu.key}
                    className="px-10 bg-second text-white"
                  >
                    {menu.label}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={dataSensors}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey) => (
                      <TableCell className="px-10">
                        {getKeyValue(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
