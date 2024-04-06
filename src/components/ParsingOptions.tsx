import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ParsingOptionsProps = {
  options: {
    value: string;
    name: string;
  }[];
  selectedOption: string;
  onValueChange: (value: "xml" | "json") => void;
};

export function ParsingOptions({
  options,
  selectedOption,
  onValueChange,
}: ParsingOptionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedOption.toUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Input Type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedOption}
          onValueChange={(val) => onValueChange(val as "xml" | "json")}
        >
          {options.map(({ value, name }) => (
            <DropdownMenuRadioItem key={value} value={value}>
              {name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
