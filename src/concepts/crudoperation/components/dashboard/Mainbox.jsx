import React from "react";
import { FaComments, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import StarCard from "./StarCard";
import Table from "./Table";
import Starbox from "./Starbox";

const Mainbox = () => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden p-7 gap-6">

      <h1 className="font-bold text-2xl">Dashboard</h1>

      <Starbox />

      <div className="grid grid-cols-4 gap-6">
        <StarCard
          title="Total clients"
          value="6389"
          icon={<FaUsers />}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
        />
        <StarCard
          title="Account balance"
          value="$ 46,760.89"
          icon={<FaWallet />}
          iconBg="bg-green-100"
          iconColor="text-green-600"
        />
        <StarCard
          title="New sales"
          value="376"
          icon={<FaShoppingCart />}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StarCard
          title="Pending contacts"
          value="35"
          icon={<FaComments />}
          iconBg="bg-teal-100"
          iconColor="text-teal-600"
        />
      </div>

      <Table />

    </div>
  );
};

export default Mainbox;