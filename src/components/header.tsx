import { Filter } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface HeaderProps {
  search: string;
  setSearch: (search: string) => void;
  category: string;
  setCategory: (category: string) => void;
}
export default function Header({
  search,
  setSearch,
  category,
  setCategory,
}: HeaderProps) {
  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value) {
      setCategory("");
    }
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    if (value) {
      setSearch("");
    }
  };

  return (
    <>
      <div className="pb-6  fixed top-0 z-50 w-full">
        <Card className="flex flex-row justify-betweenw px-12">
          <Label
            className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            NEWS
          </Label>
          <Input
            placeholder="Search news..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Select
            value={category}
            onValueChange={(value) => handleCategoryChange(value)}
          >
            <SelectTrigger className="hidden sm:flex w-[180px] cursor-pointer">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>

            <SelectTrigger className="flex sm:hidden w-14 h-10  justify-center">
              <Filter className="w-5 h-5" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Card>
      </div>
    </>
  );
}
