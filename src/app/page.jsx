"use client";
import Table from "@/Shared/Components/Tables/Table";
import { useState } from "react";

export default function Home() {
  const [selectedIds, setSelectedIds] = useState();
  const [filters, setFilters] = useState({});
  const data = {
    total: 10,
    data: [""],
  };

  // ALL DISPLAYED COLUMNS IN TABLE
  const [cols, setCols] = useState([
    {
      name: "Car Reg",
      attribute_name: "car_reg",
      minWidth: 70,
      show: true,
      isMainField: true,
    },
  ]);

  return (
    <div>
      <Table
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        itemsPerPage={filters?.perPage}
        totalItems={data?.total}
        setPageNo={(data) => setFilters({ ...filters, page: data })}
        perPage={filters?.perPage}
        isLoading={false}
        rows={data?.data?.map((d) => ({
          ...d,
          name: d?.name,
        }))}
        // actions={actions}
        isFullActionList={true}
        cols={cols}
      />
    </div>
  );
}
