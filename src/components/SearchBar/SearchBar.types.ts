export interface SearchBarProps {
    searchTerm: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }