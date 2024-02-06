"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import qs from "query-string";
import { useDebounce } from "usehooks-ts";

const SearchInput = () => {
  return (
    <div className="w-full relative">
      <Search />
      <Input />
    </div>
  );
};

export default SearchInput;
